import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import SignupPage from '@/views/SignupPage.vue';

// 플러그인을 초기화하기 위한 코드
Vue.use(VueRouter);

// 인스턴스 생성후 파일에서 밖으로 내보냄
export default new VueRouter({
  routes: [
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/signup',
      component: SignupPage,
    },
  ],
});
