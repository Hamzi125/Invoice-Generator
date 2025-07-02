<template>
  <div class=" bg-[#e8f1f2]">
    <div class="container mx-auto p-4 bg-[#e8f1f2]"></div>
    <div class="ml-4">
      <h1 class="font-jom text-5xl lg:text-8xl">Neue Rechnung erstellen</h1>
      <p class="text-gray-600 font-jom text-2xl lg:text-4xl -mt-4">
        Füllen Sie alle erforderlichen Felder aus
      </p>
    </div>
    <div>
      <form
        class="m-6 p-4 bg-white border border-[#8c8c8c9b] rounded-lg shadow-lg mt-8 min-h-50"
      >
        <div>
          <label class="block text-gray-700 font-jom text-4xl mb-2"
            >Firmenlogo</label
          >
          <div>
            <input
              id="file-upload"
              type="file"
              class="hidden"
              ref="fileInput"
              @change="handleFileChange"
            />
            <div
              class="bg-amber border border-dashed border-gray-300 rounded-lg flex flex-col justify-center text-center"
            >
              <div v-if="logoUrl" class="flex justify-center mt-4">
                <img
                  :src="logoUrl"
                  alt="Firmenlogo"
                  class="h-24 object-contain my-5"
                  style="max-width:96px; max-height:96px;"
                />
              </div>
              <div v-else class="flex justify-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-15 text-gray-500 mx-auto my-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
            </div>
            <div class="flex justify-center mt-4 gap-10">
              <buttom
                @click="fileInput.click()"
                class="mt-2 text-2xl text-error-600 hover:text-error-700 bg-[#4C00FF] rounded-2xl w-50 h-12 font-jom flex items-center justify-center text-[#ffffff] hover:bg-[#4c00ff71] transition duration-250"
                >{{ logoUrl ? 'Logo ändern' : 'Logo hochladen'  }}</buttom
              >
              <button
                v-if="logoUrl"
                @click="removeLogo"
                type="button"
                class="mt-2 text-2xl text-error-600 hover:text-error-700 bg-red-700 rounded-2xl w-50 h-12 font-jom flex items-center justify-center text-[#ffffff] hover:bg-red-400 transition duration-250"
              >
                Logo entfernen
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineExpose } from "vue";
 

const logoUrl = ref("");
const fileInput = ref(null);

const removeLogo = () => {
  logoUrl.value = "";
  if (fileInput.value) {
    fileInput.value.value = "";
  }
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    logoUrl.value = URL.createObjectURL(file);
  }
};


function reset() {
  logoUrl.value = "";
  if (fileInput.value) {
    fileInput.value.value = "";
  }
}

 

defineExpose({reset, logoUrl});
</script>
