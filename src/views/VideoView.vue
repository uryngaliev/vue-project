<template>
  <div class="img__bg img h-screen bg-cover bg-center">
    <HeaderVideo class="bg-orange-400"></HeaderVideo>
  </div>
  <Footer></Footer>
</template>

<script>
import HeaderVideo from "@/components/HeaderVideo.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
    HeaderVideo
  },
};
</script>

<style scoped>
.img__bg {
  background: #f5cadb;
}
</style>
