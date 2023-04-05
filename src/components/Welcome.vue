<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
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
   <main class="welcome">
      <h1>欢迎来到Welcome</h1>
      <el-button type="primary" @click="goHome">进入2</el-button>
   </main>

</template>

<style scoped>
</style>
