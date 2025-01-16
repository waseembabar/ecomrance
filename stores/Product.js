import { defineStore } from 'pinia';
import { useNuxtApp } from '#app'; // Import useNuxtApp for accessing globally provided properties
import { collection, getDocs } from 'firebase/firestore';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
  }),

  actions: {
    async fetchProductsAction() {
      try {
        const { $firestore } = useNuxtApp(); // Access firestore from global app context
        const querySnapshot = await getDocs(collection($firestore, 'products'));
        this.products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
});
