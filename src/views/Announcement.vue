<template>
  <div class="bg-white text-[#233152] h-screen bg-cover bg-center">
    <Header class="bg-pink-700"></Header>
    <div class="container mx-auto px-16">
      <h1 class="text-4xl mb-8 py-8">Обьявление</h1>
      <div class="text-center bg-pink-700 text-white">
        <p class="text-2xl py-4">
          Дорогие родители приглашаем вас на утренник посвященному ко дню
          Независимости! Вас с нетерпением будет ждать ваши любимые дети группы
          "Ласточка"!
        </p>
      </div>
      <web-component-embed id="a5myLz" app_slug="countdown-timer"></web-component-embed>
      <Counter />
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
