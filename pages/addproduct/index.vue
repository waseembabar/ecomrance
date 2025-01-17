<template>
  <div class="form-container">
    <h2>{{ productToEdit ? 'Edit Product' : 'Add Product' }}</h2>
    <form @submit.prevent="submitProduct">
      <div>
        <label for="title">Title:</label>
        {{  route.query.product }}
        <input v-model="formData.title" type="text" id="title" required />
      </div>
      <!-- <div>
        <label for="rating">Rating:</label>
        <input v-model.number="formData.rating" type="number" id="rating" required min="0" max="5" step="0.1" />
      </div>
      <div>
        <label for="price">Price:</label>
        <input v-model.number="formData.price" type="number" id="price" required />
      </div>
      <div>
        <label for="originalPrice">Original Price:</label>
        <input v-model.number="formData.originalPrice" type="number" id="originalPrice" required />
      </div> -->
      <div>
        <label for="image">Image URL:</label>
        <input v-model="formData.image" type="text" id="image" required />
      </div>
      <button type="submit">{{ productToEdit ? 'Update Product' : 'Add Product' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'; 
import { useRouter,useRoute} from '#app';  
import { db, doc, setDoc, addDoc } from '~/plugins/firebase'; // For Firestore operations
import { collection } from 'firebase/firestore';

// Form data
const formData = ref({
  title: '',
  // rating: 0,
  // price: 0,
  // originalPrice: 0,
  image: '',
});

// Fetch the product data if editing
const route = useRoute();
const router = useRouter();
const productToEdit = ref(null);

// Check if there's a product to edit passed through the route query
watch(() => route.query.product, (newVal) => {
 
  if (newVal) {
    productToEdit.value = JSON.parse(newVal);
    // Set form data with the product details for editing
    formData.value = { ...productToEdit.value };
  }
}, { immediate: true });

// Submit the product form (either add new or update existing)
const submitProduct = async () => {
  try {
    if (productToEdit.value) {
      // Update existing product
      const productRef = doc(db, 'categories', productToEdit.value.id);
      await setDoc(productRef, formData.value);
      alert('Product updated successfully!');
    } else {
      // Add new product
      const docRef = await addDoc(collection(db, 'categories'), formData.value);
      console.log('Document written with ID:', docRef.id);
      alert('Product added successfully!');
    }
    // Redirect to a different page or clear the form
    router.push('/'); // Redirect to the home page or any other page
  } catch (error) {
    console.error('Error submitting product:', error);
    alert('Failed to submit product. Please try again.');
  }
};
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
