<template>
  <header class="bg-gradient-to-r from-primary to-purple-600 text-white flex justify-between items-center px-10 py-6 shadow-md">
    <h1 class="text-3xl font-extrabold tracking-wide">Foodics Dashboard</h1>
    <button @click="$emit('toggleSidebar')"
      class="sm:hidden text-white text-3xl focus:outline-none">
      ☰
    </button>
  </header>
</template>