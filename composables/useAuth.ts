import { useAuthStore } from '~/stores/auth';

export const useAuth = () => {
    const authStore = useAuthStore();

    const login = async (username, password) => {
        try {
            // API isteği yaparak token alıyoruz
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            authStore.setToken(data.token);
            authStore.setUser(data.user);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const logout = () => {
        authStore.clearAuth();
    };

    const fetchProtectedData = async () => {
        try {
            const response = await fetch('/api/protected', {
                headers: {
                    'Authorization': `Bearer ${authStore.token}`,
                },
            });
            const data = await response.json();
            console.log('Protected data:', data);
        } catch (error) {
            console.error('Fetching protected data failed:', error);
        }
    };

    return { login, logout, fetchProtectedData };
};
