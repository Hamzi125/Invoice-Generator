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
    <form @submit.prevent="Login">
      <div>
        <p class="text-2xl font-jom mx-auto w-80 text-white">E-mail</p>
        <input
          type="email"
          v-model="email"
          placeholder="username"
          class="block mx-auto mb-4 p-2 rounded-lg w-80 bg-amber-50"
        />
      </div>
      <div>
        <p class="text-2xl font-jom mx-auto w-80 text-white">Password</p>
        <input
          type="password"
          v-model="password"
          placeholder="password"
          class="block mx-auto mb-4 p-2 rounded-lg w-80 bg-amber-50"
        />
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          class="bg-[#eab308] hover:bg-[#ba88ff92] text-white font-jom text-2xl p-2 m-8 rounded-lg w-80"
        >
          Login
        </button>
      </div>
    </form>
    <div>
      <p class="text-white font-jom text-2xl text-center">
        Noch kein Konto?
        <RouterLink to="/register" class="text-[#eab308]"
          >Registrieren</RouterLink
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const Login = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
 
      const user = userCredential.user;
      console.log("Login successful:", user);
      // Redirect or perform other actions after successful login
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Login failed:", errorCode, errorMessage);
    });
};
</script>
