<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form ref="userFormRef" :model="user" status-icon :rules="rules">
        <div class="title">SharedCloud</div>
        <el-form-item prop="userName">
            <el-input
              v-model="user.userName"
              type="text"
              size="large"
              placeholder="用户名：admin"
              :prefix-icon="User"
            />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input 
            v-model="user.userPwd"
            type="password"
            size="large"
            placeholder="密码：admin"
            :prefix-icon="Lock"
          />
        </el-form-item>
        <el-form-item>
          <el-button  @click="login(userFormRef)" class="btn-reset"><el-icon class="btn-user"><CircleClose /></el-icon>重置</el-button>
          <el-button type="primary" @click="login(userFormRef)" class="btn-login"><el-icon class="btn-user"><User/></el-icon>登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { onMounted , ref ,reactive} from 'vue'
import { useRouter } from 'vue-router';
import { User ,Lock ,CircleClose} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import useGetGlobalProperties from '@/hooks/useGlobal'

import useInfoStore from '@/store/infoStore'
const infoStore = useInfoStore()

let router = useRouter();
const _this = useGetGlobalProperties();

// refDom
const userFormRef = ref()


// data
const user = reactive({
  userName:'',
  userPwd:''
})

const rules = reactive({
  userName:[
    {
      required:true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  userPwd:[
    {
      required:true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
})

onMounted(()=>{

})


const login = async(userFormRef)=>{
  
  // 表单校验
  await userFormRef.validate((valid, fields)=>{
    if(valid){
      console.log('submit!')
      _this.$api.login(user).then((res)=>{
      infoStore.saveUserInfo(res)
      
      // 成功跳转
      router.push("/welcome")  
      })
    }else{
      console.log('error submit!', fields)
      // return false
    }
  })

  // 消息提示
  //  ElMessage({
  //   showClose: true,
  //   message: '登录成功,正在跳转..',
  //   type: 'success',
  //   duration:800
  // })

}

</script>
<style lang="scss">
  .login-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
   
    width: 100vw;
    height: 100vh;
    .modal{
      width: 500px;
      padding: 50px;
      background: #fffc;
      border-radius: 4px;
      box-shadow: 0px 0px 10px 3px #c7c9cb4d;
      .title{
        font-size: 34px;
        line-height: 1.5;
        text-align: center;
        color: #475768;
        margin-bottom: 30px;
        font-weight: 700;
      }
    }
    .btn-login,.btn-reset{
      width: 193px;
      height: 40px;
      line-height: 40px;
      .btn-user{
        margin-right: 4px;
      }
    }

  }
</style>
