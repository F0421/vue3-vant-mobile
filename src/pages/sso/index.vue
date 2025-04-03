<script lang="ts" setup>
import { showToast } from 'vant'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

onMounted(() => {
  const userName = route.query.userName
  const appKey = route.query.appKey

  // if (!userName || !appKey) {
  //   showToast('登录参数不完整');
  //   router.push('/login');
  //   return;
  // }

  // 获取当前域名
  const currentUrl = window.location.href
  const urlObj = new URL(currentUrl)
  const href = `${urlObj.protocol}//${urlObj.hostname}${urlObj.port ? `:${urlObj.port}` : ''}`
  console.log('当前域名:', href)

  // 构建登录URL并跳转
  const loginUrl = `${href}/login/oa?code=${userName}_${appKey}`
  console.log('跳转地址:', href)
  // window.location.href = loginUrl;
})
</script>

<template>
  <div class="flex justify-center items-center h-[calc(100vh-10vh)]">
    <van-loading type="spinner" color="#1989fa" size="24px" class="m-auto">登录中...</van-loading>
  </div>
</template>
