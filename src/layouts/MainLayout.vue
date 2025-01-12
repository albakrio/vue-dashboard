<template>
  <div class="flex h-screen">
    <Sidebar :isSidebarOpen="isSidebarOpen" @toggleSidebar="toggleSidebar" />

    <main :class="['flex-1 min-h-screen lg:p-8', { 'sm:ml-64': isSidebarOpen }]">
      <HeaderComponent @toggleSidebar="toggleSidebar" />
      <slot />
      <DarkModeToggle />
    </main>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import HeaderComponent from '../components/Header.vue'
  import Sidebar from '../components/Sidebar.vue'
  import DarkModeToggle from '../components/DarkModeToggle.vue'

  const isSidebarOpen = ref(window.innerWidth >= 640)

  window.addEventListener('resize', () => {
    isSidebarOpen.value = window.innerWidth >= 640
  })

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }
</script>

