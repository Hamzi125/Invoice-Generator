<template>
  <div class="bg-[#e8f1f2] container mx-auto">
    <Navbar />
    <LogoUpload ref="logoUpload" />
    <UserData ref="userData" />
    <KundeData ref="kundeData" />
    <RechnungData ref="rechnungData" />
    <ArtikelnData ref="artikelData" />
    <div class="flex justify-center items-center gap-3 h-40">
      <button
        @click="downloaden"
        class="bg-[#4C00FF] text-white font-jom text-2xl px-4 py-2 rounded-xl hover:bg-blue-500 hover:opacity-80 transition duration-300"
      >
        Rechnung erstellen & downloaden
      </button>
      <button
        @click="Zurücksetzen"
        :disabled="isLoading"
        class="bg-red-700 text-white font-jom text-2xl px-4 py-2 rounded-xl hover:bg-red-400 hover:opacity-80 transition duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="isLoading">
          <svg
            class="animate-spin h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
        </span>
        <span>Zurücksetzen</span>
      </button>
    </div>
    <RechnungsPreview
      class="visually-hidden-pdf"
      ref="rechnungRef"
      :logo="logoUrl"
      :name="kundeInfo.name"
      :city="kundeInfo.city"
      :plz="kundeInfo.plz"
      :country="kundeInfo.country"
      :address="kundeInfo.address"
      :Uname="userInfo.name"
      :Ucity="kundeInfo.city"
      :Ucountry="userInfo.country"
      :Uplz="userInfo.plz"
      :Uaddress="kundeInfo.address"
      :email="userInfo.email"
      :rechnungsN="rechnungInfo.rechnungsnummer"
      :rechnungsD="rechnungInfo.rechnungsdatum"
      :artikel="artikelDataInfo"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import html2pdf from "html2pdf.js";

import Navbar from "./Navbar.vue";
import LogoUpload from "./Rech-Comp/LogoUpload.vue";
import ArtikelnData from "./Rech-Comp/ArtikelnData.vue";
import RechnungData from "./Rech-Comp/RechnungData.vue";
import KundeData from "./Rech-Comp/KundeData.vue";
import UserData from "./Rech-Comp/UserData.vue";
import RechnungsPreview from "./RechnungPreview.vue";

const artikelData = ref();
const rechnungData = ref();
const logoUpload = ref();
const kundeData = ref();
const userData = ref();
const rechnungRef = ref();

const isLoading = ref(false);

const Zurücksetzen = () => {
  isLoading.value = true;
  setTimeout(() => {
    userData.value?.reset();
    kundeData.value?.reset();
    artikelData.value?.reset();
    rechnungData.value?.reset();
    logoUpload.value?.reset();
    isLoading.value = false;
    console.log("Zurücksetzen der Daten HOBI!");
  }, 800);
};

const logoUrl = computed(() => logoUpload.value?.logoUrl || "");
const kundeInfo = computed(() => ({
  name: kundeData.value?.name || "",
  address: kundeData.value?.address || "",
  city: kundeData.value?.city || "",
  plz: kundeData.value?.plz || "",
  country: kundeData.value?.country || "",
}));

const userInfo = computed(() => ({
  name: userData.value?.name || "",
  email: userData.value?.email || "",
  address: userData.value?.address || "",
  city: userData.value?.city || "",
  plz: userData.value?.plz || "",
  country: userData.value?.country || "",
}));

const rechnungInfo = computed(() => ({
  rechnungsnummer: rechnungData.value?.rechnungsnummer || "",
  rechnungsdatum: rechnungData.value?.rechnungsdatum || "",
}));

const artikelDataInfo = computed(() => {
  return (
    artikelData.value?.items.map((item) => ({
      Beschreibung: item.Beschreibung,
      Menge: item.Menge,
      Einzelpreis: item.Einzelpreis,
      MwSt: item.MwSt,
      total: item.total,
    })) || []
  );
});

/*
const router = useRouter();
function goToPreview() {
  router.push({
    name: "preview",
    query: {
      logo: logoUrl.value,
      name: kundeInfo.value.name,
      city: kundeInfo.value.city,
      plz: kundeInfo.value.plz,
      country: kundeInfo.value.country,
      address: kundeInfo.value.address,
      Uname: userInfo.value.name,
      Ucity: kundeInfo.value.city,
      Ucountry: userInfo.value.country,
      Uplz: userInfo.value.plz,
      Uaddress: kundeInfo.value.address,
      email: userInfo.value.email,
      rechnungsN: rechnungInfo.value.rechnungsnummer,
      rechnungsD: rechnungInfo.value.rechnungsdatum,
      artikel: JSON.stringify(artikelDataInfo.value), // إذا كانت مصفوفة
    },
  });
}
*/

const downloaden = async () => {
  const preview = document.querySelector(".visually-hidden-pdf");
  if (preview) preview.classList.remove("visually-hidden-pdf");

  const element = rechnungRef.value.rootDiv;
  const options = {
    margin: 0,
    filename: "EinfachRechnung.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  
  };

  await html2pdf().from(element).set(options).save();

  // أعد كلاس الإخفاء بعد التحويل
  if (preview) preview.classList.add("visually-hidden-pdf");
};

const props = defineProps({
  onHerunterladen: Function,
});
</script>

<style>
.visually-hidden-pdf {
  opacity: 0 !important;
  pointer-events: none !important;
  position: absolute !important;
  width: 0 !important;
  height: 0 !important;
  overflow: hidden !important;
}
</style>
