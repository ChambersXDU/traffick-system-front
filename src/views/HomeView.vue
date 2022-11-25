<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246); height: 100%">
        <el-menu :default-openeds="['1', '2']">
          <div style="height: 60px; line-height: 60px;text-align: center;">
            <img src="../assets/bus_logo.png" alt="" style="width: 20px ; position: relative;top: 3px;right: 5px">
            <b style="color: #333333">公交管理系统</b>
          </div>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <div style="padding: 10px 0">

          </div>

          <MemberTable></MemberTable>

          <div style="padding: 13px 0">
            <el-pagination
                small
                layout="prev, pager, next"
                :total="50">
            </el-pagination>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios'
import MemberTable from '@/components/MemberTable.vue';
import RecordTable from '@/components/IllegalRecordTable.vue'
import IllegalRecordTable from '@/components/IllegalRecordTable.vue';


export default {
  name: 'HomeView',
  data() {
    return {}
  },
  components: {
    MemberTable,
    RecordTable,
    IllegalRecordTable
  },
  methods: {}
}
</script>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
