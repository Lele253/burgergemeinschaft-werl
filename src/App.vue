<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <FooterComponent/>
  </v-app>
</template>

<script>

import FooterComponent from "@/components/FooterComponent";
import axios from "axios";

export default {
  name: 'App',
  components: {
    FooterComponent
  },
  methods: {
    async getAllErfolge() {
      const response = await axios.get('/erfolge')
      this.$store.state.erfolge = response.data
    },
    async getAllKommentare() {
      const response = await axios.get('/kommentare')
      this.$store.state.kommentare = response.data
    },
    async getAllPressearchiv() {
      const response = await axios.get('/pressearchiv')
      this.$store.state.pressearchiv = response.data
    },
    async getAllRat() {
      const response = await axios.get('/rat')
      this.$store.state.rat = response.data
    },
    async getAllVorstand() {
      const response = await axios.get('/vorstand')
      this.$store.state.vorstand = response.data
    },
  },


  data: () => ({
    //
  }),
}
</script>
<style>
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
