<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../stores/user';

const userStore = useUserStore();

const email = ref('');
const password = ref('');

// Function to handle login
const handleLogin = () => {
  userStore.login({ email: email.value, password: password.value });
};
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold text-center text-gray-900 mb-4">Connection</h2>
      
      <div class="mb-4">
        <label class="block text-gray-700">Email</label>
        <input v-model="email" type="email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#FF5A5F]">
      </div>

      <div class="mb-4">
        <label class="block text-gray-700">Password</label>
        <input v-model="password" type="password" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#FF5A5F]">
      </div>

      <button @click="handleLogin" class="w-full bg-[#FF5A5F] text-white py-2 rounded-lg hover:bg-[#FF4449] transition">
        Connect
      </button>
    </div>
  </div>
</template>
