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
  data() {
    return {
      name: "Erfolge",
    }
  },
  components: {
    HeaderComponent
  },
  created() {
    this.$store.state.routername = this.name
  }
}
</script>

<style scoped>
.background {
  width: 100vw;
  height: 90vh;
  background-image: url('../assets/erfolge.png');
  background-repeat: no-repeat;
}
</style>