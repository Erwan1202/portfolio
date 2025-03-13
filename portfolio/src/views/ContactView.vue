<template>
    <section class="py-10 bg-gray-50 text-center">
      <div class="container mx-auto">
        <h2 class="text-3xl font-semibold mb-6">Contact</h2>
        <form @submit.prevent="submitForm" class="max-w-lg mx-auto">
          <input v-model="name" type="text" placeholder="Nom" class="block w-full p-2 mb-4 border border-gray-300 rounded"/>
          <input v-model="email" type="email" placeholder="Email" class="block w-full p-2 mb-4 border border-gray-300 rounded"/>
          <textarea v-model="message" placeholder="Message" class="block w-full p-2 mb-4 border border-gray-300 rounded"></textarea>
          <button type="submit" class="bg-blue-500 text-white px-6 py-2 rounded-full">Envoyer</button>
        </form>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const name = ref("");
  const email = ref("");
  const message = ref("");
  
  const submitForm = () => {
    // Code pour envoyer le message via une API ou email
    alert("Formulaire envoyé !");
  };
  </script>
  
  <style scoped>
  </style>
  