<template>
  <div>

    <div style="padding: 10px 0">
      <el-input v-model="input.teamid" placeholder="按车队查询" style="width: 150px"></el-input>
      <el-button type="primary" icon="el-icon-search" style="margin-left: 5px" @click="searchByTeam"></el-button>
    </div>

    <div>
        
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column
          prop="memberId"
          label="工号">
      </el-table-column>
      <el-table-column
          prop="memberName"
          label="姓名">
      </el-table-column>
      <el-table-column
          prop="gender"
          label="性别">
      </el-table-column>
      <el-table-column
          prop="teamId"
          label="车队">
      </el-table-column>
      <el-table-column
          prop="role"
          label="职位">
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

import axios from 'axios'
import AddMember from '@/components/AddMember.vue'

export default {
  name: 'Member',
  data() {
    return {
      tableData: [],
      input: {
        teamid: '',
      }
    }
  },components:{
    AddMember,axios
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
    }
  },
  created() {
    axios.get('/member/all')
        .then((response) => {
          this.tableData = response.data
        })
  }
}

</script>