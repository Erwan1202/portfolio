<template>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-white text-xl">Portfolio</router-link>
        <ul class="flex space-x-6">
          <li><router-link to="/projets" class="text-white">Projets</router-link></li>
          <li><router-link to="/a-propos" class="text-white">À propos</router-link></li>
          <li><router-link to="/contact" class="text-white">Contact</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>
  