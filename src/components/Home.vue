<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import Menu from './Menu.vue';
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
      
        <Menu />
      </el-aside>
      <el-container>
        <el-header class="nav-top">
          <div class="bread">面包菜单</div>
          <div class="user-">用户</div>
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
.nav-side{
  background-color: #001529;
  height: 100vh;
}
.nav-top{
  display: flex;
  justify-content: space-between;
}
.wrapper{
  background: #eef0f3;
  height: calc(100vh - 60px);
  .main-page{
    background: #fff;
    height: calc(100vh - 100px);
  }
}
</style>
