<template>
    <div class="bg-white text-[#233152] h-screen bg-cover bg-center">
      <Header class="bg-pink-700"></Header>
      <div class="container mx-auto px-16 flex justify-center">
        <img class="w-[500px] h-[500px]" src="../img/QR.png" alt="qr">
      </div>
    </div>
    <Footer class="bg-pink-700"></Footer>
  </template>
  
  <script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  export default {
    components: { Header, Footer },
  };
  </script>
  