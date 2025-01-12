<template>
  <div
    :class="[
      'fixed top-0 left-0 h-full bg-primary dark:bg-gray-900 shadow-xl z-50 transition-transform duration-300 flex flex-col',
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
      isCollapsed ? 'w-20' : 'w-64'
    ]"
  >
    <div class="flex justify-between items-center p-4 border-b border-purple-700">
      <h2 v-if="!isCollapsed" class="text-white text-xl font-bold">Menu</h2>
      <button
        @click="toggleCollapse"
        class="hidden sm:block text-white text-2xl focus:outline-none"
      >
        <span v-if="isCollapsed">»</span>
        <span v-else>«</span>
      </button>
      <button
        @click="$emit('toggleSidebar')"
        class="sm:hidden text-white text-2xl focus:outline-none"
      >
        ✖
      </button>
    </div>

    <nav class="mt-4 flex-1 px-2">
      <ul class="space-y-2">
        <li :class="linkClasses" @click="navigateTo(ROUTE_PATHS.HOME)">
          🏠 <span v-if="!isCollapsed">Dashboard</span>
        </li>
        <li :class="linkClasses" @click="navigateTo(ROUTE_PATHS.SETTINGS)">
          ⚙️ <span v-if="!isCollapsed">Settings</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTE_PATHS } from '../router/routePaths'

const router = useRouter()

const props = defineProps({
  isSidebarOpen: Boolean,
})

const isCollapsed = ref(false)

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}

const navigateTo = (path) => {
  router.push(path)
}

const linkClasses = 'py-3 px-4 text-white hover:bg-purple-800 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300 flex items-center gap-2 cursor-pointer'
</script>
