<script setup lang="ts">
import router from '@/router'
import { useUserStore } from '@/stores'
import defaultAvatar from '@/assets/images/default-avatar.svg'

const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)
const isLogin = computed(() => !!userInfo.value.uid)

function login() {
  if (isLogin.value)
    return

  router.push({ name: 'login', query: { redirect: 'profile' } })
}
</script>

<template>
  <div>
    <VanCellGroup :inset="true">
      <van-cell center :is-link="!isLogin" @click="login">
        <template #title>
          <van-image :src="userInfo.avatar || defaultAvatar" round class="h-16 w-16" />
        </template>

        <template #value>
          <span v-if="isLogin">{{ userInfo.name }}</span>
          <span v-else>{{ $t('profile.login') }}</span>
        </template>
      </van-cell>
    </VanCellGroup>

    <VanCellGroup :inset="true" class="!mt-16">
      <van-cell :title="$t('profile.settings')" icon="setting-o" is-link to="/settings" />
      <van-cell
        :title="$t('profile.docs')"
        icon="flower-o"
        is-link
        url="https://easy-temps.github.io/easy-docs/vue3-vant-mobile/"
      />
    </VanCellGroup>

    <div class="grid grid-cols-4 gap-2">
      <div class="rounded-lg p-2 bg-red-200">
        1111
      </div>
      <div class="rounded-lg p-2 bg-green-200">
        1111
      </div>
      <div class="rounded-lg p-2 bg-blue-200">
        1111
      </div>
      <div class="rounded-lg p-2 bg-purple-200">
        1111
      </div>
      <div class="rounded-lg p-2 bg-yellow-200">
        1111
      </div>
      <div class="rounded-lg p-2 bg-emerald-400">
        1111
      </div>
      <div class="rounded-lg p-2 bg-cyan-700">
        1111
      </div>
      <div class="rounded-lg p-2 bg-rose-500">
        1111
      </div>
    </div>
  </div>
</template>

<route lang="json5">
{
  name: 'profile',
  meta: {
    title: '个人中心',
    i18n: 'menus.profile',
  },
}
</route>
