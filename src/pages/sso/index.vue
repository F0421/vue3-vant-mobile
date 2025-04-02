<script setup lang="ts">
import { onMounted } from 'vue'
import { showToast } from 'vant'

function handleLogin() {
  const env = import.meta.env.VITE_ENV || 'dev'
  showToast(`当前环境: ${env}`)
}

onMounted(() => {
  handleLogin()
})
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">
      SSO 登录
    </h1>
    <van-button type="primary" @click="handleLogin">
      登录
    </van-button>
  </div>
</template>
