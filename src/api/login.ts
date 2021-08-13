import request from "@/utils/request";

export const login = (params: User.UserInfo):Promise<object|Array<object>>=> request({
  url: '/api/user/login',
  method: 'GET',
  params
})