<script setup>
  import { onMounted } from 'vue';
  import useGetGlobalProperties from '@/hooks/useGlobal'
  const _this = useGetGlobalProperties();

  onMounted(() => {
    _this.$storage.setItem('userInfo',{age:30,name:'codebyy'})
    console.log('user=>',_this.$storage.getItem("userInfo"));
  })
</script>

<template>
  <router-view></router-view>
</template>

<style>
@import './assets/index.scss'
</style>
