<script setup lang="ts">
import { useUserStore } from '../stores/user';
import { useHotelsStore } from '../stores/hotels';
import { ref, computed } from 'vue';

// Get user store and hotel store
const userStore = useUserStore();
const hotelsStore = useHotelsStore();

// Reactive state
const newHotel = ref({
  name: '',
  location: '',
  price: 0,
  rating: 0,
  image: '',
  description: '',
});

// Computed property to check if user is admin
const isAdmin = computed(() => userStore.isAdmin);

// Function to add a new hotel
const addHotel = () => {
  if (!newHotel.value.name || !newHotel.value.location || newHotel.value.price <= 0) {
    alert("Veuillez remplir tous les champs correctement !");
    return;
  }

  hotelsStore.addHotel({
    id: Date.now(),
    ...newHotel.value
  });

  alert("Hôtel Added Successfully  !");
  newHotel.value = { name: '', location: '', price: 0, rating: 0, image: '', description: '' };
};
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-6">Espace Administrateur</h1>

    <div v-if="isAdmin">
      <!-- Hotel Management Section -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Ajouter un Hôtel</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-700">Nom de l'hôtel</label>
            <input v-model="newHotel.name" type="text" class="w-full border px-3 py-2 rounded-md">
          </div>

          <div>
            <label class="block text-gray-700">Emplacement</label>
            <input v-model="newHotel.location" type="text" class="w-full border px-3 py-2 rounded-md">
          </div>

          <div>
            <label class="block text-gray-700">Prix par nuit (€)</label>
            <input v-model="newHotel.price" type="number" class="w-full border px-3 py-2 rounded-md">
          </div>

          <div>
            <label class="block text-gray-700">Note</label>
            <input v-model="newHotel.rating" type="number" step="0.1" min="0" max="5" class="w-full border px-3 py-2 rounded-md">
          </div>

          <div>
            <label class="block text-gray-700">Image URL</label>
            <input v-model="newHotel.image" type="text" class="w-full border px-3 py-2 rounded-md">
          </div>

          <div class="col-span-2">
            <label class="block text-gray-700">Description</label>
            <textarea v-model="newHotel.description" class="w-full border px-3 py-2 rounded-md"></textarea>
          </div>
        </div>

        <button @click="addHotel" class="mt-4 bg-[#FF5A5F] text-white px-4 py-2 rounded-md hover:bg-[#FF4449]">
          Ajouter Hôtel
        </button>
      </div>

      <!-- Existing Hotels List -->
      <div class="mt-8">
        <h2 class="text-xl font-semibold mb-4">Liste des Hôtels</h2>
        <div v-if="hotelsStore.hotels.length > 0">
          <ul class="space-y-4">
            <li v-for="hotel in hotelsStore.hotels" :key="hotel.id" class="bg-white p-4 rounded-lg shadow-md flex justify-between">
              <div>
                <h3 class="text-lg font-bold">{{ hotel.name }}</h3>
                <p class="text-gray-600">{{ hotel.location }} - {{ hotel.price }}€ / nuit</p>
              </div>
            </li>
          </ul>
        </div>
        <p v-else class="text-gray-600">Aucun hôtel disponible.</p>
      </div>
    </div>

    <div v-else class="text-red-600 text-center text-xl font-bold">
      Accès refusé. Vous devez être administrateur pour voir cette page.
    </div>
  </div>
</template>
