<template>
  <div class="container">
    <div class="row mt-5 mb-3 ms-0">
      <div class="col-md-6">
        <h1 class="heading fw-normal ps-0 ms-0">All Cosmetic Product</h1>
      </div>
      <div class="col-md-6 text-end">
        <!-- Search Input -->
        <input
          type="text"
          placeholder="Search for products"
          v-model="searchQuery"
          class="form-control"
        />
      </div>
    </div>

    <!-- Product Grid -->
    <div class="row gx-4 gy-4" v-if="paginatedProducts.length> 0">
      <div v-for="(product, index) in paginatedProducts" :key="index" class="col-md-3 Card">
        {{ product }}
        <div class="card">
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
    <div v-else class="text-center pt-3"> No Record Found</div>

    <!-- Pagination Controls -->
    <div class="text-center mt-5 mb-5">
      <span class="pagination-arrow" @click="goToPage(page - 1)">
        <i class="bi bi-arrow-left"></i>
      </span>
      <span class="pagination-arrow" @click="goToPage(page + 1)">
        <i class="bi bi-arrow-right"></i>
      </span>
    </div>

    <div class="text-end mb-3">
      <span class="pt-0 mt-0 text-right">Total Products {{ filteredProducts.length }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from '#app';
import { useProductStore } from '~/stores/Product.js'; 
import { collection, getDocs } from '~/plugins/firebase';

const firestore = useNuxtApp().$firestore;  

const ProductStore = useProductStore();

const products = ref([]); // Initialize `products` as an empty array

// Reactive property for the search query
const searchQuery = ref('');

// Update the `products` array when data is fetched
const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(firestore, 'products'));
    // Set products to an array of fetched data
    products.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

fetchProducts();  // Fetch products on component mount

const perPage = 16;  // Number of products per page
const page = ref(1);  // Current page

// Filtered products based on search query
const filteredProducts = computed(() => {
  if (!searchQuery.value) {
    return products.value;
  }
  return products.value.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Compute the paginated products based on the current page and filtered products
const paginatedProducts = computed(() => {
  const start = (page.value - 1) * perPage;
  const end = start + perPage;
  return filteredProducts.value.slice(start, end); // Ensure filtered products are paginated
});

// Calculate total pages based on filtered products
const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / perPage); // Ensure filtered products are considered
});

// Go to the specified page
function goToPage(pageNumber) {
  if (pageNumber >= 1 && pageNumber <= totalPages.value) {
    page.value = pageNumber;
  }
}

const router = useRouter();  

// Method to handle the click event and navigate to the product page
function gotoNextPage(id) {
  router.push({
    name: 'id',  // This should match the route name of the product detail page
    params: { id: id },  // Pass the product ID in the URL params
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
.card-body {
  background-color: black;
  color: white;
  border-radius: 5px;
}
.Cardimage {
  height: 200px;
  width: 100%;
  object-fit: cover;
}
</style>
