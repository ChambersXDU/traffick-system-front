<template>
  <div>
    <el-button @click="dialogFormVisible = true">新增记录 <i class="el-icon-circle-plus-outline"></i></el-button>
    <el-dialog title="新增记录" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="违章者工号" :label-width="formLabelWidth">
          <el-input v-model="form.maker" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="登记者工号" :label-width="formLabelWidth">
          <el-input v-model="form.recorder" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="车队" :label-width="formLabelWidth">
          <el-input v-model="form.team" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="违章事项" :label-width="formLabelWidth">
          <el-input v-model="form.item" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="违章日期" :label-width="formLabelWidth">
          <el-date-picker v-model="form.date" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="违章站点号" :label-width="formLabelWidth">
          <el-input v-model="form.stop" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="车牌号" :label-width="formLabelWidth">
          <el-input v-model="form.license" autocomplete="off"></el-input>
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
        maker: '',
        recorder: '',
        item: '',
        date: '',
        stop: '',
        license: '',
        resource: '',
        team: ''
      },
      formLabelWidth: '120px'
    };
  }
};
</script>