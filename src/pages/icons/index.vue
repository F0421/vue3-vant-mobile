<script setup lang="ts">
import { computed, ref } from 'vue'
import { showToast } from 'vant'

// 图标分类
const iconCategories = [
  {
    name: 'Material Design Icons',
    prefix: 'mdi',
    icons: [
      // 导航类
      'home',
      'menu',
      'arrow-left',
      'arrow-right',
      'chevron-left',
      'chevron-right',
      'chevron-up',
      'chevron-down',
      // 用户类
      'account',
      'account-circle',
      'account-group',
      'account-settings',
      // 操作类
      'plus',
      'minus',
      'close',
      'check',
      'delete',
      'edit',
      'pencil',
      'refresh',
      // 通知类
      'bell',
      'bell-ring',
      'bell-off',
      'alert',
      'alert-circle',
      // 设置类
      'cog',
      'settings',
      'tune',
      'wrench',
      // 文件类
      'file',
      'folder',
      'folder-open',
      'download',
      'upload',
      // 通信类
      'email',
      'phone',
      'message',
      'chat',
      // 媒体类
      'image',
      'video',
      'music',
      'play',
      'pause',
      // 其他
      'heart',
      'star',
      'bookmark',
      'search',
      'share',
      'link',
    ],
  },
  {
    name: 'Remix Icons',
    prefix: 'ri',
    icons: [
      // 导航类
      'home-line',
      'menu-line',
      'arrow-left-line',
      'arrow-right-line',
      // 用户类
      'user-line',
      'user-settings-line',
      'team-line',
      'group-line',
      // 操作类
      'add-line',
      'subtract-line',
      'close-line',
      'check-line',
      'delete-bin-line',
      'edit-line',
      'refresh-line',
      // 通知类
      'notification-line',
      'notification-2-line',
      'notification-off-line',
      'alert-line',
      // 设置类
      'settings-line',
      'settings-2-line',
      'settings-3-line',
      'tools-line',
      // 文件类
      'file-line',
      'folder-line',
      'folder-open-line',
      'download-line',
      'upload-line',
      // 通信类
      'mail-line',
      'phone-line',
      'message-2-line',
      'chat-1-line',
      // 媒体类
      'image-line',
      'video-line',
      'music-line',
      'play-line',
      'pause-line',
      // 其他
      'heart-line',
      'star-line',
      'bookmark-line',
      'search-line',
      'share-line',
      'link',
    ],
  },
  {
    name: 'Phosphor Icons',
    prefix: 'ph',
    icons: [
      // 导航类
      'house',
      'list',
      'arrow-left',
      'arrow-right',
      'caret-left',
      'caret-right',
      'caret-up',
      'caret-down',
      // 用户类
      'user',
      'user-circle',
      'users',
      'user-gear',
      // 操作类
      'plus',
      'minus',
      'x',
      'check',
      'trash',
      'pencil',
      'pencil-simple',
      'arrows-clockwise',
      // 通知类
      'bell',
      'bell-ringing',
      'bell-slash',
      'warning',
      'warning-circle',
      // 设置类
      'gear',
      'gear-six',
      'sliders',
      'wrench',
      // 文件类
      'file',
      'folder',
      'folder-open',
      'download',
      'upload',
      // 通信类
      'envelope',
      'phone',
      'chat',
      'chats',
      // 媒体类
      'image',
      'video',
      'music-note',
      'play',
      'pause',
      // 其他
      'heart',
      'star',
      'bookmark',
      'magnifying-glass',
      'share',
      'link',
    ],
  },
]

// 搜索关键词
const searchKeyword = ref('')

// 复制图标代码到剪贴板
function copyIcon(prefix: string, icon: string) {
  const iconCode = `<AppIcon name="${prefix}:${icon}" />`
  navigator.clipboard.writeText(iconCode).then(() => {
    showToast({
      message: '复制成功',
      position: 'top',
    })
  })
}

// 过滤后的图标
const filteredIcons = computed(() => {
  if (!searchKeyword.value)
    return iconCategories

  return iconCategories
    .map(category => ({
      ...category,
      icons: category.icons.filter(
        icon =>
          icon.toLowerCase().includes(searchKeyword.value.toLowerCase())
          || category.prefix.toLowerCase().includes(searchKeyword.value.toLowerCase()),
      ),
    }))
    .filter(category => category.icons.length > 0)
})
</script>

<template>
  <div class="p-4">
    <van-search v-model="searchKeyword" placeholder="搜索图标" shape="round" background="#ffffff" />

    <div class="mt-4 space-y-6">
      <div v-for="category in filteredIcons" :key="category.prefix" class="space-y-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">
          {{ category.name }}
        </h3>
        <div class="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <div
            v-for="icon in category.icons"
            :key="icon"
            class="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow dark:bg-gray-800 hover:shadow-md transition-shadow cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
            @click="copyIcon(category.prefix, icon)"
          >
            <Icon :name="`${category.prefix}:${icon}`" class="w-8 h-8 mb-2 text-gray-700 dark:text-gray-300" />
            <span class="text-xs text-gray-500 dark:text-gray-400 text-center break-all">
              {{ category.prefix }}:{{ icon }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="json5">
{
  name: 'icons',
  meta: {
    title: '图标展示',
    i18n: 'menus.icons',
  },
}
</route>
