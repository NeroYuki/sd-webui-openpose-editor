import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

// defineStore to check if device is small or not
export const useDeviceSizeStore = defineStore('deviceSize', () => {
  const isSmall = ref(false)
  function checkDeviceSize() {
    isSmall.value = window.innerWidth < 768
  }

  return { isSmall, checkDeviceSize }
})