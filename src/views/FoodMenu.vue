<template>
  <div class="bg-white text-[#233152] h-screen bg-cover bg-center">
    <Header class="bg-pink-700"></Header>
    <div class="container mx-auto px-16">
      <div class="py-8">
        <h1 class="text-4xl mb-4">Меню блюд</h1>
        <div class="flex justify-center">
          <ul class="text-2xl w-96">
            <li @click="open = !open" class="cursor-pointer">
              8:30 - 9:00 - завтрак
              <ul v-if="open" class="">
                <li class="py-2 px-2 bg-pink-700 text-white w-80">
                  Завтрак: каша манная с мармеладом, батон с маслом и сыром, чай
                  с молоком.
                </li>
              </ul>
            </li>
            <li @click="opentwo = !opentwo" class="cursor-pointer">
              10:30 - 11:00 - второй завтрак
              <ul v-if="opentwo">
                <li class="py-2 px-2 bg-pink-700 text-white w-84">
                  Второй завтрак: сок персиковый
                </li>
              </ul>
            </li>
            <li @click="openthree = !openthree" class="cursor-pointer">
              12:30 - 13:00 - обед
              <ul v-if="openthree">
                <li class="py-2 px-2 bg-pink-700 text-white w-84">
                  Обед: салат «Летний» (св. огурец и помидор с зеленым луком),
                  суп гороховый на м/б, мясной рулет с яйцом, макароны, компот
                  из вишни, хлеб пшеничный.
                </li>
              </ul>
            </li>
            <li @click="openfour = !openfour" class="cursor-pointer">
              15:30 - 16:00 - полдник
              <ul v-if="openfour">
                <li class="py-2 px-2 bg-pink-700 text-white w-80">
                  Полдник: молоко, вафли.
                </li>
              </ul>
            </li>
            <li @click="openfive = !openfive" class="cursor-pointer">
              17:00 - 17:30 - ужин
              <ul v-if="openfive">
                <li class="py-2 px-2 bg-pink-700 text-white w-80">
                  Ужин: овощное рагу, салат «Королевский» (свёкла с лимоном), чай с сахаром, хлеб ржаной.
                </li>
              </ul>
            </li>
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

  data() {
    return {
      open: false,
      opentwo: false,
      openthree: false,
      openfour: false,
      openfive: false,
    };
  },
};
</script>
