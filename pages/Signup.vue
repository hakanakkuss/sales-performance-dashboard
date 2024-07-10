<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import * as yup from 'yup';

const username = ref('');
const password = ref('');
const router = useRouter();
const errors = ref<{ [key: string]: string }>({});

// Yup şema tanımı
const schema = yup.object().shape({
  username: yup.string().email('Geçerli bir email adresi girin').required('Email zorunludur'),
  password: yup.string().min(6, 'Şifre en az 6 karakter olmalıdır').required('Şifre zorunludur'),
});

const login = async () => {
  try {
    // Form verilerini doğrulama
    await schema.validate({ username: username.value, password: password.value }, { abortEarly: false });
    // Doğrulama başarılı ise home sayfasına yönlendir
    router.push('/home');
  } catch (err) {
    // Doğrulama hatalarını işleme
    if (err instanceof yup.ValidationError) {
      errors.value = {};
      err.inner.forEach(error => {
        if (error.path) {
          errors.value[error.path] = error.message;
        }
      });
    }
  }
};

</script>

<template>
  <div class="min-h-screen bg-cover bg-center flex items-center justify-center">
    <form @submit.prevent="login" class="w-1/4 h-[600px] bg-[#6A717F] bg-opacity-10 p-6 rounded-2xl shadow-md max-w-2xl hover:shadow-neutral-450 hover:shadow-2xl duration-700 flex items-center justify-center">
      <div class="items-center w-[370px]">
        <h2 class="text-lg font-bold">Hi, Create an account</h2>
        <p class="font-light text-gray-500 text-xs">Already have an account?</p>
        <button>Login</button>
        <div class="mb-4">
          <label for="username" class="block text-sm font-extralight mb-2 mt-[22px]">Email Address</label>
          <input v-model="username" type="text" id="username" class="font-extralight shadow rounded min-w-full py-2 px-3 text-white focus:shadow-outline" placeholder="Enter your email" required>
          <span v-if="errors.username" class="text-red-500 text-sm">{{ errors.username }}</span>
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-extralight mb-2">Password</label>
          <input v-model="password" type="password" id="password" class="font-extralight shadow rounded min-w-full py-2 px-3 text-white focus:shadow-outline" placeholder="Enter your password" required>
          <span v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</span>
        </div>
        <div class="flex items-center justify-center">
          <button type="submit" class="min-w-full bg-[#B4B8BF] hover:bg-[#7d8085] text-white font-extralight py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
            Create account
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
