<script setup lang="ts">

</script>

<template>
  <div class="profile-layout">
    <header class="bg-purple-600 text-white p-4">
      <h1>Profile Page</h1>
<!--      <Navigation />-->
    </header>

      <div class="min-h-screen bg-white">
        <button class="justify-center items-center text-black">Go To Home Page</button>
      </div>

    <footer class="bg-gray-800 text-white p-4">
      <p>&copy; 2024 My Website - Profile</p>
    </footer>
  </div>
</template>



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
