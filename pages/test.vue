<script setup>
import { ref } from 'vue'; 
import { db, addDoc } from '../plugins/firebase'; 
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions
const firestore = useNuxtApp().$firestore; // Access Firestore service

const products = ref([]);

// Function to fetch products from Firestore
const fetchProducts = async () => {
  try {
    // Use the collection() and getDocs() functions with Firestore modular SDK
    const querySnapshot = await getDocs(collection(firestore, 'products'));
    
    products.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};



 
fetchProducts();
</script>

<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id" class="product-item">
        <div class="product-image">
          <img :src="product.image" alt="Product Image" />
        </div>
        <div class="product-details">
          <h2>{{ product.title }}</h2>
          <p>Price: ${{ product.price }}</p>
          <p>Rating: {{ product.rating }} / 5</p>
        </div>
      </li>
    </ul>
  </div>

 
</template>

<style scoped>
.product-item {
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
}

.product-image img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
}

.product-details {
  flex: 1;
}

.product-details h2 {
  margin: 0;
  font-size: 1.2em;
}

.product-details p {
  margin: 5px 0;
}
</style>
