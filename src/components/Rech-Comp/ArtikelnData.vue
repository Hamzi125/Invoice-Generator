<template>
  <div
    class="bg-white border border-[#8c8c8c9b] rounded-lg shadow-lg p-4 m-6 min-h-50 flex flex-col gap-6"
  >
    <div class="flex justify-between">
      <label class="font-jom text-4xl">Artiklen</label>
      <button
        @click="addArtikel"
        class="bg-[#4C00FF] text-white px-4 py-2 rounded-2xl font-jom text-2xl hover:bg-blue-500 transition-colors duration-300 -mt-1"
      >
        Artikel hinzufügen
      </button>
    </div>

    <div
      v-for="(item, index) in items"
      :key="item.id"
      class="flex flex-col gap-5 border border-gray-300 p-4 rounded-lg"
    >
      <div class="flex flex-col">
        <label class="font-jom text-xl">Name/Beschreibung *</label>
        <input
          type="text"
          v-model="item.Beschreibung"
          placeholder="Webdesign Dienstleistungen"
          class="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div class="flex flex-col">
        <label class="font-jom text-xl">Menge *</label>
        <input
          type="number"
          v-model="item.Menge"
          placeholder="1"
          class="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div class="flex flex-col">
        <label class="font-jom text-xl">Einzelpreis (€) *</label>
        <input
          type="number"
          v-model="item.Einzelpreis"
          placeholder="0,00"
          class="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div class="flex flex-col">
        <label class="font-jom text-xl">MwSt. (%)</label>
        <select v-model="item.MwSt" id="" class="p-2 border border-gray-300 rounded-lg">
          <option value="19">19%</option>
          <option value="7">7%</option>
          <option value="0">0%</option>
        </select>
      </div>
      <div class="flex justify-between items-center">
        <p class="font-jom text-2xl">Gesamt: {{ itemTotal(item) }} €</p>
        <button>
          <span
            class="font-jom text-xl text-red-500"
            @click="removeArtikel(index)"
            v-if="items.length > 1"
          >
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/forma-regular/96/FA5252/full-trash.png"
              alt="full-trash"
            />
          </span>
        </button>
      </div>
    </div>
    <div class="border-t border-gray-300 pt-4">
      <div class="max-w-sm ml-auto">
        <div class="flex justify-between">
          <span class="font-jom text-xl">Zwischensumme:</span>
          <span class="font-jom text-xl">{{ calculateZwischensumme() }} €</span>
        </div>
        <div class="flex justify-between">
          <span class="font-jom text-xl">MwSt.:</span>
          <span class="font-jom text-xl">{{ calculateMwSt() }} %</span>
        </div>
        <div class="border-t border-gray-300 pt-4">
          <div class="flex justify-between">
            <span class="font-jom text-3xl">Summe:</span>
            <span class="font-jom text-3xl">{{
              calculateTotal() ? calculateTotal() : '0,00'
            }} €</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineExpose, watch } from "vue";

const items = ref([
  {
    id: 1,
    Beschreibung: "",
    Menge: 1,
    Einzelpreis: 0,
    MwSt: 19,
    total: 0,
  },
]);

const addArtikel = () => {
  const newItem = {
    id: items.value.length + 1,
    Beschreibung: "",
    Menge: 1,
    Einzelpreis: 0,
    MwSt: 19,
    Gesamt: 0,
    total: 0,
  };
  items.value.push(newItem);
};

const removeArtikel = (index) => {
  items.value.splice(index, 1);
};

const Summe = ref(0);
const calculateTotal = () => {
  Summe.value = items.value.reduce((acc, item) => {
    const netto = Number(item.Menge) * Number(item.Einzelpreis);
    item.Gesamt = netto; 
    const mwst = (netto * Number(item.MwSt)) / 100; //
    const total = netto + mwst;
    item.total = total; // Update the total for each item
    return acc + total;
  }, 0);
  return Summe.value.toFixed(2); // Return the total formatted to two decimal places
};

const itemTotal = (item) => {
  const netto = Number(item.Menge) * Number(item.Einzelpreis);
  const mwst = (netto * Number(item.MwSt)) / 100;
  return (netto + mwst).toFixed(2);
};


const calculateZwischensumme = () => {
  return items.value.reduce((acc, item) => {
    const netto = Number(item.Einzelpreis);
    return acc + netto;
  }, 0).toFixed(2);
};

const calculateMwSt = () => {
  return items.value.reduce((acc, item) => {
    const netto = item.MwSt;
    return netto;
  }, 0);
};

function reset() {
  items.value = [
    {
      id: 1,
      Beschreibung: "",
      Menge: 0,
      Einzelpreis: 0,
      MwSt: 19,
      Gesamt: 0,
      total: 0,
    },
  ];
  Summe.value = 0;
}
 

defineExpose({ reset, items, Summe, calculateTotal });
</script>
