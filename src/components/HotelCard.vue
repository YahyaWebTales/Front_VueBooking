<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter();

const props = defineProps<{
    hotel: {
        id: number
        name: string 
        location: string 
        price: number 
        rating: number 
        image: string
    }
}>()

const navigateToHotel = () => {
    router.push(`hotels/${props.hotel.id}`)
}
</script>

<template>
  <div
    @click="navigateToHotel"
    class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
  >
    <img
      :src="hotel.image"
      :alt="hotel.name"
      class="w-full h-48 object-cover"
    >

    <div class="p-4">
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-lg font-semibold">{{ hotel.name }}</h3>
        <div class="flex items-center">
          <span class="text-yellow-400">★</span>
          <span class="ml-1 text-sm">{{ hotel.rating }}</span>
        </div>
      </div>
      <p class="text-gray-600 text-sm mb-2">{{ hotel.location }}</p>
      <p class="font-semibold">
        {{ hotel.price }}€ <span class="text-gray-600 font-normal">/ night</span>
      </p>
    </div>
  </div>
</template>
