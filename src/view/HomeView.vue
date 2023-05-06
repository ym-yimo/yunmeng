<template>
  <div class="home">
    <div class="header">
      <div class="header-left">
        这是导航栏左侧
      </div>
      <div class="header-right">
        <button type="button" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeView',
    mounted() {
      console.log(process.env.VUE_APP_SERVER_URL);
    },
    methods: {
      async login() {
        await this.$http
          .post('/api/login',{
            username: 'test',
            password: 'test'
          })
          .then(res => {
            console.log(res);
          })
      }
    }
  }
</script>

<style less scoped>
  .home {

  }
</style>