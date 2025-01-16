<template>
    <div class="container">
        <div class="row">
   
<br>
{{ productDetail }}
            <div class="col-md-1">
                <div class="cardsImage">
                    <div class="cards mb-4">
                        <img src="@/assets/eco/1.png" alt="" srcset="" >
                    </div>
                    <div class="cards mb-4">
                        <img src="@/assets/eco/2.png" alt="" srcset="">
                    </div>
                    <div class="cards mb-4">
                        <img src="@/assets/eco/3.png" alt="" srcset="">
                    </div>
                    <div class="cards mb-4">
                        <img src="@/assets/eco/4.png" alt="" srcset="">
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <img src="@/assets/eco/2.png" class="img-fluid MainImage" alt="">
            </div>
            <div class="col-md-6  " >
          
                <h4 class="heading">  {{ ProductStore.ProductDetail?.title}}</h4>
                
                <div>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                </div>
                <p class="heading">23334Rs</p>
                <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                <div><p>Colours:</p>
                    <div>
                        
                        <input type="radio" id="javascript" name="fav_language" value="black" class="black-radio">
<input type="radio" id="html" name="fav_language" value="green" class="green-radio">

                    </div>
                </div>
            

            </div>
        </div>
    </div>
  </template>
  


  <script setup>
import { ref, onMounted } from 'vue';
 
import { useProductStore } from '~/stores/Product.js'
  
  const ProductStore = useProductStore()
  const ProductDetail = computed(() => ProductStore.ProductDetail);
  onMounted(()=>{
    ProductStore.GetData()
  })
</script>
  <style scoped>
    .cards {
        background-color: rgba(211, 211, 211, 0.37);
        border-radius: 10px;
      
    }
  .cards  img{
    height: 90px;
  width: 90px;
  object-fit: contain;
  }
  .MainImage{
    height: fit-content;
    width: fit-content;
  }
  .heading{
    font-size: 1rem;
    color: white;
  }
  .black-radio {
  color: black;
}

/* Style the green radio button */
.green-radio {
  color: gray;
}
</style>
  