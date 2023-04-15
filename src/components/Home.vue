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
          <el-row class="tac">
              <el-col :span="24">
                <!-- <h5 class="mb-2 menu_title">Cloud</h5> -->
                <el-menu
                  :default-active="activeMenu"
                  background-color="#001529"
                  text-color="#fff"
                  router
                  :collapse="isCollapse > 0 ? true:false"
                  class="nav-menu"
                >
                  <TreeMenu :user-Menu="userMenu"/>
                </el-menu>
            </el-col>
          </el-row>
        </div>     
      </el-aside>
      
      <el-container :class="['content-right',isCollapse?'fold':'unfold']">
        <el-header class="nav-top">
          <div class="nav-left">
            <div class="menu-flod" @click="toggle">
              <el-icon><Fold v-show="!isCollapse"/></el-icon>
              <el-icon><Expand v-show="isCollapse"/></el-icon>
            </div>
            <div class="bread">
              <BreadCrumb/>
            </div>
          </div>
          
          <div class="user-info">

            <span class="fullScreen" @click="SetFullScreen">
              <el-icon size="20"><FullScreen /></el-icon>
            </span>

            <el-badge :is-dot="noticeCount" class="notice m-lr10" type="danger">
              <el-icon size="20"><Bell /></el-icon>
            </el-badge>
            <span class="userName">Codebyy</span>
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
  import { ref ,onMounted,computed} from 'vue'
  import { useRouter } from 'vue-router';
  import screenfull from 'screenfull'

  // 全局
  import useGetGlobalProperties from '@/hooks/useGlobal'

  import {
    Fold,
    Bell,
    Expand,
    FullScreen
  } from '@element-plus/icons-vue'
  import useInfoStore from '@/store/infoStore'
  //组件导入
  import TreeMenu from './TreeMenu.vue';
  import BreadCrumb from './BreadCrumb.vue';

  const infoStore = useInfoStore()
  let router = useRouter();
  //全局
  const _this = useGetGlobalProperties();

  const isCollapse = ref(false);
  const noticeCount = ref(0);
  const userMenu = ref([]);
  

  const userInfo = computed(()=>{
    return infoStore.userInfo
  })

  const activeMenu = computed(()=>{
    return location.hash.slice(1)
  })
  onMounted(() => {
    getNoticeCount();
    getMenuList();
  })

  //消息提示
  const getNoticeCount = async()=>{
    try {
      const count = await _this.$api.noticeCount()
      noticeCount.value = count
    } catch (error) {
      console.error(error)
    }
    
  }
  //菜单列表获取
  const getMenuList = async()=>{
    try {
      const list = await _this.$api.getMenuList()
      userMenu.value = list
    } catch (error) {
      console.error(error)
    }
    
  }

  // 菜单收缩
  const toggle = ()=>{
    
    isCollapse.value = !isCollapse.value;
    console.log('toggle事件');
  }
  // 全屏方案
  const SetFullScreen = () => {

    //screenfull.isEnabled  此方法返回布尔值，判断当前能不能进入全
    if (!screenfull.isEnabled) {
        return false
    }
    //screenfull.toggle 此方法是执行全屏化操作。如果已是全屏状态，则退出全屏
    screenfull.toggle()

    }
  // 退出登录 
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
  .content-right{
    // 合并
    &.fold{
      margin-left: 64px;
    }
    // 展开
    &.unfold{
      margin-left: 200px;
    }
    transition: width .5s;
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
        font-size: 14px;
        color: #000000d9;
        .notice{
          line-height: 30px;
          &:hover{
            cursor: pointer;
          }
        }
        .el-avatar{
          border: none;
          border-radius: 50%;
        }
        .el-avatar>img{
          width: 40px;
          height: 40px;
        }
        .el-avatar:hover{
          cursor: pointer;
        }
        .el-dropdown-link{
          outline: none;
        }
        .fullScreen:hover{
          cursor: pointer;
        }

        .userName{
          margin: 0 10px;
        }
      }
    }
    .wrapper{
      background: #eef0f3;
      height: calc(100vh - 50px);
      .main-page{
        background: #fff;
        height: calc(100vh - 100px);
      }
    }
  }
}


</style>
