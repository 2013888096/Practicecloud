<template>
  <el-row class="tac">
    <el-col :span="24">
      <!-- <h5 class="mb-2 menu_title">Cloud</h5> -->
      <el-menu
        default-active="2"
        background-color="#001529"
        text-color="#fff"
        router
        :collapse="isCollapse"
        class="nav-menu"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><IconMenu /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="1-1">用户管理</el-menu-item>
          <el-menu-item index="1-2">菜单管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Promotion /></el-icon>
            <span>审批管理</span>
          </template>
          <el-menu-item index="2-1">休假申请</el-menu-item>
          <el-menu-item index="2-2">待我审批</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script setup>
  import { ref } from 'vue'
  import {
    Menu as IconMenu,
    Promotion
  } from '@element-plus/icons-vue'

  defineProps({
    isCollapse: Boolean,
  })

  const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
  }
  const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
  }
</script>
<style lang="scss">
  .menu_title{
    color: #e3e6ed;
    font-size: 35px;
    margin-left: 50px;
    margin-top: 10px;
  }
</style>
