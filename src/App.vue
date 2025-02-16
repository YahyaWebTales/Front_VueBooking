<script setup lang="ts">
import TheHeader from './components/Header.vue';
import TheFooter from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <main class="flex-grow">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>

</style>
