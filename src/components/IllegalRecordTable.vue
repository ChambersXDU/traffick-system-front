<template>
  <div>
    <div style="padding: 10px 0">
      <el-input v-model="input.teamid" placeholder="按工号查询" style="width: 150px"></el-input>
      <el-input v-model="input.teamid" placeholder="按车队查询" style="width: 150px;margin-left: 5px"></el-input>
      <el-date-picker v-model="beginDate" type="date" placeholder="选择起始日期"
                      style="width: 150px;margin-left: 5px;"></el-date-picker>
      <el-date-picker v-model="endDate" type="date" placeholder="选择结束日期"
                      style="width: 150px;margin-left: 5px;"></el-date-picker>
      <el-button type="primary" icon="el-icon-search" style="margin-left: 5px" @click="searchByTeam"></el-button>
    </div>

    <div>
      <AddRecord></AddRecord>
    </div>

    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="recordId"
          label="违章记录编号">
      </el-table-column>
      <el-table-column
          prop="recorderId"
          label="录入者工号">
      </el-table-column>
      <el-table-column
          prop="makerId"
          label="肇事者工号">
      </el-table-column>
      <el-table-column
          prop="teamId"
          label="车队">
      </el-table-column>
      <el-table-column
          prop="illegalItem"
          label="违章事项">
      </el-table-column>
      <el-table-column
          prop="recordDate"
          label="违章日期">
      </el-table-column>
      <el-table-column
          prop="recordStopId"
          label="站点ID">
      </el-table-column>
      <el-table-column
          prop="recordLicense"
          label="车牌号">
      </el-table-column>
      <el-table-column>
        <template>
          <el-button icon="el-icon-edit" circle></el-button>
          <el-button icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>

import AddRecord from '@/components/AddRecord.vue'
import axios from 'axios'

export default {
  data() {
    return {
      tableData: [], // 表格数据
      beginDate: '', // 起始时间
      endDate: '',   // 结束时间
      input: {
        makerid: '',
        teamid: ''
      },
    }
  }, components: {
    AddRecord,axios
  },
  methods: {
    searchByTeam() {
      axios.request('/record/', {
        params: {
          makerid: this.input.makerid
        }
      }).then((response) => {
        this.tableData = response.data
      })
    }
  },
  created() { //生命创建阶段，读取整个表
    axios.get('/record/all')
        .then((response) => {
          this.tableData = response.data
        })
  }
}

</script>