<script setup>
import HeaderComponent from '@/components/HeaderComponents.vue';
import FooterComponent from '@/components/FooterComponents.vue';
</script>

<template>
  <HeaderComponent @click-cart="showCart = !showCart" />
  <main>
    <RouterView />
  </main>
  <footer-component />
</template>

<style scoped></style>