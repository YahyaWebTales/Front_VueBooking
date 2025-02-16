<template>
    <footer class="bg-gray-900 text-gray-300 py-5">
      <div class="container mx-auto px-4">
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <!-- Column 1 : Logo & Description -->
          <div>
            <router-link to="/" class="text-xl font-bold text-[#FF5A5F]">
              VueBooking
            </router-link>
            <p class="mt-1 text-xs">
              Reserve seus hotéis favoritos com apenas alguns cliques. Experiência única e fluida.
            </p>
          </div>
  
          <!-- Column 2 : Links -->
          <div>
            <h3 class="text-md font-semibold text-white">Navegação</h3>
            <ul class="space-y-1 mt-1 text-sm">
              <li><router-link to="/" class="hover:text-white">Início</router-link></li>
              <li><router-link to="/hotels" class="hover:text-white">Hotéis</router-link></li>
              <li><router-link to="/contact" class="hover:text-white">Contato</router-link></li>
              <li><router-link v-if="isAdmin" to="/admin" class="hover:text-white">Administração</router-link></li>
            </ul>
          </div>
  
          <!-- Column 3 : Socials -->
          <div>
            <h3 class="text-md font-semibold text-white">Siga-nos</h3>
            <div class="flex space-x-3 mt-1">
              <a href="https://facebook.com" target="_blank" class="hover:text-white">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" class="hover:text-white">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" class="hover:text-white">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
  
        </div>
  
        <!-- rights -->
        <div class="mt-4 text-center border-t border-gray-700 pt-2 text-xs">
          <p>&copy; 2025 VueBooking. Todos os direitos reservados.</p>
          <p>
            <router-link to="/mentions-legales" class="hover:text-white">
              Avisos legais
            </router-link>
            &middot;
            <router-link to="/politique-confidentialite" class="hover:text-white">
              Política de Privacidade
            </router-link>
          </p>
        </div>
  
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useUserStore } from '../stores/user';
  
  const userStore = useUserStore();
  const isAdmin = computed(() => userStore.user?.role === 'admin');
  </script>
  
  <style scoped>
  i {
    font-size: 1.2rem; /* Réduction de la taille des icônes */
  }
  </style>
  