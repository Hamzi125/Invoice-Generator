<template>
  <div class="h-screen bg-[#4C00FF]">
    <div class="navbar bg-black p-2 flex justify-between">
      <RouterLink to="/" class="text-[#4C00FF] font-jom text-4xl ml-2"
        >EinfachRechnung</RouterLink
      >
    </div>
    <div class="flex items-center justify-center h-60">
      <h1 class="font-jom text-6xl text-white">Willkommen beim Login!</h1>
    </div>
    <form @submit.prevent="Register">
      <div>
        <p class="text-2xl font-jom mx-auto w-80 text-white">Full Name</p>
        <input
          type="text"
          placeholder="full name"
            v-model="fullName"
          class="block mx-auto mb-4 p-2 rounded-lg w-80 bg-amber-50"
        />
      </div>
      <div>
        <p class="text-2xl font-jom mx-auto w-80 text-white">E-mail</p>
        <input
          type="email"
          placeholder="email"
          v-model="email"
          class="block mx-auto mb-4 p-2 rounded-lg w-80 bg-amber-50"
        />
      </div>
      <div>
        <p class="text-2xl font-jom mx-auto w-80 text-white">Password</p>
        <input
          type="password"
          placeholder="password"
          v-model="password"
          class="block mx-auto mb-4 p-2 rounded-lg w-80 bg-amber-50"
        />
      </div>
      <div class="flex justify-center">
        <button
          class="bg-[#eab308] hover:bg-[#ba88ff92] text-white font-jom text-2xl p-2 m-8 rounded-lg w-80"
        >
          Login
        </button>
      </div>
    </form>

    <div>
      <p class="text-white font-jom text-2xl text-center">
        Bereits registriert?
        <RouterLink to="/login" class="text-[#eab308]">Anmelden</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
const fullName = ref("");
const email = ref("");
const password = ref("");

const Register = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User registered:", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error registering user:", errorCode, errorMessage);
    });
};
</script>
