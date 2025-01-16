<template>
  <div class="container">
    <div class="position-relative">
      <h5 clas="mainheading">Featured</h5>
    </div>
    <div class="d-flex">
      <h1>New Arrival</h1>
    </div>
    <div class="container">
      <div class="row gy-4  ">
        <div class="col-md-6">
          <div class="BackGrround-image1 ps-2 py-md-5">
            <div
              class="py-5 d-flex flex-column w-50 justify-content-start align-items-start"
            >
              <h5 class="heading mt-md-5">PlayStation 5</h5>
              <p class="paragrapgh pe-md-5">
                <span class="">
                  <span class="pe-md-5 me-md-5">
                    Black and White version of the PS5 coming out on sale.</span
                  >
                </span>
              </p>
              <button class="btn MianBtn">Shop Now</button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="container-fluid">
            <div class="row gy-4">
              <div class="col-md-12 p-0">
                <div class="py-5 BackGrround-image2">
                  <h1 class="heading mt-5">Women’s Collections</h1>
                  <p>Featured woman collections that give you another vibe.</p>
                  <button class="MianBtn">Shop Now</button>
                </div>
              </div>
              <div class="col-md-12 p-0">
                <div class="container-fluid m-0 p-0">
                  <div class="row gy-3">
                    <div class="col-md-6">
                      <div class="BackGrround-image3 py-5 py-md-4">
                        <h1 class="heading">Speakers</h1>
                        <p class="mb-0">Amazon wireless speakers</p>
                        <button class="MianBtn ShopBtn mb-3">Shop Now</button>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="BackGrround-image4 py-5 py-md-3">
                        <h1 class="heading">Perfume</h1>
                        <p>that give you another vibe.</p>
                        <button class="MianBtn ShopBtn mb-3">Shop Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Services  -->
</template>

<script setup></script>

<style scoped>
.BackGrround-image1 {
  background-image: url("@/assets/eco/1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(61, 61, 61, 0.5);
  background-size: contain;
  border-radius: 10px;
}

.BackGrround-image2 {
  background-image: url("@/assets/eco/2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(61, 61, 61, 0.5);
  background-size: cover;
  border-radius: 10px;
}

.BackGrround-image3 {
  background-image: url("@/assets/eco/3.png");
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.295);
  background-size: cover;
  border-radius: 10px;
}

.BackGrround-image4 {
  background-image: url("@/assets/eco/4.png");
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.295);
  background-size: cover;
  border-radius: 10px;
}
.heading {
  background-color: #e0e0e0ab;
  width: -moz-fit-content;
  width: max-content;
  padding: 3px 8px 8px 10px;
  border-radius: 10px;
  color: rgb(27, 27, 27);
}
.paragrapgh {
  color: black;
  font-size: 1.4rem;
  font-weight: 600;
}
.ShopBtn{
  width: 130px;
}
</style>
