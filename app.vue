<template>
  <div >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { initializeApp } from "firebase/app";
import { useHead } from '@vueuse/head'

// Dynamically add Bootstrap CDN to the <head> tag
useHead({
  link: [
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css' }
  ],
  script: [
    { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js', body: true }
  ]
})

</script>