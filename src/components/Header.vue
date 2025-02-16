<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user'; 

const router = useRouter();
const userStore = useUserStore(); // Pinia Store to handle the user state

const isMenuOpen = ref(false);

// Toggle user menu dropdown
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Logout function, redirects user to login page
const logout = () => {
    userStore.logout();
    router.push('/login');
};

// Check if the user is authenticated
const isAuthenticated = computed(() => userStore.isAuthenticated);

// Check if the user is an admin
const isAdmin = computed(() => userStore.user?.role === 'admin');
</script>

<template>
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <!-- Logo -->
        <router-link to="/" class="text-2xl font-bold text-[#FF5A5F]">
          VueBooking
        </router-link>
  
        <!-- Navigation links -->
        <nav class="hidden md:flex space-x-6">
          <router-link to="/hotels" class="text-gray-700 hover:text-[#FF5A5F]">
            Hotéis
          </router-link>
          <router-link v-if="isAdmin" to="/admin" class="text-gray-700 hover:text-[#FF5A5F]">
            Administração
          </router-link>
        </nav>
  
        <!-- Authentication / User Menu -->
        <div class="relative">
          <template v-if="isAuthenticated">
            <button @click="toggleMenu" class="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
              <span class="font-semibold">{{ userStore.user?.name }}</span>
              <img :src="userStore.user?.avatar || 'https://via.placeholder.com/40'" class="w-8 h-8 rounded-full" />
            </button>
  
            <!-- User Dropdown Menu -->
            <div v-if="isMenuOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
              <router-link to="/profile" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Meu Perfil
              </router-link>
              <button @click="logout" class="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                Sair
              </button>
            </div>
          </template>
  
          <!-- Sign In / Sign Up Buttons -->
          <template v-else>
            <router-link to="/login" class="text-gray-700 hover:text-[#FF5A5F] mr-4">
              Entrar
            </router-link>
            <router-link to="/signup" class="bg-[#FF5A5F] text-white px-4 py-2 rounded-lg hover:bg-[#FF4449]">
              Cadastrar-se
            </router-link>
          </template>
        </div>
      </div>
    </header>
</template>
