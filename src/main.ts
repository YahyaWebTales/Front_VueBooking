import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import App from './App.vue'
import { useHotelsStore } from './stores/hotels'

const app = createApp(App)
app.use(createPinia())
app.use(router)

const hotelsStore = useHotelsStore();
hotelsStore.loadDefaultHotels();

app.mount('#app')