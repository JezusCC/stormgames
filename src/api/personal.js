import axios from './axios';
export default {
  //邮箱已注册验证
  eamil(email) {
    return axios.post('/user/eamil', {
      eamil
    });
  }
}