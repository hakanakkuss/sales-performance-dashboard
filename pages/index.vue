<template>
  <div class="min-h-screen bg-cover bg-center flex items-center justify-center">
    <form @submit.prevent="login" class="w-1/4 h-[600px] bg-[#6A717F] bg-opacity-10 p-6 rounded-2xl shadow-md max-w-2xl hover:shadow-neutral-450 hover:shadow-2xl duration-700 flex items-center justify-center">
      <div class="items-center w-[370px]">
        <h2 class="text-lg font-bold">Hi, Welcome Back!</h2>
        <p class="font-light text-gray-500 text-xs">You can sign in or sign up!</p>
        <div class="mb-4">
          <label for="username" class="block text-sm font-bold mb-2 mt-[22px]">Email Address</label>
          <input v-model="username" type="text" id="username" class="shadow border rounded min-w-full py-2 px-3 text-white focus:shadow-outline" required>
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-normal mb-2">Password</label>
          <input v-model="password" type="password" id="password" class="shadow border rounded min-w-full py-2 px-3 text-white focus:shadow-outline" required>
        </div>
        <div class="flex items-center justify-center">
          <button type="submit" class="min-w-full bg-[#B4B8BF] hover:bg-[#7d8085] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
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

// const backgroundStyle = computed(() => ({
//   backgroundImage: `url(${backgroundImg})`
// }))

const login = () => {
  router.push('/home')
}
</script>

