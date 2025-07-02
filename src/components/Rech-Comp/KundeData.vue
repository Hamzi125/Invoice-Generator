<template>
  <div
    class="bg-white border border-[#8c8c8c9b] rounded-lg shadow-lg p-4 m-6 min-h-50 flex flex-col gap-6"
  >
    <label class="font-jom text-4xl">Rechnungsempfänger</label>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col">
        <label class="font-jom text-xl">Firmenname / Name *</label>
        <input
          type="text"
          v-model="name"
          placeholder="Max Mustermann GmbH"
          class="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div class="flex flex-col">
        <label class="font-jom text-xl">E-Mail</label>
        <input
          type="email"
          v-model="email"
          placeholder="max@mustermann.de"
          class="p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div class="flex flex-col">
        <label class="font-jom text-xl">Address *</label>
        <input
          type="address"
          v-model="address"
          placeholder="Musterstraße 1"
          class="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div class="flex flex-col">
        <label class="font-jom text-xl">Stadt *</label>
        <input
          type="text"
          v-model="city"
          placeholder="Musterstadt"
          class="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div class="flex flex-col">
        <label class="font-jom text-xl">PLZ *</label>
        <input
          type="number"
          v-model="plz"
          placeholder="10115"
          class="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div class="flex flex-col">
        <label class="font-jom text-xl">Land</label>
        <input
          type="text"
          v-model="country"
          placeholder="Deutschland"
          class="p-2 border border-gray-300 rounded-lg"
        />
      </div>
 
    </div>
  </div>
</template>

<script setup>
import { ref, defineExpose } from "vue";

const name = ref("");
const email = ref("");
const address = ref("");
const city = ref("");
const plz = ref("");
const country = ref("");
 


function reset() {
  name.value = "";
  email.value = "";
  address.value = "";
  city.value = "";
  plz.value = "";
  country.value = "";
 
}
defineExpose({ reset , name, email, address, city, plz, country  });
</script>
