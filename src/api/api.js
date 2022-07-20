import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '729a35c1-ec99-4b3f-a2b2-86967a52afcd'
  }
});

export const authAPI = {
  auth() {
    return instance.get(`auth/me`).then(response => response.data);
  },
  login(email, password, rememberMe = false, captcha) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
    }).then(response => response.data);
  },
  logout() {
    return instance.delete(`auth/login`).then(response => response.data);
  }
};

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(resp => resp.data);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
            .then(resp => resp.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`, null)
            .then(resp => resp.data);
  },
  getProfile(userId) {
    console.warn('Obsolet method. Please use profileAPI object');
    return profileAPI.getProfile(userId);
  }
};

export const profileAPI = {
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
            .then(resp => resp.data)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status })
            .then(resp => resp.data)
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
            .then(resp => resp.data);
  }
};


