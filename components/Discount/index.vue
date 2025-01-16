<template>
  <div class="container-fluid BackGrround-image mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="container">
          <div class="row mb-1 mb-md-5 mb-lg-0 pb-3 pb-md-5 pb-lg-0">
            <div class="col-sm-12 col-md-5 offset-md-1 ps-0 ps-md-2 ps-lg-5 pt-3 pt-lg-5">
              <div class="mt-5">
                <h4 class="CardHeading pt-0 pt-lg-5 text-white  ">Categories</h4>
                <h1 class=" text-white pe-5">
                  Enhance Your Music Experience
                </h1>
                <div class="d-flex">
                  <div class="days mx-1 timeingDiv">
                    <h6 class="">Days</h6>
                    <h6 class="">03</h6>
                  </div>
                  :
                  <div class="Hours mx-1 timeingDiv">
                    <h6 class="">Hours</h6>
                    <h6 class="">06</h6>
                  </div>
                  :
                  <div class="Minutes mx-1 timeingDiv">
                    <h6 class="">Minutes</h6>
                    <h6 class="">53</h6>
                  </div>
                  :
                  <div class="Seconds mx-1 timeingDiv">
                    <h6 class="">Seconds</h6>
                    <h6 class="">23</h6>
                  </div>
                </div>

                <button class="Greenbtn mt-4">Buy Now</button>
              </div>
            </div>
            <div class=" col-sm-12  col-md-6 px-5">
              <img src="../../assets/a.png" class="img-fluid" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.BackGrround-image {
  background-color: black;
}
.timeingDiv {
  height: 50px;
  width: 50px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.timeingDiv h6{
    font-size: 0.74rem;
    padding: 0px;
    margin: 0px;
    color: #000;
}
.Greenbtn{
    background-color: green;
    border: 0px;
    color: white;
    padding: 4px 50px 8px 50px;
    border-radius: 10px;
}
</style>
