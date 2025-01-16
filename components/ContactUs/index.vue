<template>
   <div class="container">
    <div class="row gx-4 gy-4 py-md-2 py-lg-5 ">
        <div class="col-md-3  p-4 order-2 order-md-1 order-lg-1 card">
            <div class="d-flex align-items-center ">
                <div class="iconDiv">
                    <i class="bi bi-telephone"></i>
                </div>
                <h6 class="mb-0 ms-3">Call To Us</h6>
            </div>
            <div class="mt-4">
                <p class="mb-2">We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
            </div>
            <hr>

            <div class="d-flex align-items-center ">
                <div class="iconDiv">
                    <i class="bi bi-envelope"></i>
                </div>
                <h6 class="mb-0 ms-3">Write To US</h6>
            </div>
            <div class="mt-4">
                <p class="mb-2">We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
            </div>
        </div>
        <div  class="col-md-9  order-1 order-md-2 order-lg-2 ">
            <div class="container-fluid card">
                <div class="row ">
                    <div class="col-12 col-md-6 col-lg-4 p-2 m-0"> 
                        <input type="text" placeholder="Your Name *" class="w-100"> </div>
                    <div class="col-12 col-md-6 col-lg-4 p-2 m-0"> 
                        <input type="text" placeholder="Your Email *" class="w-100">
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 p-2 m-0">
                        <input type="text" placeholder="Your Phone *" class="w-100">
                    </div>
                    <div class="col-12 mt-4">
                        <textarea id="w3review" name="w3review" rows="8" cols="50"  class="w-100"></textarea> 
                    </div>
                 <div class="btnDiv text-center mb-1 mt-3 pb-3">
                    <button class="btn MianBtn  ">
                        Send Massage
                    </button>
                 </div>
                </div>
            </div>
        </div>
    </div>
   </div>
</template>

<script setup>

</script>

<style  scoped>
.iconDiv{
    background-color: #DB4444;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: white;
}
.card{
    border: none;
    box-shadow: 0px 0px 5px rgba(128, 128, 128, 0.288);

}
.card input{
    height: 35px;
    border: none;
    box-shadow: 0px 0px 5px rgba(128, 128, 128, 0.288);
    border-radius: 6px;
    padding-left: 10px;
    background-color: rgba(128, 128, 128, 0.24);
    outline: none;
    color: rgb(97, 97, 97);
}
.card textarea{
    offset: none;
    border: none;
    box-shadow: 0px 0px 5px rgba(128, 128, 128, 0.288);
    border-radius: 6px;
    padding-left: 10px;
    background-color: rgba(128, 128, 128, 0.24);
    outline: none;
    color: rgb(97, 97, 97);
}
 
.btnDiv{
    display: flex;
   align-items: center;
   justify-content: end;
}
</style>