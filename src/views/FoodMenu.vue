<template>
  <div class="bg-white text-[#233152] h-screen bg-cover bg-center">
    <Header class="bg-pink-700"></Header>
    <div class="container mx-auto px-16">
      <div class="py-8">
        <h1 class="text-4xl mb-4">Меню блюд</h1>
        <div class="flex justify-center">
          <ul class="text-xl">
            <li class="cursor-pointer">8:30 - 9:00 - завтрак</li>
            <li class="cursor-pointer">10:30 - 11:00 - второй завтрак</li>
            <li class="cursor-pointer">12:30 - 13:00 - обед</li>
            <li class="cursor-pointer">15:30 - 16:00 - полдник</li>
            <li class="cursor-pointer">17:00 - 17:30 - ужин</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>

<style></style>
