<template>
  <div>
    <HeaderComponent/>
    <v-img cover style="height: 79vh" :src="background">
      <div style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100%">
        keafdljliwd

      </div>
    </v-img>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  data() {
    return {
      name: "Erfolge",
      background: require('../assets/erfolge.png')

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
