import axios from "axios";
import { ElMessage as message } from "element-plus";
import { HttpParams, HttpResponse } from "./interface";

/**
 * ajax请求通用方法，基于axios
 * @param {String} method  异步请求的方式，如：post、get等
 * @param {String} url     异步请求的地址
 * @param {Object} data    发送的数据
 * @param {Boolean} withCredentials
 */
const http = (params: HttpParams) => {
  const { method, url, data, withCredentials = true } = params;
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: data,
      withCredentials: withCredentials,
    })
      .then((res) => {
        const result:HttpResponse  = res.data;
        if (result.success) {
          result.message && message.success(result.message);
          /** 如果接口没有额外返回数据(如：注册接口)，则主动返回true */
          result.data ? resolve(result.data): resolve(true);
        } else {
          result.message && message.warning(result.message);
          /** 如果接口没有额外返回数据(如：注册接口)，则主动返回false */
          result.data ? resolve(result.data): resolve(false);
          /** 调用接口没有注册，回到登录页面 */
          if (result.unlogin) {
            if (window.location.pathname !== "/login") {
              window.location.href = window.location.origin + "/login";
            }
          }
        }
      })
      .catch((error) => {
        message({
          type: "error",
          message: "服务器异常，请联系网站工作人员处理！",
          duration: 2000,
        });
        reject(error);
      });
  });
};

export default http;
