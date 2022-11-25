<template>
    <div>
      <el-button @click="dialogFormVisible = true" >新增员工 <i class="el-icon-circle-plus-outline"></i></el-button>
      <el-dialog title="新增记录" :visible.sync="dialogFormVisible" width="30%" >
        <el-form :model="form">
          <el-form-item label="工号" :label-width="formLabelWidth">
            <el-input v-model="form.memberID" autocomplete="off" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.memberName" autocomplete="off" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-input v-model="form.gender" autocomplete="off" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="车队" :label-width="formLabelWidth">
            <el-input v-model="form.teamID" autocomplete="off" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="职位" :label-width="formLabelWidth">
            <el-input v-model="form.role" autocomplete="off" style="width: 200px"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  
</template>
  
<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          memberID: '',
          memberName: '',
          teamID: '',
          gender: '',
          role: ''
        },
        formLabelWidth: '120px'
      };
    }, 
  
  };
</script>