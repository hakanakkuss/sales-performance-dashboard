import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
    }),
    actions: {
        setUser(user) {
            this.user = user;
        },
        setToken(token) {
            this.token = token;
        },
        clearAuth() {
            this.user = null;
            this.token = null;
        },
    },
    getters: {
        isAuthenticated: (state) => !!state.user,
    },
});
