<template>
  <nav class="p-4 bg-gray-800 text-white flex justify-center gap-4">
    <RouterLink to="/">Accueil</RouterLink>
    <RouterLink to="/projects">Projets</RouterLink>
    <RouterLink to="/about">À Propos</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
  <router-view />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
