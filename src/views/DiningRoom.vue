<template>
  <div class="img__bg img h-screen bg-cover bg-center">
    <HeaderVideo></HeaderVideo>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import HeaderVideo from "@/components/HeaderVideo.vue";
export default {
  components: {
    Header,
    HeaderVideo,
  },
};
</script>

<style scoped>
.img__bg {
  background: #f5cadb;
  background-image: url("../img/dining-room.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
