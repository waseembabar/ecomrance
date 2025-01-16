<template>
  
    <div class="container mt-5">
      <div class="row gx-5 gy-3">
        <div class="position-relative">
        <h6 class="mainHeading">
          Categories
        </h6>
      </div>
      <div class="d-flex ">
        <h3 class="heading">
          Browse By Category
        </h3>
      </div>
      <div class="col-md-3 position-relative CardsDiv">
 
    <img
      src="https://img.freepik.com/free-photo/cosmetics-wooden-board_23-2147648658.jpg?t=st=1733813098~exp=1733816698~hmac=5e5df0aeac97d1dd9880618221fd6d5f677af6bab88a4155854f6261d102b501&w=900"
      alt=""
      class="img-fluid"
    >
 <h6 class="position-absolute ">Makeup</h6>
</div>
<div class="col-md-3 position-relative CardsDiv">
 
 <img
   src="https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   alt=""
   class="img-fluid"
 >
<h6 class="position-absolute ">Skin care</h6>
</div>
<div class="col-md-3 position-relative CardsDiv">
 
 <img
   src="https://media.istockphoto.com/id/2150251834/photo/natural-anti-age-beauty-products.jpg?s=2048x2048&w=is&k=20&c=LtkGFghk8x8NvnKksDDwKYNSKvvPPQvHjnQ31bQ-BYA="
   alt=""
   class="img-fluid"
 >
<h6 class="position-absolute">Perfume </h6>
</div>


        <div class="text-center">
          <button class="MianBtn mt-3">
            View All Products
          </button>
        </div>
      </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
.CardsDiv {
  position: relative;
 
}
.CardsDiv h6{
  position: absolute;
left:50%;
top: 50%;
transform: translate(-50%, -50%);
color:rgb(2, 2, 2);
font-size:1.2rem;
font-weight: 500; 
background-color: rgba(255, 254, 254, 0.575);
padding: 5px 15px  10px 15px !important;
border-radius:5px;
}
</style>