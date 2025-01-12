<template>
  <MainLayout>
    <div class="p-6">
      <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">⚙️ Settings</h2>
      <section class="mb-6">
        <DarkModeToggle />
      </section>
    </div>
  </MainLayout>
</template>

<script setup>
  import MainLayout from '../layouts/MainLayout.vue'
  import DarkModeToggle from '../components/DarkModeToggle.vue'
</script>
