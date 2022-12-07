<template>
  <div>

    <div style="padding: 10px 0">
      <el-input v-model="input.makerid" placeholder="按工号查询" style="width: 150px"></el-input>
      <el-input v-model="input.teamid" placeholder="按车队查询" style="width: 150px; margin-left: 5px"></el-input>
      <el-date-picker v-model="beginDate" type="date" placeholder="选择起始日期"
        style="width: 150px; margin-left: 5px"></el-date-picker>
      <el-date-picker v-model="endDate" type="date" placeholder="选择结束日期"
        style="width: 150px; margin-left: 5px"></el-date-picker>
      <el-button type="primary" icon="el-icon-search" style="margin-left: 5px" @click="searchByTeam"></el-button>
    </div>

    <div>
      <AddRecord @getAdd="getAdd"></AddRecord>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="recordId" label="违章记录编号"> </el-table-column>
      <el-table-column prop="recorderId" label="录入者工号"> </el-table-column>
      <el-table-column prop="makerId" label="肇事者工号"> </el-table-column>
      <el-table-column prop="teamId" label="车队"> </el-table-column>
      <el-table-column prop="illegalItem" label="违章事项"> </el-table-column>
      <el-table-column prop="recordDate" :formatter="dateFormat" label="违章日期">
      </el-table-column>
      <el-table-column prop="recordStopId" label="站点ID"> </el-table-column>
      <el-table-column prop="recordLicense" label="车牌号"> </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button icon="el-icon-edit" circle></el-button>
          <el-button icon="el-icon-delete" circle @click="deleteRecord(scope.row.recordId)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="padding: 13px 0">
      <el-pagination small hide-on-single-page="true" layout="prev, pager, next" :total="tableData.length">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import AddRecord from "@/components/AddRecord.vue";
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      tableData: [], // 表格数据
      beginDate: "", // 起始时间
      endDate: "", // 结束时间
      input: {
        makerid: "",
        teamid: "",
      },
      form: {
        maker: "",
        recorder: "",
        item: "",
        date: "",
        stop: "",
        license: "",
        team: "",
      },
    };
  },
  components: {
    AddRecord,
    axios,
  },
  methods: {
    searchByTeam() {
      axios
        .request("/record/makerdate", {
          params: {
            makerid: this.input.makerid,
            begin: this.beginDate,
            end: this.endDate
          },
        })
        .then((response) => {
          this.tableData = response.data;
        });
    },
    getAdd(dialog) {
      this.form = dialog;
      axios({
        url: "/record/insert",
        method: "POST",
        data: {
          makerId: this.form.maker,
          recorderId: this.form.recorder,
          teamId: this.form.team,
          illegalItem: this.form.item,
          recordStopId: this.form.stop,
          recordDate: this.form.date,
          recordLicense: this.form.license,
        },
      }).then((res) => {
        console.log(res);
        axios.get("/record/all").then((response) => {
          this.tableData = response.data;
        });
      });
    },
    deleteRecord(id) {
      axios({
        url: "/record/delete",
        method: "POST",
        data: {
          recordId: id,
        },
      }).then((res) => {
        console.log(res);
        axios.get("/record/all").then((response) => {
          this.tableData = response.data;
        });
      });
    },
    dateFormat(date) {
      return moment(date).format("YYYY-MM-DD")
    },
  },
  created() {
    //生命创建阶段，读取整个表
    axios.get("/record/all").then((response) => {
      this.tableData = response.data;
    });
  },
};
</script>
