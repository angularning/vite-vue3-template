<template>
  <div class="login-page">
    <div class="wrapper">
      <div class="left">
        <img src="../../assets/images/login_banner.png" height="380" alt="login_banner" />
      </div>

      <div class="form-wrapper">
        <h5 class="brand">
          <!-- <img src="../../assets/images/logo.svg" width="45" mr-15 alt="logo" /> -->
          {{ title }}
        </h5>
        <div class="form-item" mt-35>
          <input v-model="loginInfo.name" autofocus type="text" class="input" placeholder="username" @keydown.enter="handleLogin" />
        </div>
        <div class="form-item" mt-35>
          <input v-model="loginInfo.password" type="password" class="input" placeholder="password" @keydown.enter="handleLogin" />
        </div>
        <div class="form-item" mt-35>
          <button class="submit-btn" @click="handleLogin">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'
onBeforeRouteLeave((to, from) => {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  // cancel the navigation and stay on the same page
  if (!answer) return false
})
const router = useRouter()
const loginInfo = ref({
  name: 'admin',
  password: 'admin',
})
const title = ref('登录系统')
async function handleLogin() {
  const { name, password } = loginInfo.value
  if (!name || !password) {
    alert('请输入密码')
    return
  }
  router.push({ path: '/index', query: { id: (Math.random() * 10000).toFixed(0) } })
}
</script>

<style lang="scss" scoped>
.login-page {
  height: 100%;
  background-image: url(@/assets/images/login_bg.jpg);
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper {
  width: 100%;
  max-width: 1020px;
  box-shadow: 1.5px 3.99px 27px 0px rgb(0 0 0 / 10%);
  background-color: rgba(255, 255, 255, 0.3);

  display: flex;
  .left {
    padding: 40px;
    border-right: 1px solid #cccccc5e;
  }
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .brand {
    width: 100%;
    padding: 15px;
    color: #6a6a6a;
    font-size: 24px;
    font-weight: normal;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .form-item {
    width: 100%;
    max-width: 360px;
    height: 50px;
    input {
      width: 100%;
      height: 100%;
      padding: 0 20px;
      border: 1px solid #6a6a6a;
      border-radius: 5px;
      color: $primaryColor;
      font-size: 16px;
      transition: 0.5s;
      &:focus {
        border-color: $primaryColor;
        box-shadow: 0 0 5px $primaryColor;
      }
    }
    button {
      width: 100%;
      height: 100%;

      color: #fff;
      font-size: 16px;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      background-color: $primaryColor;

      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
