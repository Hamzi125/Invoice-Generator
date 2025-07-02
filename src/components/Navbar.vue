<template>
  <nav class="navbar-container">
    <div class="navbar bg-black p-2 flex justify-between">
      <RouterLink to="/" class="text-[#4C00FF] font-jom text-4xl ml-2"
        >EinfachRechnung</RouterLink
      >
      <!--
      <button
        class="mr-2 bg-[#4C00FF] hover:bg-[#4c00ffa1] w-30 text-center rounded-xl"
      >
        <RouterLink to="/login" class="text-white font-jom text-3xl"
          >Anmelden</RouterLink
        >
      </button>
      -->
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
