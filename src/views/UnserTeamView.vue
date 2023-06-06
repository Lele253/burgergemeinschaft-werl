<template>
  <div>
    <HeaderComponent/>
    <div class="background pt-10">
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  name: "UnserTeamView",
  components: {
    HeaderComponent
  }
}
</script>

<style scoped>
.background {
  width: 100vw;
  height: 90vh;
  background-image: url('../assets/VorstandUndRat.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>