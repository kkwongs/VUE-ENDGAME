<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">ID: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">PW: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">Nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button
      v-bind:disabled="!isUsernameValid || !password || !nickname"
      type="submit"
    >
      회원 가입
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      console.log('폼 제출');
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      console.log(data.nickname);
      this.logMessage = `${data.nickname} 님 환영합니다.`;
      this.initFrom();
    },
    initFrom() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
