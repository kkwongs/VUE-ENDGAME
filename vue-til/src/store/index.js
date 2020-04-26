import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // 여러 컴포넌트 간의 공유되는 데이터
  state: {
    username: '',
  },
  // 데이터를 바꿈
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
  },
});
