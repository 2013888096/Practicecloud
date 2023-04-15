<template>
  <template v-for="menu in userMenu">
    <el-sub-menu v-if="menu.children && menu.children.length>0 && menu.children[0].menuType == 1" :key="menu._id" :index="menu.path">
      <template #title>
        <!-- <el-icon color="#409EFC" :class="menu.icon"/> -->
        <!-- <i :class="[iconfont , menu.icon ]"></i> -->
        <span :class="['iconfont','iconfontm10f18', menu.icon ]"></span>
        <span>{{menu.menuName}}</span>
      </template>
      <TreeMenu :userMenu="menu.children" />
    </el-sub-menu>
    <el-menu-item v-else-if="menu.menuType == 1" :index="menu.path" >{{menu.menuName}}</el-menu-item>
  </template>
        <!-- <el-sub-menu index="2">
          <template #title>
            <el-icon><Promotion /></el-icon>
            <span>审批管理</span>
          </template>
          <el-menu-item index="2-1">休假申请</el-menu-item>
          <el-menu-item index="2-2">待我审批</el-menu-item>
        </el-sub-menu> -->
</template>
<script setup>
  import { ref } from 'vue'
  defineProps({
    userMenu:{
      trpe:Array,
      default(){
        return []
      }
    }
  })

  const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
  }
  const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
  }
</script>

<style lang="scss">
  
</style>
