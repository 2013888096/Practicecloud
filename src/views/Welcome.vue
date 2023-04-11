<script setup>
import { ref } from 'vue'


</script>

<template>
   <main class="welcome">
      <div class="content">
         <div class="sub-title">欢迎体验</div>
         <div class="title">校园实习资源共享云平台</div>
         <div class="desc">-基于Vue3.2+ElementPlus+Koa2+MongoDB的校园通用管理平台解决方案</div>
      </div>
      <div class="img"><img src="./../assets/vite.svg" width="340" alt=""></div>
   </main>

</template>

<style lang="scss">
   
   .welcome{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      overflow: hidden;
      
      .content{
         position: relative;
         bottom: 40px;
         left: 40px;
         .sub-title{
            font-size: 30px;
            line-height: 42px;
            color: #333;
            
         }
         .title{
            font-size: 40px;
            line-height: 62px;
            color: #409eff;
         }
         .desc{
            text-align: right;
            font-size: 14px;
            color: #999;
         }
      }

      .img{
         position: relative;
         left: 60px;
         width: 371px;
         height: 371px;
      }
   }
   .welcome::after{
      content: '';
      width: 140%;
      height: 140px;
      position: absolute;
      left: -20%;
      top: 0;
      z-index: -1;
      border-radius: 0 0 50% 50%;
      background: linear-gradient(180deg, #4390fc 0%, #9ec8ff 100%);
   }
</style>
