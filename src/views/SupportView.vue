<template>
  <div class="bg-white text-[#233152] h-screen bg-cover bg-center">
    <Header class="bg-pink-700"></Header>
    <div class="container mx-auto px-16">
      <div class="py-8">
        <h1 class="text-4xl mb-4">Помощь</h1>
        <ul class="">
          <li class="text-xl">
            <a href="mailto:z.kinessova@aues.kz">E-mail: z.kinessova@aues.kz</a>
            <ul class="sub-menu__list">
              <li>
                <a href="" class="sub-menu__link"></a>
              </li>
            </ul>
          </li>
          <li class="text-xl">
            <a href="tel:+77024084551">Телефон: +7 702 408 45 51</a>
          </li>
          <li class="text-xl">
            Директор детского сада "Balabaqsha" Кинессова Жансая Мансуровна
          </li>
        </ul>
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
