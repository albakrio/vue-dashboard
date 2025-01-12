<template>
  <button
    @click="toggleDarkMode"
    :class="[
      'fixed z-50 w-11 h-11 z-50 p-3 rounded-full shadow-lg transition-transform',
      'bg-gradient-to-r from-primary to-purple-600 text-white hover:scale-110',
      'bottom-6 right-6 sm:bottom-8 sm:right-8'
    ]"
  >
    <span v-if="darkModeStore.isDarkMode">🌞</span>
    <span v-else>🌙</span>
  </button>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDarkModeStore } from '../stores/darkModeStore'

const darkModeStore = useDarkModeStore()

onMounted(() => {
  document.documentElement.classList.toggle('dark', darkModeStore.isDarkMode)

})

function toggleDarkMode() {
  darkModeStore.toggleDarkMode()
  document.documentElement.classList.toggle('dark', darkModeStore.isDarkMode)
}
</script>
