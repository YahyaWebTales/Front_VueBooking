import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export const useUserStore = defineStore('user', () => {
    const router = useRouter();
    
    // User state (null if not login)
    const user = ref<{ name: string, email: string, role: string, avatar?: string } | null>(null);

    // Check if user is authenticated
    const isAuthenticated = computed(() => !!user.value);

    // Check if user is admin
    const isAdmin = computed(() => user.value?.role === 'admin');

    // Login function
    const login = (credentials: { email: string, password: string }) => {
        // Simulated authentication (normally, you'd fetch an API)
        if (credentials.email === 'admin@vuebooking.com' && credentials.password === 'admin') {
            user.value = { name: "Admin", email: credentials.email, role: "admin", avatar: "https://comptoir-du-libre.org/img/files/Users/photo/82/avatar/logo.jpg" };
            router.push('/admin');
        } else if (credentials.email === 'user@vuebooking.com' && credentials.password === 'user') {
            user.value = { name: "User", email: credentials.email, role: "user", avatar: "https://via.placeholder.com/40" };
            router.push('/');
        } else {
            alert("Email or password incorrect !");
            return;
        }

        
    };

    // Logout function
    const logout = () => {
        user.value = null;
        router.push('/login');
    };

    return { user, isAuthenticated, isAdmin, login, logout };
});
