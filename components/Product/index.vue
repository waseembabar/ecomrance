<template>
  <div class="container">
    <div class="row mt-4">
      <div class="position-relative">
        <h5 class="mainHeading">Today’s</h5>
      </div>
      <div class="d-flex">
        <h1 class="heading">Flash Sales</h1>

        <div class="d-flex TimingDiv ms-5">
          <div class="days mx-2">
            <p>Days</p>
            <h6>03</h6>
          </div>

          <div class="Hours mx-2">
            <p>Hours</p>
            <h6>06</h6>
          </div>

          <div class="Minutes mx-2">
            <p>Minutes</p>
            <h6>53</h6>
          </div>

          <div class="Seconds mx-2">
            <p>Seconds</p>
            <h6>23</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="row gx-2 gy-3">

      <div v-for="(product, index) in products" :key="index" class="col-md-3 Card" >
      <div class="card" @click="gotoNextPage(product?.id)">
        <img :src="product.image" alt="" class="img-fluid" />
        <div class="card-body">
          <h5 class="card-title CardHeading mb-0 pb-0">{{ product.title }}</h5>
          <p class="pb-0 mb-0 pt-0">{{ product.price }} <span>{{ product.originalPrice }}</span></p>
          <div class="d-flex">
            <i v-for="star in product.rating" :key="star" class="bi bi-star-fill"></i>
          </div>
        </div>
      </div>
    </div> 
    </div>
    <div class="text-center mt-3">
      <button class="MianBtn"
      @click="viewAllProduct">All Flash Sales</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from '#app'; // Correct import for Nuxt
// Import useRouter for navigation

const router = useRouter(); // Initialize the router

// Define an array of products
const products = ref([
  {
    id:"3242",
    image: "https://img.freepik.com/premium-photo/blank-space-text-with-cosmetics-surrounding-color-background_756748-3548.jpg?w=900",
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    originalPrice: "$160",
    rating: [1, 2, 3, 4] // Array for stars (4 stars)
  },
  {
     id:"32",
    image: "https://img.freepik.com/psd-gratuit/rouge-levres-carte_23-2147690666.jpg?t=st=1733811706~exp=1733815306~hmac=0987392262fc2c3abfb144b484dfaf31b85964f2025acb1fd072e6c0b4a6685d&w=900",
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    originalPrice: "$160",
    rating: [1, 2, 3, 4] // 4 stars
  },
  {
    id:"2",
    image: "https://img.freepik.com/psd-premium/boite-maquillage-qui-dit-maquillage-elle_382352-19083.jpg?w=900",
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    originalPrice: "$160",
    rating: [1, 2, 3, 4] // 4 stars
  },
  {
    id:"3",
    image: "https://img.freepik.com/vecteurs-libre/collection-produits-cosmetologie-base_1284-36548.jpg?t=st=1733811668~exp=1733815268~hmac=4ee5c0777c5b8842b124f4f2edbd2b3ef07e16620a9d02ef00c04da18b164023&w=900",
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    originalPrice: "$160",
    rating: [1, 2, 3, 4] // 4 stars
  }
]);

// Method to handle the click event
function gotoNextPage(id) {
  console.log(id)
  router.push(`/${id}`); // Use the dynamic `id` to navigate to the correct product page
}

function viewAllProduct(){
    router.push(`/allroducts`);
  }
</script>

<style scoped>
/* img{
    height: 300px;
    width: 300px;
} */
.TimingDiv h6 {
  font-size: 1.1rem;
  font-weight: 900;
}
.TimingDiv p {
  padding: 0px;
  margin: 0px;
  font-size: 0.7rem;
}
.days {
  position: relative;
}
.days::after {
  content: ":";
  font-size: 2rem;
  position: absolute;
  font-size: 18px;
  top: -7px;
  left: 26px; /* Add some space between the number and the colon */
}
.House {
  position: relative;
}
.days::after {
  content: ":";
  font-size: 2rem;
  position: absolute;
  font-size: 18px;
  top: -7px;
  left: 26px; /* Add some space between the number and the colon */
}

.Minutes {
  position: relative;
}
.Minutes::after {
  content: ":";
  position: absolute;
  font-size: 20px;
  top: -9px;
  left: 42px; /* Add some space between the number and the colon */
}
.Hours {
  position: relative;
}
.Hours::after {
  content: ":";
  font-size: 2rem;
  position: absolute;
  font-size: 18px;
  top: -7px;
  left: 32px; /* Add some space between the number and the colon */
}
.Card_img {
  background-color: orange;
}
.Card{
  cursor: pointer;
}
</style>
