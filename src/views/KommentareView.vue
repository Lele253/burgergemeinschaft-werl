<template>
  <div>
    <HeaderComponent/>
    <div class="background pt-10">

    </div>
  </div>


</template>

<script>

import HeaderComponent from "@/components/HeaderComponent";

export default ({
  data() {
    return {
      bildRechts: require('../assets/vorstandneu.jpeg'),
      name: 'Kommentare',
    }
  },
  components: {
    HeaderComponent
  },
  created() {
    this.$store.state.routername = this.name
  }
});
</script>

<style>

.background {
  width: 100vw;
  height: 90vh;
  background-image: url('../assets/werl.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

</style>
