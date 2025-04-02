<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useCounterStore from '@/stores/modules/counter'

const counterStore = useCounterStore()
const { counter } = storeToRefs(counterStore)

function add() {
  counterStore.increment()
}

function reset() {
  counterStore.reset()
}
</script>

<template>
  <div class="flex flex-col items-center justify-center p-4">
    <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
      Hello, Pinia!
    </h1>

    <p class="mt-4 text-gray-600 dark:text-gray-300">
      This is a simple example of persisting Pinia state. To verify its effectiveness, you can refresh the interface and
      observe it.
    </p>
    <p class="mt-6 text-lg">
      number：<strong class="text-green-500 font-medium"> {{ counter }} </strong>
    </p>
    <div class="flex gap-2">
      <van-button type="primary" @click="add">
        Add
      </van-button>
      <van-button type="default" @click="reset">
        Reset
      </van-button>
    </div>
  </div>
</template>

<route lang="json5">
{
  name: 'counter',
  meta: {
    title: '🍍 持久化 Pinia 状态',
    i18n: 'menus.persistPiniaState',
  },
}
</route>
