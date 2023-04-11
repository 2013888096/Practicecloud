<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import Menu from './Menu.vue';
import {
  Fold,
  Bell
} from '@element-plus/icons-vue'
let router = useRouter();


const goHome = ()=>{
  router.push("/login")
}
// defineProps({
//   msg: String,
// })
const name = ref('Home')
</script>

<template>
  <div class="basic-layout">
    <el-container>
      <el-aside class="nav-side" width="200px">
        <!-- 系统Logo -->
        <div class="logo">
          <img src="./../assets/vite.svg" alt="">
          <span>Manager</span>
        </div>

        <!-- 导航菜单 -->
        <div class="nav-menu">
          <Menu />
        </div>     
      </el-aside>
      
      <el-container class="content-right">
        <el-header class="nav-top">
          <div class="nav-left">
            <div class="menu-flod"><el-icon><Fold /></el-icon></div>
            <div class="bread">面包菜单</div>
          </div>
          
          <div class="user-info">
            <el-badge :is-dot="true" class="notice m-lr10" type="danger">
              <el-icon><Bell /></el-icon>
            </el-badge>
            <el-dropdown>
              <span class="el-dropdown-link">
                <span class="el-avatar">
                  <img src="../assets/avatar.png" alt="" srcset="">
                </span>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>首页</el-dropdown-item>
                  <el-dropdown-item>个人信息</el-dropdown-item>
                  <el-dropdown-item>修改密码</el-dropdown-item>
                  <el-divider style="margin: 2px 0;"/>
                  <el-dropdown-item @click="goHome">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>

          </div>
          <!-- <el-button type="primary" @click="goHome">退出</el-button> -->
        </el-header>
        <el-main class="wrapper">
          <div class="main-page">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<style lang="scss">
.basic-layout{
  position: relative;
  .nav-side{
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    overflow-y: auto;
    transition: width .5s;

    .logo{
      display: flex;
      align-items: center;
      font-size: 18px;
      height: 50px;
      img{
        margin: 0 18px;
        width: 32px;
        height: 32px;
      }

    }
  }
  .nav-menu{
    height: calc(100vh - 50px);
    border-right: none;
  }
}
.content-right{

  .nav-top{
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    background: #fff;
    padding: 0 20px;

    .nav-left{
      margin-left: 200px;
      display: flex;
      align-items: center;
      .menu-flod{
        padding-top: 7px;
        margin-right: 15px;
        font-size: 18px;
      }
    }
    .user-info{
      padding-top: 5px;
      .notice{
        line-height: 30px;
      }
      .el-avatar{
        border-radius: 50%;
      }
      .el-avatar>img{
        width: 40px;
        height: 40px;
      }
      .el-avatar:hover{
        cursor: pointer;
      }
    }
  }
  .wrapper{
    margin-left: 200px;
    background: #eef0f3;
    height: calc(100vh - 50px);
    .main-page{
      background: #fff;
      height: calc(100vh - 100px);
    }
  }
}

</style>
