<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useHotelsStore } from '../stores/hotels';
import { ref } from 'vue';

const route = useRoute();
const hotelsStore = useHotelsStore();
const hotel = hotelsStore.getHotelById(Number(route.params.id));

const checkIn = ref('');
const checkOut = ref('');
const guests = ref(1);

// Function to handle hotel booking
const bookHotel = () => {
    alert('Reserva confirmada!')
}
</script>

<template>
    <div v-if="hotel" class="container mx-auto px-4 py-8">
      <!-- Hotel Image -->
      <img :src="hotel.image" :alt="hotel.name" class="w-full h-96 object-cover rounded-lg mb-8">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <!-- Hotel Details -->
          <h1 class="text-4xl font-bold mb-4">{{ hotel.name }}</h1>
          <p class="text-gray-600 mb-4">{{ hotel.location }}</p>
          <div class="flex items-center mb-4">
            <span class="text-yellow-400">★</span>
            <span class="ml-1">{{ hotel.rating }}/5</span>
          </div>
          <p class="text-gray-700">{{ hotel.description }}</p>
        </div>
        
        <!-- Booking Form -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-4">{{ hotel.price }}€ / noite</h2>
          
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Data de chegada</label>
              <input
                type="date"
                v-model="checkIn"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700">Data de saída</label>
              <input
                type="date"
                v-model="checkOut"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700">Número de viajantes</label>
              <input
                type="number"
                v-model="guests"
                min="1"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              >
            </div>
            
            <button
              @click="bookHotel"
              class="w-full bg-[#FF5A5F] text-white py-2 px-4 rounded-lg hover:bg-[#FF4449] transition-colors"
            >
              Reservar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Hotel not found message -->
    <div v-else class="container mx-auto px-4 py-8">
      <p>Hotel não encontrado</p>
    </div>
</template>
