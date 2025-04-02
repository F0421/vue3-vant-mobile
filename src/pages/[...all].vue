<script setup lang="ts">
const router = useRouter()

function onBack() {
  if (window.history.state.back)
    history.back()
  else router.replace('/')
}
</script>

<template>
  <div class="flex flex-col items-center justify-center p-4">
    <h1 class="text-2xl font-bold mb-4">
      404 - Page Not Found
    </h1>
    <van-button type="primary" @click="onBack">
      Back
    </van-button>
  </div>
</template>

<route lang="json5">
{
  name: '404',
  meta: {
    title: '404',
    i18n: 'menus.404Demo',
  },
}
</route>
