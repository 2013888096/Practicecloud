const CODE = {
  SUCCESS:200,
  PARAM_ERROR:10001,
  USER_ACCOUNT_ERROR:20001,
  USER_LOGIN_ERROR:30001,
  BUSINESS_ERROR:40001,
  AUTH_ERROR:500001,
}
module.exports = {
  /*
    @param {number} pageNum
    @param {number} pageSize
  */
  pager({pageNum=1,pageSize=10}){
    pageNum *=1;
    pageSize *=1;
    const skipIndex = (pageNum-1)*pageSize;
    return {
      page:{
        pageNum,
        pageSize
      },
      skipIndex
    }
  },
  success(data='',msg='',code=CODE.SUCCESS){
    return {
      code,data,msg
    }
  },
  fail(msg='',code=CODE.BUSINESS_ERROR){
    return {
      msg
    }
  }
}