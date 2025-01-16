<template>
 

    <nav class="navbar navbar-expand-md px-5 navbar-light">
  <div class="container-fluid">
    <NuxtLink to="/" class="navbar-brand router-link-active">Navbar</NuxtLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link " aria-current="page">Home</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/signUp" class="nav-link">Sign Up</NuxtLink>
        </li>
      
       
      </ul>
    <div class="d-flex justify-content-between align-items-center">
        <form class="d-flex formDIv">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <i class="bi bi-search"></i>
      </form>
     <div class="ms-2">
        <i class="bi bi-heart "></i>
     </div>
    <div class="ms-2"> <i class="bi bi-cart "></i></div>
    </div>
    </div>
  </div>
</nav>
  </template>
  <style scoped>
.formDIv{
    position: relative;
}
.formDIv i {
    position: absolute;
    right: 15px;
    top: 7px;
}
ul li a {
  color:white;
   
   
 
}
.router-link-active{
color: orange;
 
 
  
}
</style>