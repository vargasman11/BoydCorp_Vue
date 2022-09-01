<template>
  <Nav/>
  <Carousel/>
  <RouterView/>
  <Footer/>
</template>
<script setup>

import Nav from "./components/Nav.vue";
import Carousel from "./components/Carousel.vue";
import Footer from "./components/Footer.vue";

</script>

<style src="./assets/tailwind.css">
</style>
