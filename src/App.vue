<script setup lang="ts">
import useRouteCache from '@/stores/modules/routeCache'

useHead({
  title: 'Government&Enterprise Mobile Portal',
  meta: [
    {
      name: 'description',
      content: 'An mobile web apps template based on the Vue 3 ecosystem',
    },
    {
      name: 'theme-color',
      content: () => (isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => (preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})

const keepAliveRouteNames = computed(() => {
  return useRouteCache().routeCaches as string[]
})

const mode = computed(() => {
  return isDark.value ? 'dark' : 'light'
})

// 监听暗黑模式变化，更新HTML的class以支持Tailwind的暗黑模式
watchEffect(() => {
  if (isDark.value)
    document.documentElement.classList.add('dark')
  else document.documentElement.classList.remove('dark')
})
</script>

<template>
  <van-config-provider :theme="mode">
    <nav-bar />
    <router-view v-slot="{ Component }">
      <section class="app-wrapper">
        <keep-alive :include="keepAliveRouteNames">
          <component :is="Component" />
        </keep-alive>
      </section>
    </router-view>
    <tab-bar />
  </van-config-provider>
</template>

<style scoped>
.app-wrapper {
  width: 100%;
  position: relative;
  padding: 16px;
}
</style>
