<template>
  <!-- <form v-on:submit> -->
  <!-- <form @submit="submitForm"> -->
  <!-- 제출, 새로고침 방지 -->
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
    <!-- 이벤트 버블링 -->
    <button type="submit">login</button>
  </form>
</template>

<script>
export default {
  // vda
  data() {
    return {
      // input box와 연결
      username: '',
      password: '',
      nickname: '',
    };
  },
  methods: {
    submitForm() {
      console.log('폼 제출');
    },
  },
};
</script>

<style></style>
