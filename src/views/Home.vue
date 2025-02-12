<script setup lang="ts">
import { useHotelsStore } from '../stores/hotels'
import HotelCard from '../components/HotelCard.vue'

const hotelsStore = useHotelsStore()
</script>

<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8 text-gray-900">Découvrez des hôtels uniques</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <HotelCard
          v-for="hotel in hotelsStore.hotels"
          :key="hotel.id"
          :hotel="hotel"
        />
      </div>
    </div>
  </template>