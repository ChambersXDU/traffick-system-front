<template >
  <div>

    <div style="padding: 10px 0">
      <el-input v-model="input.teamid" placeholder="按车队查询" style="width: 150px"></el-input>
      <el-button type="primary" icon="el-icon-search" style="margin-left: 5px" @click="searchByTeam"></el-button>
    </div>

    <div>
      <el-button @click="dialogFormVisible = true">新增员工 <i class="el-icon-circle-plus-outline"></i></el-button>
      <el-dialog title="新增员工" :visible.sync="dialogFormVisible" width="30%">
        <el-form :model="form">
          <el-form-item label="工号" :label-width="formLabelWidth">
            <el-input v-model.number="form.memberId" autocomplete="off" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.memberName" autocomplete="off" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-input v-model="form.gender" autocomplete="off" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="车队" :label-width="formLabelWidth">
            <el-input v-model.number="form.teamId" autocomplete="off" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="职位" :label-width="formLabelWidth">
            <el-input v-model="form.role" autocomplete="off" style="width: 200px"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addMember">确 定</el-button>
        </div>
      </el-dialog>
    </div>

    <el-table :data="tableData_in_page" style="width: 100%">
      <el-table-column prop="memberId" label="工号">
      </el-table-column>
      <el-table-column prop="memberName" label="姓名">
      </el-table-column>
      <el-table-column prop="gender" label="性别">
      </el-table-column>
      <el-table-column prop="teamId" label="车队">
      </el-table-column>
      <el-table-column prop="role" label="职位">
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-popconfirm confirm-button-text='确定' cancel-button-text='不用了' icon="el-icon-info" icon-color="red"
            title="确定要删除吗？此操作不可撤销" @confirm="deleteMember(scope.row.memberId)">
            <el-button slot="reference" icon="el-icon-delete" circle></el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <div style="padding: 13px 0">
      <el-pagination small layout="prev, next" :total="tableData.length" @prev-click="prevPage" @next-click="nextPage">
      </el-pagination>
    </div>

  </div>
</template>


<script>

import axios from 'axios'
import AddMember from '@/components/AddMember.vue'

export default {
  name: 'Member',
  data() {
    return {
      tableData: [],
      input: {
        teamid: '',
      },
      add: {
        memberName: '666',
        memberId: '',
      },
      dialogFormVisible: false,
      form: {
        memberId: '',
        memberName: '',
        teamId: '',
        gender: '',
        role: ''
      },
      formLabelWidth: '120px',
      cur_page: 1
    }
  }, components: {
    AddMember, axios
  },
  methods: {
    searchByTeam() {
      axios.request('/member/team', {
        params: {
          "teamid": this.input.teamid
        }
      }).then((response) => {
        this.tableData = response.data
      })
    }, addMember() {
      axios(
        {
          url: "/member/insert",
          method: "POST",
          data: {
            memberId: this.form.memberId,
            memberName: this.form.memberName,
            gender: this.form.gender,
            teamId: this.form.teamId,
            role: this.form.role
          }
        }
      ).then((res) => {
        console.log(res)
        axios.get('/member/all')
          .then((response) => {
            this.tableData = response.data
            this.$message.success('添加成功');
          })
      })
      this.dialogFormVisible = false
    }, deleteMember(id) {
      axios(
        {
          url: "/member/delete",
          method: "POST",
          data: {
            memberId: id
          }
        }
      ).then((res) => {
        console.log(res)
        axios.get('/member/all')
          .then((response) => {
            this.tableData = response.data
            this.$message.success('已删除一条记录');
          })
      })
    }, prevPage() {
      this.cur_page--
    }, nextPage() {
      this.cur_page++
    }
  },
  created() {
    axios.get('/member/all')
      .then((response) => {
        this.tableData = response.data
      })
  }, computed: {
    tableData_in_page() {
      return this.tableData.slice((this.cur_page - 1) * 10, this.cur_page * 10)
    }
  }
}

</script>