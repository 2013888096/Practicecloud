<script setup>
import { onMounted} from 'vue'
import { useRouter } from 'vue-router';
import useGetGlobalProperties from '@/hooks/useGlobal'

let router = useRouter();
const globalProperties = useGetGlobalProperties();

onMounted(()=>{
  globalProperties.$request({
    method:'get',
    url:'/login',
    data:{
      name:'jack'
    }
  }).then((res)=>{
    console.log(res);
  })
  
})

const goHome = ()=>{
  router.push("/welcome")
 
}

</script>

<template>
  <h1>欢迎来到登录界面</h1>
  <router-link to="/welcome">进入</router-link>
  <el-button type="primary" @click="goHome">进入2</el-button>
</template>

<style scoped>
</style>
