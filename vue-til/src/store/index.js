import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  // 여러 컴포넌트 간의 공유되는 데이터
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  // state의 값이 변경됐을 떄 특정 상태 계산
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  // 데이터를 바꿈
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = '';
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log(data.token);
      commit('setToken', data.token);
      commit('setUsername', data.user.nickname);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
      return data;
    },
  },
});
