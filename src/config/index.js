/*
  环境配置封装
*/ 
const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
  development:{
    baseApi:'/api',
    mockApi:'https://www.fastmock.site/mock/d40816bffbb6daea8bc22c3670b4c94b/api'
  },
  test:{
    baseApi:'//test.futurefe.com/api',
    mockApi:'https://www.fastmock.site/mock/d40816bffbb6daea8bc22c3670b4c94b/api'
  },
  prod:{
    baseApi:'//futurefe.com/api',
    mockApi:'https://www.fastmock.site/mock/d40816bffbb6daea8bc22c3670b4c94b/api'
  }
}

export default {
  env,
  mock:true,
  namespace:'manager',
  ...EnvConfig[env]
}