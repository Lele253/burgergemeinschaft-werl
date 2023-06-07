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
      name: "Tagesordnung",
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

</style>