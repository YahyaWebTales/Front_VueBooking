import { defineStore } from 'pinia'

// Define the Hotel interface
interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

// Define the store
export const useHotelsStore = defineStore('hotels', {
  state: () => ({
    hotels: JSON.parse(localStorage.getItem('hotels') || '[]') as Hotel[]
  }),

  getters: {
    // Get a specific hotel by ID
    getHotelById: (state) => {
      return (id: number) => state.hotels.find((hotel: { id: number; }) => hotel.id === id);
    }
  },

  actions: {
    // Add a new hotel
    addHotel(newHotel: Hotel) {
      this.hotels.push(newHotel);
      this.saveToLocalStorage();
    },

    // Remove a hotel by ID
    removeHotel(id: number) {
      this.hotels = this.hotels.filter((hotel: { id: number; }) => hotel.id !== id);
      this.saveToLocalStorage();
    },

    // Update hotel details
    updateHotel(updatedHotel: Hotel) {
      const index = this.hotels.findIndex((hotel: { id: number; }) => hotel.id === updatedHotel.id);
      if (index !== -1) {
        this.hotels[index] = updatedHotel;
        this.saveToLocalStorage();
      }
    },

    // Save hotels to localStorage
    saveToLocalStorage() {
      localStorage.setItem('hotels', JSON.stringify(this.hotels));
    },

    // Load default hotels if empty
    loadDefaultHotels() {

        this.hotels = [
          {
            id: 1,
            name: 'Eleven Motel',
            location: 'Lisbonne, Portugal',
            price: 90,
            rating: 4.3,
            image: '/img/eleven.jpg',
            description: 'Un motel moderne et confortable au cœur de Lisbonne, parfait pour les courts séjours.'
          },
          {
            id: 2,
            name: 'Seven Motel',
            location: 'Porto, Portugal',
            price: 75,
            rating: 4.0,
            image: '/img/seven.jpeg', 
            description: 'Un établissement économique et bien situé à Porto, idéal pour les voyageurs souhaitant découvrir la ville.'
          },
          {
            id: 3,
            name: 'Vila Nova Boutique Hotel',
            location: 'Faro, Portugal',
            price: 120,
            rating: 4.6,
            image: "/img/nova.jpeg",
            description: 'Un boutique hôtel charmant dans la magnifique ville côtière de Faro.'
          },
          {
            id: 4,
            name: 'Pestana Palace Lisboa',
            location: 'Lisbonne, Portugal',
            price: 300,
            rating: 4.9,
            image: '/img/Pestana.jpeg',
            description: 'Un luxueux palais transformé en hôtel 5 étoiles avec des jardins magnifiques et un service exceptionnel.'
          },
          {
            id: 5,
            name: 'Hotel Dom Henrique Downtown',
            location: 'Porto, Portugal',
            price: 150,
            rating: 4.5,
            image: '/img/Henrique.jpeg',
            description: 'Un hôtel moderne avec une vue panoramique incroyable sur Porto.'
          }
        ];
        this.saveToLocalStorage();
      }
    }
  
});
