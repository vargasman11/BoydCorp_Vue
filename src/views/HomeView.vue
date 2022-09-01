<template>
  <main>
    <HomeCards/>
    <HomeEmployment />
    <HomeInfo />
    <Sponsors />
  </main>
</template>

<script setup>
// Home Components
import HomeCards from "./home/HomeCards.vue";
import HomeEmployment from "./home/HomeEmployment.vue";
import HomeInfo from "./home/HomeInfo.vue";

// Components
import Sponsors from "../components/Sponsors.vue";
</script>
