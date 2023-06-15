<template>
  <v-card class="card">
    <v-card-title class="text-center"> Bewerbungen</v-card-title>
    <v-row class="mx-0 mt-1 d-flex justify-center" style="width: 100%">
      <v-col v-for="user in bewerbungenArray" :key="user.name" cols="4">
        <v-card class="user-card">
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
              <span class="info-label">Straße:</span>
              <span>{{ user.straße }}</span>
            </div>
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <Icon icon="tabler:trash-x-filled" style="font-size: 30px; color: red; cursor: pointer"/>

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {Icon} from "@iconify/vue/dist/iconify";

export default {
  name: "BerwerbungComponent",
  components:{
    Icon
  },
  data(){
    return{
      bewerbungenArray: [{
        vorname: 'stefan',
        nachname: 'franke',
        email: 'testmail@web.de',
        nummer: '01705574750',
        plz: '44229',
        ort: 'Dortmund',
        straße: 'weiße Taube 12'
      }, {
        vorname: 'stefan',
        nachname: 'franke',
        email: 'testmail@web.de',
        nummer: '01705574750',
        plz: '44229',
        ort: 'Dortmund',
        straße: 'weiße Taube 12'
      }, {
        vorname: 'stefan',
        nachname: 'franke',
        email: 'testmail@web.de',
        nummer: '01705574750',
        plz: '44229',
        ort: 'Dortmund',
        straße: 'weiße Taube 12'
      }, {
        vorname: 'stefan',
        nachname: 'franke',
        email: 'testmail@web.de',
        nummer: '01705574750',
        plz: '44229',
        ort: 'Dortmund',
        straße: 'weiße Taube 12'
      }],
    }
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
  width: 100%;
  height: 88%;
  box-shadow: 2px 4px 6px black;
  border-radius: 13px;
  overflow-y: auto;
}
</style>
