<template>

  <div>
    <v-app-bar height="125" style="background-color: #2F53A7">
      <v-row class=" d-flex justify-center mx-0" style="width: 100%">
        <v-col class="d-flex justify-start" cols="2">
          <v-img :src="background" height="70" @click="$router.push('/')"/>
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

        <v-col cols="8">
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
                    Rat
                  </v-list-item>
                  <v-divider color="black" thickness="3"></v-divider>
                  <v-list-item class="text-white" @click="$router.push('/vorstand')">
                    Vorstand
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
                     @click="weiterleiten('https://leandro-graf.de/positionspapier.pdf')">
                Position
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
              <v-btn class="text-center text-white" @click="weiterleiten('https://sessionnet.krz.de/werl/bi/info.asp')">
                Tagesordnung
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>

</template>

<script>
export default {
  data() {
    return {
      background: require('../assets/bg-werl-logo.png'),
      name: "HeaderComponent",

      drawer: true,
      team: ['Vorstand', 'Rat'],
      selected: 'Team',

      views: [
        {
          name: 'test',
          path: 'test',
          icon: 'mdi:eye-off-outline'
        }, {
          name: 'test',
          path: 'test',
          icon: 'mdi:eye-off-outline'
        }, {
          name: 'test',
          path: 'test',
          icon: 'mdi:eye-off-outline'
        }, {
          name: 'test',
          path: 'test',
          icon: 'mdi:eye-off-outline'
        }, {
          name: 'test',
          path: 'test',
          icon: 'mdi:eye-off-outline'
        }, {
          name: 'test',
          path: 'test',
          icon: 'mdi:eye-off-outline'
        }, {
          name: 'test',
          path: 'test',
          icon: 'mdi:eye-off-outline'
        }, {
          name: 'test',
          path: 'test',
          icon: 'mdi:eye-off-outline'
        }, {
          name: 'test',
          path: 'test',
          icon: 'mdi:eye-off-outline'
        }, {
          name: 'test',
          path: 'test',
          icon: 'mdi:eye-off-outline'
        },
      ]
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
