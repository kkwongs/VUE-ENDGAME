import Vue from 'vue';
import VueRouter from 'vue-router';

// 플러그인을 초기화하기 위한 코드
Vue.use(VueRouter);

// 인스턴스 생성후 파일에서 밖으로 내보냄
export default new VueRouter({
  // History Mode 주의 사항 문서 참고
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
