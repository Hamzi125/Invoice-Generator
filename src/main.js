import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyABfwaUK9sqt9fP8Cv-yncQER0BYMOnYIs",
  authDomain: "einfachrechnung-654bb.firebaseapp.com",
  projectId: "einfachrechnung-654bb",
  storageBucket: "einfachrechnung-654bb.appspot.com",
  messagingSenderId: "341960369212",
  appId: "1:341960369212:web:3ce68c3523f393cc594f39",
  measurementId: "G-PCMQPQFTLH"
};

const appFirebase = initializeApp(firebaseConfig);
getAnalytics(appFirebase);

createApp(App).use(router).mount('#app')
