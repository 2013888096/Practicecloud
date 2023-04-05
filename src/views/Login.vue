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
              :prefix-icon="User"
            />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input 
            v-model="user.userPwd"
            type="password"
            size="large"
            :prefix-icon="Lock"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login(userFormRef)" class="btn-login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { onMounted , ref ,reactive} from 'vue'
import { useRouter } from 'vue-router';
import { User ,Lock} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import useGetGlobalProperties from '@/hooks/useGlobal'
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
  // _this.$request({
  //   method:'get',
  //   url:'/login',
  //   data:{
  //     name:'jack'
  //   }
  // }).then((res)=>{
  //   console.log(res);
  // })
  // console.log(userForm);
})


const login = async(userFormRef)=>{
  
  // 表单校验
  await userFormRef.validate((valid, fields)=>{
    if(valid){
      console.log('submit!')
      _this.$api.login(user).then((res)=>{
        console.log(res);
      })
    }else{
      console.log('error submit!', fields)
      // return false
    }
  })

  // 消息提示
   ElMessage({
    showClose: true,
    message: '登录成功,正在跳转..',
    type: 'success',
    duration:800
  })

  // 成功跳转
  router.push("/welcome")  
}

</script>
<style lang="scss">
  .login-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9fcff;
    width: 100vw;
    height: 100vh;
    .modal{
      width: 500px;
      padding: 50px;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0px 0px 10px 3px #c7c9cb4d;
      .title{
        font-size: 34px;
        line-height: 1.5;
        text-align: center;
        margin-bottom: 30px;
      }
    }
    .btn-login{
      width: 100%;
    }

  }
</style>
