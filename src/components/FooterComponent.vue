<template>
  <div class="footer d-flex justify-center">
    <p class="mr-2" style="font-size: 20px; cursor:pointer;" @click="$router.push('/links')">Links</p>
    <p style="font-size: 20px">|</p>
    <!--    <p class="ml-2" style="font-size: 20px; cursor:pointer;">Kontakt</p>-->

    <div class="text-center ml-2">
      <p style="font-size: 20px; cursor:pointer;" @click="snackbar = true">Kontakt</p>

      <v-snackbar v-model="snackbar" width="80">
        <v-row class="ml-2" style="width: 100%">
          <v-col class="" cols="12">
            <h3 class="text-center">Kontakt</h3>
          </v-col>
          <v-col class="text-center" cols="12">
            <p>Bitte senden Sie Ihre Mail an:</p>
            <a href="mailto:info@bg-werl.de" style="color: white">info@bg-werl.de</a>
          </v-col>
          <v-col class="text-center" cols="12">
            <p>Oder senden Sie einen Brief an:</p>
            <p>Jens Schmigowski</p>
            <p>Kupuzinerring 30</p>
            <p>59457 Werl</p>
            <p style="cursor: pointer" @click="weiterleiten('tel:+4929228820732')"><u>Tel: 02922-8820732</u></p>
          </v-col>
          <v-col class="text-center" cols="12">
            <v-btn color="red" variant="text" @click="snackbar = false">
              Close
            </v-btn>
          </v-col>
        </v-row>
      </v-snackbar>
    </div>


  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  data: () => ({
    snackbar: true,
    text: `Hello, I'm a snackbar`,
  }),
  methods: {
    weiterleiten(url) {
      window.open(url, '_parent')
    }
  }
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 34px;
  background-color: rgba(47, 83, 167, 0.56);
}
</style>
