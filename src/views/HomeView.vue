<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246); height: 100%">
        <el-menu :default-openeds="['1']" router :default-active="$route.path">
          <div style="height: 60px; line-height: 60px;text-align: center;">
            <img src="../assets/bus_logo.png" alt="" style="width: 20px ; position: relative;top: 3px;right: 5px">
            <b style="color: #333333">公交管理系统</b>
          </div>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-menu"></i>导航</template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="/member">成员列表</el-menu-item>
              <el-menu-item index="/record">违章记录</el-menu-item>
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
          <span>用户</span>
        </el-header>

        <el-main>

          <router-view></router-view>

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
import { RouterView } from 'vue-router';


export default {
  name: 'HomeView',
  data() {
    return {}
  },
  components: {
    MemberTable,
    RecordTable,
    IllegalRecordTable,
    RouterView
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
