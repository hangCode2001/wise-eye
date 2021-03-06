import Taro from "@tarojs/taro";
import { request } from "./config";

// 登陆
export const login = async (params) => {
  const res = await request.post("/api/user/login", params);
  if (res.data.token) {
    Taro.setStorage({
      key: "jwt",
      data: res.data.token,
    });
    Taro.reLaunch({
      url: "/pages/index/index",
    });
  }
  return Promise.resolve(res);
};

// 注册
export const register = (params) => {
  return request.post("/api/user/register", params);
};

// 未读消息接口
export const addClickLog = (params) => {
  return request.post("api/user/addClickLog", params);
};
