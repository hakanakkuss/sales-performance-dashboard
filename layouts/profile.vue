<template>
  <div class="profile-layout">
    <header class="bg-purple-600 text-white p-4">
      <h1>Profile Page</h1>
      <Navigation />
    </header>
    <main class="p-4">
      <Nuxt />
    </main>
    <footer class="bg-gray-800 text-white p-4">
      <p>&copy; 2024 My Website - Profile</p>
    </footer>
  </div>
</template>

<script>
import Navigation from "~/pages/Navigation.vue";

export default {
  components: {
    Navigation
  }
}
</script>

<style scoped>
.profile-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
</style>
