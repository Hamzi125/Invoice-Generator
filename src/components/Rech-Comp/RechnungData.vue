<template>
  <div
    class="bg-white border border-[#8c8c8c9b] rounded-lg shadow-lg p-4 m-6 min-h-50 flex flex-col gap-6"
  >
    <label class="font-jom text-4xl">Rechnungsdetails</label>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col">
        <label class="font-jom text-xl">Rechnungsnummer</label>
        <input
          type="text"
          v-model="rechnungsnummer"
          placeholder="RE-2025-001"
          class="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div class="flex flex-col">
        <label class="font-jom text-xl">Rechnungsdatum</label>
        <input
          type="date"
          v-model="rechnungsdatum"
          placeholder="1"
          class="p-2 border border-gray-300 rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineExpose } from "vue";

const rechnungsnummer = ref("");
const rechnungsdatum = ref("");






function reset() {
  rechnungsnummer.value = "";
  rechnungsdatum.value = "";
}

defineExpose({reset, rechnungsnummer, rechnungsdatum});

</script>
