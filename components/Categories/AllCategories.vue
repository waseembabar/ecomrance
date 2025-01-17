<template>
  <div class="container">
    <div class="row mt-5 mb-3 ms-0">
      <div class="col-md-6">
        <h1 class="heading fw-normal ps-0 ms-0">All Cosmetic Products</h1>
      </div>
      <div class="col-md-6 text-end">
        <input
          type="text"
          placeholder="Search for products"
          v-model="searchQuery"
          class="form-control"
        />
        <button>Click Here </button>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table TableDiv">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in paginatedProducts" :key="index">
            <th scope="row">{{ index }}</th>
            <td>{{ product?.title }}</td>
         
            <td class="ProductImage">
              <img :src="product.image" alt="" />
            </td>
            <td>
              <div class="IconsDiv d-flex">
                <i class="bi bi-pencil-square me-3 edit" @click="editProduct(product)"></i>
                <i class="bi bi-eye me-3 view"></i>
                <i class="bi bi-archive delete" @click="openDeleteModal(product.id)"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

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

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="modal" tabindex="-1" style="display:block">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirm Deletion</h5>
            <button type="button" class="btn-close" @click="closeDeleteModal"></button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete this product?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeDeleteModal">Cancel</button>
            <button type="button" class="btn btn-danger" @click="deleteProduct">Delete</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Product Modal (Pass Product Data as Prop) -->
    <CategoriesAddCategories v-if="selectedProductShow" :product="selectedProduct" />
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { collection, getDocs, doc, deleteDoc } from '~/plugins/firebase';


  const firestore = useNuxtApp().$firestore;

  const products = ref([]);
  const searchQuery = ref('');
  const showDeleteModal = ref(false);  
  const productToDelete = ref(null);
  let selectedProductShow = ref(false) 
  const selectedProduct = ref(null);  

  // Fetch products from Firestore
  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'categories'));
      products.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  fetchProducts();

  // Pagination and filtering logic
  const perPage = 16;
  const page = ref(1);

  const filteredProducts = computed(() => {
    if (!searchQuery.value) return products.value;
    return products.value.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  const paginatedProducts = computed(() => {
    const start = (page.value - 1) * perPage;
    const end = start + perPage;
    return filteredProducts.value.slice(start, end);
  });

  const totalPages = computed(() => {
    return Math.ceil(filteredProducts.value.length / perPage);
  });

  function goToPage(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= totalPages.value) {
      page.value = pageNumber;
    }
  }

  // Show the delete confirmation modal
  function openDeleteModal(productId) {
    showDeleteModal.value = true;
    productToDelete.value = productId;
  }

  // Close the delete modal
  function closeDeleteModal() {
    showDeleteModal.value = false;
    productToDelete.value = null;
  }

  // Delete the product from Firestore
  const deleteProduct = async () => {
    try {
      if (productToDelete.value) {
        const productRef = doc(firestore, 'products', productToDelete.value);
        await deleteDoc(productRef); // Delete product from Firestore
        products.value = products.value.filter((product) => product.id !== productToDelete.value);
        closeDeleteModal();
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Set selected product to edit
  const editProduct = (product) => { 
      selectedProductShow.value = !selectedProductShow.value
      
    selectedProduct.value = { ...product }; // Copy the product to prevent mutating the original data
  };
</script>

<style scoped>
  .TableDiv {
    border: 1px solid white;
  }
  .TableDiv td,
  th {
    background-color: black !important;
    color: white;
    border-bottom: 1px solid gray !important;
    border: 10px;
  }

  .pagination-arrow {
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    margin: 0 0.2rem;
  }

  .ProductImage img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }

  .Ratingspan i {
    color: yellow;
  }

  /* Modal Styling */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1050;
  }

  .modal-dialog {
    margin-top: 15%;
    max-width: 500px;
  }

  .modal-content {
    background-color: white;
    border-radius: 8px;
  }

  .modal-footer button {
    margin-left: 10px;
  }
  .modal-title {
    color: black;
  }
  .modal-body p {
    color: black;
  }

  .edit{
      cursor: pointer;
  }
</style>
