<template>
  <div class="min-h-screen bg-cover bg-center flex items-center justify-center" :style="backgroundStyle">
    <form @submit.prevent="login" class="w-1/4 h-[600px] bg-white bg-opacity-90 p-6 rounded shadow-md max-w-2xl hover:shadow-amber-50 hover:shadow-2xl duration-700 flex items-center justify-center">
      <div class="items-center w-[370px]">
        <h2 class="text-lg font-bold">Hi, Welcome Back!</h2>
        <p class="font-light text-gray-500 text-xs">You can sign in or sign up!</p>
        <div class="mb-4">
          <label for="username" class="block text-sm font-bold mb-2 mt-[22px]">Email Address</label>
          <input v-model="username" type="text" id="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-bold mb-2">Password</label>
          <input v-model="password" type="password" id="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
        <div class="flex items-center justify-center">
          <button type="submit" class="w-40 bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
            Login
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import backgroundImg from '~/assets/images/backgroundImg.png'

const username = ref('')
const password = ref('')
const router = useRouter()

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${backgroundImg})`
}))

const login = () => {
  // Giriş işlemi logic
  router.push('/homepage') // Girişten sonra home sayfasına yönlendirme
}
</script>

<style scoped>
</style>
