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

export default {
  name: 'App',
  components: {
    FooterComponent
  },
  methods: {},


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
