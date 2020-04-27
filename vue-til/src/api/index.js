import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// 액시오스 초기화 함수
function createInstanceWithAuth() {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

const instance = createInstance();
const posts = createInstanceWithAuth('posts');

// 회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
  return instance.get('posts');
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData) {
  return instance.post('posts', postData);
}

// GET - posts
// POST - post
// PUT - posts {id}
// DELETE - posts {id}

export { registerUser, loginUser, fetchPosts, createPost };
