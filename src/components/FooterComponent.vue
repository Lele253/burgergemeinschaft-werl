<!--<template>
  <div class="footer d-flex justify-center">
    &lt;!&ndash;    <p class="mr-2 footer-text" @click="$router.push('/links')">Links</p>&ndash;&gt;

    <div class="text-center ml-2">
      <p class="ml-2 footer-text" @click="snackbarLinks = true">Links</p>
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


    <p class="ml-2" style="font-size: 20px;color: white">|</p>
    <p class=" ml-2 footer-text" @click="$router.push('/impressum')">Impressum</p>
    <p class="ml-2" style="color: white; font-size: 20px">|</p>

    <div class="text-center ml-2">
      <p class="footer-text" @click="snackbarKontakt = true">Kontakt</p>
      <v-snackbar v-model="snackbarKontakt" width="80">
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
            <v-btn color="red" variant="text" @click="snackbarKontakt = false">
              Schließen
            </v-btn>
          </v-col>
        </v-row>
      </v-snackbar>
    </div>


  </div>
</template>-->

<template>
  <v-footer app height="55" style="background-color: #2F53A7">
    <v-row class="mt-n3" justify="center" no-gutters>
      <v-col class="text-center text-white mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>BG Werl</strong>
      </v-col>
      <v-col class="d-flex justify-end">
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
      <v-col class="d-flex justify-start">
        <div class="text-center ml-2">
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
