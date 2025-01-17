<template>
    <div class="form-container">
      <h2>{{ productToEdit ? 'Edit Product' : 'Add Product' }}</h2>
      <form @submit.prevent="submitProduct">
        <div> 
          <label for="title">Title:</label>
          <input v-model="formData.title" type="text" id="title" required />
        </div>
        <div>
          <label for="rating">Rating:</label>
          <input v-model="formData.rating" type="number" id="rating" required min="0" max="5" step="0.1" />
        </div>
        <div>
          <label for="price">Price:</label>
          <input v-model="formData.price" type="number" id="price" required />
        </div>
        <div>
          <label for="originalPrice">Original Price:</label>
          <input v-model="formData.originalPrice" type="number" id="originalPrice" required />
        </div>
        <div>
          <label for="image">Image URL:</label>
          <input v-model="formData.image" type="text" id="image" required />
        </div>
        <button type="submit">{{ productToEdit ? 'Update Product' : 'Add Product' }}</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from 'vue'; 
  import { useRouter, useRoute } from '#app';  
  import { db, doc, setDoc, addDoc } from '~/plugins/firebase'; // For Firestore operations
  import { collection } from 'firebase/firestore';
  
  // Define the prop
  const props = defineProps({
    product: {
      type: Object,
      default: null,
    }
  });
  
  const router = useRouter();  
  // Form data for adding or editing a product
  const formData = ref({
    title: '',
    // rating: 0,
    // price: 0,
    // originalPrice: 0,
    image: '',
  });
  
  // Watch the `product` prop for changes (for editing)
  const productToEdit = ref(null);
  
  // If `product` is passed, populate the form with the product's data
  watch(() => props.product, (newProduct) => {
  if (newProduct) {
    // If rating is an array, take the average or the first value, depending on your business logic
    formData.value = { 
      ...newProduct,
      rating: Array.isArray(newProduct.rating) ? newProduct.rating[0] : newProduct.rating, // Take the first value or handle accordingly
      price: typeof newProduct.price === 'string' ? parseFloat(newProduct.price.replace('$', '').trim()) : newProduct.price, // Remove "$" and convert to a number
      originalPrice: typeof newProduct.originalPrice === 'string' ? parseFloat(newProduct.originalPrice.replace('$', '').trim()) : newProduct.originalPrice, // Same for originalPrice
    };
    productToEdit.value = newProduct;
  }
}, { immediate: true });

   
  const submitProduct = async () => {
    try {
      if (productToEdit.value) {
        // Update existing product
        const productRef = doc(db, '/categories', productToEdit.value.id);
        await setDoc(productRef, formData.value);
        alert('Product updated successfully!');
      } else {
        // Add new product
        const docRef = await addDoc(collection(db, '/categories'), formData.value);
        console.log('Document written with ID:', docRef.id);
        alert('Product added successfully!');
      }
      window.location.href = '/getallproduct';
      // router.push('/getallproduct')
    } catch (error) {
      console.error('Error submitting product:', error);
      alert('Failed to submit product. Please try again.');
    }
  };
  
  // const submitProduct = async () => {
  //   try {
  //     if (productToEdit.value) {
  //       // Update existing product
  //       const productRef = doc(db, 'products', productToEdit.value.id);
  //       await setDoc(productRef, formData.value);
  //       alert('Product updated successfully!');
  //     } else {
  //       // Add new product
  //       const docRef = await addDoc(collection(db, 'products'), formData.value);
  //       console.log('Document written with ID:', docRef.id);
  //       alert('Product added successfully!');
  //     }
  //     window.location.href = '/getallproduct';
  //     // router.push('/getallproduct')
  //   } catch (error) {
  //     console.error('Error submitting product:', error);
  //     alert('Failed to submit product. Please try again.');
  //   }
  // };

  </script>
  
  <style scoped>
  .form-container {
    position: absolute;
    top: 15%;
    left: 35%;
     
    width: 500px;
    margin: 20px auto;
    background-color: black;
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
  