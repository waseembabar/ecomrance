<template>
    <div class="container">
      <div class="row mt-5 mb-3 ms-0 ">
         
        <h1 class="heading fw-normal ps-0 ms-0">All Cosmetic  Product</h1>
      </div>
  
      <!-- Product Grid -->
      <div class="row gx-4 gy-4">
        <div
          v-for="(product, index) in paginatedProducts"
          :key="index"
          class="col-md-3 Card"
        >
          <div class="card" @click="gotoNextPage(product.id , product)">
            <img :src="product.image" alt="" class="Cardimage"/>
            <div class="card-body">
              <h5 class="card-title CardHeading mb-0 pb-0">{{ product.title }}</h5>
              <p class="pb-0 mb-0 pt-0">
                {{ product.price }} <span>{{ product.originalPrice }}</span>
              </p>
              <div class="d-flex">
                <i v-for="star in product.rating" :key="star" class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Pagination Controls -->
      <div class="text-center mt-5 mb-5">
        <span
          class="   pagination-arrow"
          @click="goToPage(page - 1)"
        >
        <i class="bi bi-arrow-left"></i>
        </span>
        <span
          class="  pagination-arrow"
          @click="goToPage(page + 1)"
        >
        <i class="bi bi-arrow-right"></i>
        </span>
      
      </div>
      <div class="text-end mb-3">
          <span class="pt-0 mt-0 text-right">Total Products {{ products.length }}</span>
      </div>
    </div>

    <div>
    
  </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from '#app';
  import { useProductStore } from '~/stores/Product.js'
import { db, addDoc } from '../plugins/firebase'; 
import { collection, getDocs } from 'firebase/firestore';
const firestore = useNuxtApp().$firestore;  
 
  

const ProductStore = useProductStore()  
  

const products = ref([]);
products.value = computed(() =>{
  return ProductStore.products
})

 
const fetchProducts = async () => {
  try {
    
    const querySnapshot = await getDocs(collection(firestore, 'products'));
    
    products.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};



 
fetchProducts();

ProductStore.fetchProductsAction()

  
  const perPage = 16; // Number of products per page
  const page = ref(1); // Current page
  
  // Compute the paginated products based on current page
  const paginatedProducts = computed(() => {
    const start = (page.value - 1) * perPage;
    const end = start + perPage;
    return products.value.slice(start, end);
  });
  
  // Calculate total pages
  const totalPages = computed(() => {
    return Math.ceil(products.value.length / perPage);
  });
  
  // Go to the specified page
  function goToPage(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= totalPages.value) {
      page.value = pageNumber;
    }
  }
  


  const router = useRouter();  
  // Method to handle the click event and navigate to product page
  function gotoNextPage(id) {
  
    router.push({
    name: 'id', // This should match the route name of the product detail page
    params: { id:id }, // Pass the product ID in the URL params
    // Pass the entire product data in the state
  });
    
  }
  
 
  </script>
  
  <style scoped>
 .pagination-arrow {
  cursor: pointer;
  font-size: 1.5rem; /* Adjust font size for the arrows */
  padding: 0.5rem 1rem;
  margin: 0 0.2rem;
}
 
 
 
 
  .Card_img {
    background-color: orange;
  }
  .Card {
    cursor: pointer;
    border-radius: 10px;
}
.card-body{
      background-color: black;
      color: white;
      border-radius: 5px;

  }
  .Cardimage{
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
  </style>
  