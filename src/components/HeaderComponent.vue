<template>
  <div>
    <div class="header">
      <v-row style="height: 70px">
        <v-col cols="4">
          <v-img
              :src="background"
              class="mt-2 justify-start d-flex3"
              height="80"
          >
          </v-img>
        </v-col>
        <v-col cols="4">
          <h1 class="text-white mt-5">Bürgergemeinschaft Werl</h1>
        </v-col>
        <v-col cols="4">
          <v-btn class="mt-10 mitglied-button">
            Mitglied werden
          </v-btn>
        </v-col>
      </v-row>

      <div class="d-flex justify-center" style="width: 100%;">
        <v-row class="mt-9 text-white" style="width: 50%;">
          <v-col cols="1">
            <p class="">
              Unser Team
            </p>
          </v-col>
          <v-col cols="1">Aktuelles</v-col>
          <v-col cols="1">BG-Position</v-col>
          <v-col cols="1">BG-Erfolge</v-col>
          <v-col cols="1">Kommentare</v-col>
          <v-col cols="1">Pressearchiv</v-col>
          <v-col cols="1">Tagesordung</v-col>

        </v-row>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      background: require('../assets/bg-werl-logo.png')
    }
  }
}
</script>

<style scoped>
.header {
  height: 150px;
  background: #2F53A7;
}

.mitglied-button {
  color: white;
  background: blue;
}
</style>