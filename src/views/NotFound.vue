<template>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 class="text-6xl font-bold text-red-500">404</h1>
      <p class="text-xl text-gray-700 dark:text-gray-300 mt-4">Oops! Page not found.</p>
      <router-link
        :to="ROUTE_PATHS.HOME"
        class="mt-6 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        Go Back Home
      </router-link>
    </div>
  </template>
  
  <script setup>
  import { ROUTE_PATHS } from '../router/routePaths'
  </script>
  