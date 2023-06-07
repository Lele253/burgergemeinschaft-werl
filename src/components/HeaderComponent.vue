<template>
  <div class="header">
    <div>
      <v-row style="height: 70px">
        <v-col cols="4">
          <v-img
              :src="background"
              class="mt-2 justify-start d-flex3"
              height="80"
              @click="$router.push('/')"
          >
          </v-img>
        </v-col>
        <v-col cols="4">
          <h1 class="text-center text-white mt-5">{{ $store.state.routername }}</h1>
        </v-col>
        <v-col class="d-flex justify-center " cols="4">
          <v-btn class="mr-3 mt-10 mitglied-button" @click="$router.push('/mitglied')">
            Mitglied werden
          </v-btn>
        </v-col>
      </v-row>

      <div class="d-flex justify-center" style="width: 100%;">
        <v-row class="mt-9 d-flex justify-center text-white" style=" width: 100%;">
          <v-col class="nav-cols" cols="1" @click="$router.push('/team')">Unser Team</v-col>
          <v-col class="nav-cols" cols="1" @click="$router.push('/aktuelles')">Aktuelles</v-col>
          <v-col class="nav-cols" cols="1" @click="weiterleiten('https://leandro-graf.de/positionspapier.pdf')">
            BG-Position
          </v-col>
          <v-col class="nav-cols" cols="1" @click="$router.push('/erfolge')">BG-Erfolge</v-col>
          <v-col class="nav-cols" cols="1" @click="$router.push('/kommentare')">Kommentare</v-col>
          <v-col class="nav-cols" cols="1" @click="$router.push('/pressearchiv')">Pressearchiv</v-col>
          <v-col class="nav-cols" cols="1" @click="weiterleiten('https://sessionnet.krz.de/werl/bi/info.asp')">
            Tagesordung
          </v-col>

        </v-row>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      background: require('../assets/bg-werl-logo.png'),
      name: "HeaderComponent",
    }
  },
  methods: {
    weiterleiten(url) {
      window.open(url)
    }
  }
}
</script>

<style scoped>
.header {
  position: relative;
  z-index: 999;
  height: 150px;
  background: #2F53A7;
  box-shadow: 0px 3px 6px black;
}

.mitglied-button {
  color: white;
  background: blue;
}

.nav-cols {
  min-width: 140px;

}
</style>
