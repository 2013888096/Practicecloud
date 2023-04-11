<template>
  <div class="basic-layout">
    <el-container >
      <el-aside :class="['nav-side',isCollapse?'fold':'unfold']">
        <!-- 系统Logo -->
        <div class="logo">
          <img src="./../assets/vite.svg" alt="">
          <span>Manager</span>
        </div>

        <!-- 导航菜单 -->
        <div class="nav-menu">
          <Menu :isCollapse="isCollapse"/>
        </div>     
      </el-aside>
      
      <el-container :class="['content-right',isCollapse?'fold':'unfold']">
        <el-header class="nav-top">
          <div class="nav-left">
            <div class="menu-flod" @click="toggle">
              <el-icon><Fold /></el-icon>
            </div>
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
                  <el-dropdown-item @click="logout" divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
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
<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';
  import Menu from './Menu.vue';

  import {
    Fold,
    Bell
  } from '@element-plus/icons-vue'
  import useInfoStore from '@/store/infoStore'
  const infoStore = useInfoStore()
  let router = useRouter();

  const isCollapse = ref(false);

  // 菜单收缩
  const toggle = ()=>{
    
    isCollapse.value = !isCollapse.value;
    console.log('toggle事件');
  }


  const logout = ()=>{
    router.push("/login")
    // 清空
    infoStore.saveUserInfo({});
  }
  // defineProps({
  //   msg: String,
  // })
  
</script>


<style lang="scss">
.basic-layout{
  
  .nav-side{
    position: fixed;
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
    .nav-menu{
      position: relative;
      height: calc(100vh - 50px);
      border-right: none;
    }
    // 合并
    &.fold{
      width: 64px;
    }
    // 展开
    &.unfold{
      width: 200px;
    }
  }
  
  
}
.content-right{
  transition: width .5s;
  // 合并
  &.fold{
    margin-left: 64px;
  }
  // 展开
  &.unfold{
    margin-left: 200px;
  }
  .nav-top{
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    background: #fff;
    padding: 0 20px;

    .nav-left{
      display: flex;
      align-items: center;
      .menu-flod{
        padding-top: 7px;
        margin-right: 15px;
        font-size: 18px;
      }
      .menu-flod:hover{
        cursor: pointer;
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
//  // 合并
//   &.fold{
//     width: 64px;
//   }
//   // 展开
//   &.unfold{
//     width: 200px;
//   }
    background: #eef0f3;
    height: calc(100vh - 50px);
    .main-page{
      background: #fff;
      height: calc(100vh - 100px);
    }
  }
}

</style>
