<script setup lang="ts">
import { routeWhiteList } from '@/config/routes'

const { t } = useI18n()
const active = ref(0)
const route = useRoute()

const show = computed(() => route.name && routeWhiteList.includes(route.name))
</script>

<template>
  <van-tabbar v-if="show" v-model="active" placeholder route>
    <van-tabbar-item replace to="/">
      {{ t('layouts.home') }}
      <template #icon>
        <Icon name="mdi:home" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/profile">
      {{ t('layouts.profile') }}
      <template #icon>
        <Icon name="mdi:account" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
