<template>
  <v-footer app height="40" style="background-color: #2F53A7; width: 100vw">
    <v-row justify="center" no-gutters>
      <!--      <v-col class="text-center text-white mt-4" cols="12">
              {{ new Date().getFullYear() }} — <strong>BG Werl</strong>
            </v-col>-->
      <v-col class="d-flex justify-center" cols="4" lg="1" md="4" sm="4">
        <div class="text-center ml-2">
          <h3 class="footer-text text-white" style="cursor:pointer;" @click="snackbarKontakt = true">Kontakt</h3>
          <v-snackbar v-model="snackbarKontakt" width="80">
            <v-row class="ml-2" style="width: 100%">
              <v-col class="" cols="12">
                <h3 class="text-center">Kontakt</h3>
              </v-col>
              <v-col class="text-center" cols="12">
                <p>Bitte senden Sie Ihre Mail an:</p>
                <a class="mt-2" href="mailto:info@bg-werl.de" style="color: white">info@bg-werl.de</a>
              </v-col>
              <v-col class="text-center" cols="12">
                <p>Oder senden Sie einen Brief an:</p>
                <p>Jens Schmigowski</p>
                <p>Kupuzinerring 30</p>
                <p>59457 Werl</p>
                <p style="cursor: pointer" @click="weiterleiten('tel:+4929228820732')"><u>Tel: 02922-8820732</u></p>
              </v-col>
              <v-col class="text-center" cols="12">
                <v-btn color="red" variant="text" @click="snackbarKontakt = false">
                  Schließen
                </v-btn>
              </v-col>
            </v-row>
          </v-snackbar>
        </div>
      </v-col>

      <v-col class="hidden-sm-and-down" cols="4" lg="1" md="4" sm="4">
        <h3 class="text-center text-white" style="cursor: pointer" @click="$router.push('/verwaltung')">Verwaltung</h3>
      </v-col>

      <v-col class="d-flex justify-center" cols="4" lg="1" md="4" sm="4">
        <div class="text-center">
          <h3 class="ml-2 footer-text text-white" style="cursor:pointer;" @click="snackbarLinks = true">Links</h3>
          <v-snackbar v-model="snackbarLinks" width="80">
            <h3 class="text-center">Links</h3>
            <p class="text-center mt-2" style="cursor: pointer"
               @click="weiterleiten('https://www.brandwatch.com/de/wp-content/themes/brandwatch/src/core/endpoints/resize.php?image=uploads/brandwatch/troll.jpg&width=469')">
              <u>Stadt Werl</u>
            </p>
            <p class="text-center mt-2" style="cursor: pointer"
               @click="weiterleiten('https://www.brandwatch.com/de/wp-content/themes/brandwatch/src/core/endpoints/resize.php?image=uploads/brandwatch/troll.jpg&width=469')">
              <u>Mariengymnasium</u></p>
            <p class="text-center mt-2" style="cursor: pointer"
               @click="weiterleiten('https://www.brandwatch.com/de/wp-content/themes/brandwatch/src/core/endpoints/resize.php?image=uploads/brandwatch/troll.jpg&width=469')">
              <u>Sekundarschule</u></p>
            <p class="text-center mt-2" style="cursor: pointer"
               @click="weiterleiten('https://www.brandwatch.com/de/wp-content/themes/brandwatch/src/core/endpoints/resize.php?image=uploads/brandwatch/troll.jpg&width=469')">
              <u>Ursilinengymnasium</u>
            </p>
            <p class="text-center mt-2" style="cursor: pointer"
               @click="weiterleiten('https://www.brandwatch.com/de/wp-content/themes/brandwatch/src/core/endpoints/resize.php?image=uploads/brandwatch/troll.jpg&width=469')">
              <u>Ursilinenrealschule</u>
            </p>
            <p class="text-center mt-2" style="cursor: pointer"
               @click="weiterleiten('https://www.brandwatch.com/de/wp-content/themes/brandwatch/src/core/endpoints/resize.php?image=uploads/brandwatch/troll.jpg&width=469')">
              <u>Marienschule
                Büderich</u></p>
            <p class="text-center mt-2" style="cursor: pointer"
               @click="weiterleiten('https://www.brandwatch.com/de/wp-content/themes/brandwatch/src/core/endpoints/resize.php?image=uploads/brandwatch/troll.jpg&width=469')">
              <u>Norbertschule</u></p>
            <p class="text-center mt-2" style="cursor: pointer"
               @click="weiterleiten('https://www.brandwatch.com/de/wp-content/themes/brandwatch/src/core/endpoints/resize.php?image=uploads/brandwatch/troll.jpg&width=469')">
              <u>Walburgisschule </u></p>
            <div class="d-flex justify-center mt-2">
              <v-btn color="red" variant="text" @click="snackbarLinks = false">
                Schließen
              </v-btn>
            </div>
          </v-snackbar>
        </div>
      </v-col>


    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data: () => ({
    snackbarKontakt: false,
    snackbarLinks: false,
  }),
  methods: {
    weiterleiten(url) {
      window.open(url, '_parent')
    }
  }
}
</script>

<style scoped>
/*.footer-text {
  font-size: 20px;
  cursor: pointer;
  color: white;
}*/

.footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 34px;
  background-color: rgba(47, 83, 167, 0.56);
}
</style>
