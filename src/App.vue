<template>
  <v-app>
    <v-main style="background-color: rgba(47, 83, 167, 0.56)">
      <router-view/>
    </v-main>
    <FooterComponent/>
  </v-app>
</template>

<script>

import FooterComponent from "@/components/FooterComponent";

export default {
  name: 'App',
  components: {
    FooterComponent
  },


  data: () => ({
    //
  }),
}
</script>
