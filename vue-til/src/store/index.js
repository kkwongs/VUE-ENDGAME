import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // 여러 컴포넌트 간의 공유되는 데이터
  state: {
    username: '',
    token: '',
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
  },
});
