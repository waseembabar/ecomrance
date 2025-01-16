import { defineNuxtPlugin } from '#app';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Import Firestore methods
import { getAuth } from 'firebase/auth'; // For Firebase Authentication (optional)

// Your Firebase configuration (replace with your own configuration)
const firebaseConfig = {
  apiKey: "AIzaSyBWi3o9Z_gBBIpz1VrLFeoB_Z4HbjuCiNg",
  authDomain: "new-database-c9a31.firebaseapp.com",
  projectId: "new-database-c9a31",
  storageBucket: "new-database-c9a31.appspot.com",
  messagingSenderId: "1085181640209",
  appId: "1:1085181640209:web:b11f410cf7577f1e9f7bb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Export the Firestore methods as well
export { db, collection, addDoc, auth };

// Provide Firebase and Firestore as global properties to your Nuxt app
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('firebase', app);
  nuxtApp.provide('firestore', db);
  nuxtApp.provide('auth', auth);
});
