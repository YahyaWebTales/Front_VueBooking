import { defineStore } from 'pinia'

interface Hotel {
  id: number
  name: string
  location: string
  price: number
  rating: number
  image: string
  description: string
}

export const useHotelsStore = defineStore('hotels', {
  state: () => ({
    hotels: [
      {
        id: 1,
        name: 'Grand Hotel Vue',
        location: 'Paris, France',
        price: 250,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        description: 'Luxurious hotel in the heart of Paris'
      },
      {
        id: 2,
        name: 'Coastal Resort',
        location: 'Nice, France',
        price: 180,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd',
        description: 'Beautiful beachfront resort'
      },
      {
        id: 3,
        name: 'Mountain Lodge',
        location: 'Chamonix, France',
        price: 200,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
        description: 'Cozy mountain retreat with stunning views'
      }
    ] as Hotel[]
  }),
  getters: {
    getHotelById: (state: { hotels: { find: (arg0: (hotel: any) => boolean) => any } }) => {
      return (id: number) => state.hotels.find(hotel => hotel.id === id)
    }
  }
})