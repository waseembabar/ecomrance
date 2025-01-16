<template>
  <section class="SectionDiv">
    <div class="container py-5">
      <div class="row py-5">
        <div class="col-md-2">
          <div class="logo">
            <h4 class="heading">Exclusive</h4>
            <h6>Subscribe</h6>
            <div class="formDiv position-relative">
              <p class="mb-1">Get 10% off your first order</p>
              <input type="text" placeholder="Enter Email" class="w-100" />
              <i class="bi bi-arrow-right-circle"></i>
            </div>
          </div>
        </div>
        <div class="col-md-3 Support">
          <div class="logo">
            <h4 class="heading">Support</h4>
            <p class="pt-2">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>
        <div class="col-md-2">
          <div class="logo">
            <h4 class="heading">Account</h4>
            <ul class="pt-2">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
          <div class="logo">
            <h4 class="heading">Quick Link</h4>
            <ul class="pt-2">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
            <h1 class="heading">Download App</h1>
            <p class="pt-2">Save $3 with App New User Only</p>
            <div class="container-fluid">
<div class="row">
    <div class="col-4">
        <img src="@/assets/QrCode.png" alt="" srcset="" class="img-fluid w-100">
    </div>
    <div class="col-6">
        <img src="@/assets/GooglePlay.png" alt="" srcset="" class="img-fluid">
        <img src="@/assets/AppStore.png" alt="" srcset="" class="img-fluid">
        
       </div>
</div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.heading {
  font-size: 1.1rem;
}
.SectionDiv {
box-shadow: 0px 1px 8px rgba(128, 128, 128, 0.411);
  color: white !important;
}
.formDiv i {
  position: absolute;
  right: 10px;
  top: 35px;
  z-index: 10;
  color: black;
}
.formDiv input {
  height: 40px;
  border-radius: 4px;
  border: none;
}
ul {
  padding-left: 0px;
}
ul li {
  list-style-type: none;
  margin-left: 0px;
  font-size: 0.85rem;
}
.Support p {
  font-size: 0.85rem;
  padding-bottom: 0px;
  margin-bottom: 4px;
}
</style>
