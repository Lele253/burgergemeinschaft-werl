<template>
  <div class="header">
    <div>
      <v-row style="height: 70px">
        <v-col cols="4">
          <v-img
              :src="background"
              class="mt-2 justify-start d-flex3"
              height="80"
              style="cursor: pointer"
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

      <div class="d-flex justify-center" style="width: 100vw;">
        <v-row class="mt-9 d-flex justify-center text-white" style=" width: 100%;">
          <v-col v-if="$store.state.routername == 'Unser Team'" class="nav-cols pt-1" cols="1"
                 style="color: white; cursor:pointer;"
                 @click="$router.push('/team')">
            <u>Unser Team</u>
          </v-col>
          <v-col v-else class="nav-cols titel" cols="1"
                 @click="$router.push('/team')">
            <p>Unser Team</p>
          </v-col>

          <v-col v-if="$store.state.routername == 'Aktuelles'" class="nav-cols pt-1" cols="1"
                 style="color: white; cursor:pointer;" @click="$router.push('/aktuelles')">
            <u>Aktuelles</u>
          </v-col>
          <v-col v-else class="nav-cols titel" cols="1"
                 @click="$router.push('/aktuelles')">Aktuelles
          </v-col>

          <v-col class="nav-cols titel" cols="1"
                 @click="weiterleiten('https://leandro-graf.de/positionspapier.pdf')">
            Position
          </v-col>
          <v-col v-if="$store.state.routername == 'Erfolge'" class="nav-cols pt-1" cols="1"
                 @click="$router.push('/erfolge')">
            <u>Erfolge</u>
          </v-col>
          <v-col v-else class="nav-cols titel" cols="1"
                 @click="$router.push('/erfolge')">Erfolge
          </v-col>

          <v-col v-if="$store.state.routername == 'Kommentare'" class="nav-cols pt-1" cols="1"
                 @click="$router.push('/kommentare')">
            <u>Kommentare</u>
          </v-col>
          <v-col v-else class="nav-cols titel" cols="1"
                 @click="$router.push('/kommentare')">
            Kommentare
          </v-col>

          <v-col v-if="$store.state.routername == 'Pressearchiv'" class="nav-cols pt-1" cols="1"
                 @click="$router.push('/pressearchiv')">
            <u>Pressearchiv</u>
          </v-col>
          <v-col v-else class="nav-cols titel" cols="1"
                 @click="$router.push('/pressearchiv')">Pressearchiv
          </v-col>

          <v-col class="nav-cols titel" cols="1"
                 @click="weiterleiten('https://sessionnet.krz.de/werl/bi/info.asp')">
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
  box-shadow: 2px 3px 4px black;
}
.mitglied-button:active {
  color: white;
  background: blue;
  box-shadow: 1px 1px 2px black;
}

.nav-cols {
  min-width: 140px;
}

.titel:hover {
  color: white;
  cursor: pointer;
}
</style>
