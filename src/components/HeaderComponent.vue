<template>
  <div>

    <!--    Header Desktop-->

    <v-app-bar v-if="!mobile" class="header" height="125">
      <v-row class=" d-flex justify-center mx-0" style="width: 100%">
        <v-col class="d-flex justify-start" cols="2">
          <v-img :src="background" height="70" style="cursor: pointer" @click="$router.push('/')"/>
        </v-col>

        <v-col cols="2"/>

        <v-col cols="4">
          <h1 class="text-center text-white" @click="$router.push('/')">
            {{ $store.state.routername }}
          </h1>
        </v-col>

        <v-col class="d-flex align-center pr-10 justify-end" cols="4">
          <v-btn class="mr-2" color="white" variant="outlined" @click="$router.push('/mitglied')">Mitglied werden
          </v-btn>
        </v-col>

        <v-col cols="12">
          <v-row class="d-flex mt-n10">
            <v-col>
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn
                      class="ml-13"
                      color="white"
                      v-bind="props"
                  >
                    Team
                  </v-btn>
                </template>
                <v-list style="background-color: #2F53A7; border-radius: 20px; position:relative; left: -10px">
                  <v-list-item class="text-white"
                               @click="$router.push('/rat')">
                    Rat u. Ausschüsse
                  </v-list-item>
                  <v-divider color="black" thickness="3"></v-divider>
                  <v-list-item class="text-white" @click="$router.push('/vorstand')">
                    Vorstand
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
            <v-col class="d-flex justify-center">
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn
                      class=""
                      color="white"
                      v-bind="props"
                  >
                    Wahl 2025
                  </v-btn>
                </template>
                <v-list style="background-color: #2F53A7; border-radius: 20px; position:relative; left: -10px">
                  <v-list-item class="text-white"
                               @click="$router.push('/kreistag')">
                    Kreistag
                  </v-list-item>
                  <v-divider color="black" thickness="3"></v-divider>
                  <v-list-item class="text-white" @click="$router.push('/Stadtrat')">
                    Stadtrat Werl
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
            <v-col>
              <v-btn class="text-center text-white" @click="$router.push('/aktuelles')">
                Aktuelles
              </v-btn>
            </v-col>
            <v-col>
              <v-btn class="text-center text-white"
                     @click="weiterleiten('https://bg-werl.site/positionspapier.pdf')">
                Position
              </v-btn>
            </v-col>
            <v-col>
              <v-btn class="text-center text-white"
                     @click="weiterleiten('https://bg-werl.site/SatzungBGWerl.pdf')">
                Satzung BG Werl
              </v-btn>
            </v-col>
            <v-col>
              <v-btn class="text-center text-white" @click="$router.push('/erfolge')">
                Erfolge
              </v-btn>
            </v-col>
            <v-col>
              <v-btn class="text-center text-white" @click="$router.push('/kommentare')">
                Kommentare
              </v-btn>
            </v-col>
            <v-col>
              <v-btn class="text-center text-white" @click="$router.push('/pressearchiv')">
                Pressearchiv
              </v-btn>
            </v-col>
            <v-col>
              <v-btn v-if="tabletHorizontal" class="text-center text-white"
                     @click="weiterleiten('https://sessionnet.owl-it.de/werl/bi/info.asp')">
                Tagesordnung
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>

    <!--    Header Mobile-->

    <v-app-bar v-if="mobile" class="header" height="60" style="width: 100vw;">
      <v-row class="d-flex align-center justify-center" style="width: 100%">
        <v-col class="d-flex justify-center text-white" cols="3">
          <Icon icon="iconamoon:menu-burger-horizontal-bold" style="font-size: 35px"
                @click="drawer = !drawer"/>
        </v-col>
        <v-col class="d-flex align-center justify-center" cols="6">
          <h3 class="text-center text-white" @click="$router.push('/')">
            {{ this.$store.state.routername }}
          </h3>
        </v-col>
        <v-col cols="3">
          <v-img :src="background" height="40" @click="$router.push('/')"/>
        </v-col>
      </v-row>
    </v-app-bar>

    <!--    Navigation drawer-->

    <v-navigation-drawer
        v-model="drawer"
        style="background-color: #2F53A7"
        temporary
        width="150"
    >
      <v-list>
        <v-list-item v-for="link in links" :key="link" class="text-center text-white links"
                     @click="weiterleiten(link.url)">
          {{ link.titel }}
          <v-divider></v-divider>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {Icon} from "@iconify/vue";

export default {
  components: {Icon},
  data() {
    return {
      background: require('../assets/bg-werl-logo.png'),
      name: "HeaderComponent",

      mobile: false,
      tabletHorizontal: false,
      drawer: false,
      team: ['Vorstand', 'Rat'],
      selected: 'Team',

      links: [
        {titel: 'Home', url: '/'},
        {titel: 'Rat u. Ausschüsse', url: '/rat'},
        {titel: 'Vorstand', url: '/vorstand'},
        {titel: 'Kreistag', url: '/kreistag'},
        {titel: 'Stadtrat Werl', url: '/stadtrat'},
        {titel: 'Aktuelles', url: '/aktuelles'},
        {titel: 'Position', url: 'https://bg-werl.site/positionspapier.pdf'},
        {titel: 'Satzung BG Werl', url: 'https://bg-werl.site/SatzungBGWerl.pdf'},
        {titel: 'Erfolge', url: '/erfolge'},
        {titel: 'Kommentare', url: '/kommentare'},
        {titel: 'Pressearchiv', url: '/pressearchiv'},
        {titel: 'Mitglied werden', url: '/mitglied'},
        {titel: 'Tagesordnung', url: 'https://sessionnet.owl-it.de/werl/bi/info.asp'},
        {titel: 'Impressum', url: '/impressum'},
        {titel: 'Datenschutz', url: '/datenschutz'},


      ]
    };
  },
  mounted() {
    this.checkMobileView();
    window.addEventListener('resize', this.checkMobileView);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobileView);
  },
  methods: {
    checkMobileView() {
      if (window.innerWidth <= 850) {
        this.mobile = true;
        this.$store.state.mobile = true;
      } else {
        this.mobile = false;
        this.$store.state.mobile = false;

      }
      if (window.innerWidth <= 1300) {
        this.tabletHorizontal = false
        this.$store.state.tablet = false
      } else {
        this.tabletHorizontal = true
        this.$store.state.tablet = true
      }
    },
    weiterleiten(url) {
      if (url.startsWith('/')) {
        this.$router.push(url)
      } else {
        window.open(url)
      }
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #2F53A7
}

.links:hover {
  background-color: grey;
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
