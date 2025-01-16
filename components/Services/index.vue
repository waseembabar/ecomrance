<template>
  <div class="container cards mt-5">
    <div class="row">
      <div class="col-md-4 px-lg-5">
        <div class="px-2">
          <div class="text-center DivSec mb-3">
            <div class="IconDiv text-center">
              <i class="bi bi-cart-check-fill" />
            </div>
          </div>
          <h4 class="heading">FREE AND FAST DELIVERY</h4>
          <p class="ms-5 ms-md-0 ms-lg-5">Free delivery for all orders over $140</p>
        </div>
      </div>

      <div class="col-md-4 px-lg-5">
        <div class="px-2">
          <div class="text-center DivSec mb-3">
            <div class="IconDiv text-center">
              <i class="bi bi-headset"></i>
            </div>
          </div>
          <h4 class="heading">24/7 CUSTOMER SERVICE</h4>
          <p class="ms-5 ms-md-0 ms-lg-5">Friendly 24/7 customer support</p>
        </div>
      </div>

      <div class="col-md-4 px-lg-5">
        <div class="px-2">
          <div class="text-center DivSec mb-3">
            <div class="IconDiv text-center">
              <i class="bi bi-shield-fill-check"></i>
            </div>
          </div>
          <h4 class="heading">MONEY BACK GUARANTEE</h4>
          <p class="ms-5 ms-md-0 ms-lg-5">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.cards i {
  font-size: 1.4rem;

  color: white;
}
.cards .IconDiv {
  background-color: black;
  border: 10px solid gray;
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.DivSec {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.heading{
  font-size: 1.2rem;
  text-align: center;
}
</style>
