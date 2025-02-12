<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen">
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-4">
        <router-link to="/" class="text-2xl font-bold text-[#FF5A5F]">
          VueBooking
        </router-link>
      </nav>
    </header>

    <router-view />
  </div>
</template>
<style scoped>

</style>
