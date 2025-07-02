<template>
  <div ref="rootDiv" class=" w-[210mm]">
    <div class=" p-8 pl-8" >
      <div class="flex justify-between">
        <div>
          <p class="pb-2 text-xl font-bold">{{ Uname }}</p>
          <p class="text-sm">{{ Uaddress }}</p>
          <p class="text-sm"> {{ Uplz }}, {{ Ucity }}</p>
          <p class="text-sm">{{ Ucountry }}</p>
          <p class="text-sm">{{ email }}</p>
        </div>
        <div>
          <img
            :src="logo"
            v-if="logo"
            class="h-20 w-20"
            crossorigin="anonymous"
          />
        </div>
      </div>
      <div class="flex justify-between pt-6">
        
        <div class="pl-2 text-left">
          <p class="font-bold ">Rechnungsempfänger</p>
          <p class="font-bold text-lg">{{ name }}</p>
          <p class="text-sm">{{ address }}</p>
          <p class="text-sm"> {{ plz }}, {{ city }}</p>
          <p class="text-sm"> {{ country }}</p>
        </div>
        
        <div>
          
          <p class="pb-3 text-2xl font-bold">RECHNUNG</p>
          <p class="text-sm font-bold">
            Rechnungsnummer:
            <span class="pl-1 font-normal">{{ rechnungsN }}</span>
          </p>
          
          <p class="text-sm font-bold">
            Rechnungsdatum:
            <span class="pl-1 font-normal">{{ rechnungsD }}</span>
          </p>
          
        </div>
      </div>
      
      
      <div class="pt-6">
        <table class="w-full table-auto text-sm">
          <thead class="border-b-2">
            <tr class="h-10 text-left">
              <th>Artikel</th>
              <th>Menge</th>
              <th>Preis in €</th>
              <th class="text-right">MwSt. in %</th>
              <th class="text-right">Summe in €</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in artikel" :key="idx" class="h-10">
              <td>{{ item.Beschreibung }}</td>
              <td>{{ item.Menge }}</td>
              <td>{{ item.Einzelpreis }}</td>
              <td class="text-right">{{ item.MwSt }} %</td>
              <td class="text-right">{{ item.total }} €</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-end">
        <p class="pt-6 text-xl font-bold">Gesmat: {{ calculateTotal() }} €</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";


const props = defineProps({
  logo: String,
  name: String,
  city: String,
  plz: Number,
  country: String,
  address: String,
  Uname: String,
  Ucity: String,
  Uplz: Number,
  Ucountry: String,
  Uaddress: String,
  email: String,
  rechnungsN: String,
  rechnungsD: Date,
  artikel: Array,
});

function calculateTotal() {
  if (!Array.isArray(props.artikel)) return "0,00";
  const sum = props.artikel.reduce((acc, item) => {
    if (typeof item.total === "number") {
      return acc + Number(item.total);
    }
    const netto = Number(item.Menge) * Number(item.Einzelpreis);
    const mwst = (netto * Number(item.MwSt)) / 100;
    return acc + netto + mwst;
  }, 0);
  return sum.toFixed(2).replace(".", ",");
}

const rootDiv = ref(null);

defineExpose({ rootDiv });
</script>
