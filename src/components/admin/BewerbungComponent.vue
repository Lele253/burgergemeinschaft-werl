<template>

  <div class="d-flex justify-center">
    <v-card class="card ">
      <v-row class="mx-0 mt-1 d-flex justify-center" style="width: 100%">
        <v-col cols="12">
          <h2 class="text-center"> Bewerbungen</h2>
        </v-col>
        <v-col v-for="user in bewerbungen" :key="user.name" cols="4">
          <v-card :class="user.bearbeitet ? 'bearbeitet' : 'nichtBearbeitet'" class="user-card">
            <v-card-text class="pb-0">
              <div class="info-item">
                <span class="info-label">Vorname:</span>
                <span>{{ user.vorname }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Nachname:</span>
                <span>{{ user.nachname }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">E-Mail:</span>
                <span>{{ user.email }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Nummer:</span>
                <span>{{ user.nummer }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">PLZ:</span>
                <span>{{ user.plz }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Ort:</span>
                <span>{{ user.ort }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Adresse:</span>
                <span>{{ user.adresse }}</span>
              </div>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">

              <Icon v-if="user.bearbeitet" class="mr-1" icon="tabler:trash-x-filled"
                    style="font-size: 30px; color: red; cursor: pointer"
                    @click="löschen(user)"/>

              <Icon v-if="!user.bearbeitet" class="ml-1"
                    icon="mdi:eye-outline" style="font-size: 30px; cursor: pointer"
                    @click="user.bearbeitet = true"/>

              <Icon v-if="user.bearbeitet" class="ml-1" icon="mdi:eye-off-outline"
                    style="font-size: 30px;cursor: pointer"
                    @click="user.bearbeitet = false"/>

            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import {Icon} from "@iconify/vue/dist/iconify";

export default {
  name: "BerwerbungComponent",
  components: {
    Icon
  },
  data() {
    return {
      variable: false,

      bewerbungen: ''
    }
  },
  methods: {
    setbewerbungen() {
      this.bewerbungen = this.$store.state.bewerbungen
      console.log('gesetzt')
    },
    löschen(person) {
      const index = this.bewerbungen.indexOf(person);
      if (index > -1) {
        this.bewerbungen.splice(index, 1);
      }
    }
  },
  created() {
    this.setbewerbungen()
  }
}
</script>

<style scoped>
.user-card {
  width: 100%;
  margin: auto;
  box-shadow: 2px 2px 4px black;
}

.info-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.info-label {
  font-weight: bold;
}

.card {
  overflow-y: scroll;
  width: 90%;
  height: 550px;
  background-color: rgba(255, 255, 255, 0.91);
  box-shadow: 4px 6px 8px black;
  border-radius: 20px;
}

.bearbeitet {
  background-color: #51bd51
}

.nichtBearbeitet {
  background-color: white;
}
</style>
