import { defineStore } from 'pinia'
import { ref } from 'vue'

const useCounterStore = defineStore(
  'counter',
  () => {
    const counter = ref(0)

    const increment = () => {
      counter.value++
    }

    const reset = () => {
      counter.value = 0
    }

    return {
      counter,
      increment,
      reset,
    }
  },
  {
    persist: true,
  },
)

export default useCounterStore
