<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { IconProps } from '@iconify/vue'

interface Props extends /* @vue-ignore */ IconProps {
  name: string
}

defineProps<Props>()
</script>

<template>
  <Icon :icon="name" v-bind="$attrs" />
</template>
