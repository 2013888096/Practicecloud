import { defineStore } from 'pinia'
import storage from '../utils/storage'

 const useInfoStore = defineStore('info',{
  state: () => ({
    userInfo:"" || storage.getItem("userInfo"),//获取用户信息
  }),
  getters:{
   
  },
  actions:{
    saveUserInfo(userInfo){
      this.userInfo = userInfo;
      storage.setItem('userInfo',userInfo)
    }
  }
})

export default useInfoStore;