import { defineNuxtPlugin } from '#app';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, doc, addDoc, setDoc } from 'firebase/firestore'; // Added 'setDoc' here
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
const db = getFirestore(app); // Initialize Firestore correctly
const auth = getAuth(app); // Initialize Authentication

// Export the Firestore methods and Auth
export { db, auth, collection, getDocs, deleteDoc, doc, addDoc, setDoc }; // Include 'setDoc' here

// Provide Firebase and Firestore as global properties to your Nuxt app
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('firebase', app);
  nuxtApp.provide('firestore', db); // Provide Firestore to Nuxt app
  nuxtApp.provide('collection', collection); // Provide Firestore collection method to Nuxt app
  nuxtApp.provide('getDocs', getDocs); // Provide Firestore getDocs method to Nuxt app
  nuxtApp.provide('deleteDoc', deleteDoc); // Provide Firestore deleteDoc method to Nuxt app
  nuxtApp.provide('doc', doc); // Provide Firestore doc method to Nuxt app
  nuxtApp.provide('addDoc', addDoc); // Provide Firestore addDoc method to Nuxt app
  nuxtApp.provide('setDoc', setDoc); // Provide Firestore setDoc method to Nuxt app
  nuxtApp.provide('auth', auth); // Provide Auth to Nuxt app
});
