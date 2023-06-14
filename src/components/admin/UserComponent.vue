<template>
  <div>
    <v-row class="mb-1 px-0" style="width: 100% ">
      <v-col class="d-flex justify-center">
        <v-btn :class="{ 'userAnlegen': userAnlegen }"
               class="button-links" @click="userAnlegen= true;userLoeschen=false; userBearbeiten=false">
          User anlegen
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-center">

        <v-btn :class="{ 'userLoeschen': userLoeschen }"
               class="button-links" @click="userAnlegen= false;userLoeschen=true; userBearbeiten=false">
          User Löschen
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-center">

        <v-btn :class="{ 'userBearbeiten': userBearbeiten }"
               class="button-links" @click="userAnlegen= false;userLoeschen=false; userBearbeiten=true">
          User bearbeiten
        </v-btn>
      </v-col>
    </v-row>
    <v-card class="card" style="max-height: 500px">
      <div v-if="userAnlegen">
        <v-card-title class="text-center pb-8">User Anlegen</v-card-title>
        <v-row class=" mx-0" style="width: 100%">
          <v-col cols="6">
            <v-text-field v-model="vorname" label="Vorname" variant="solo">

            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="nachname" label="Nachname" variant="solo">

            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="email" label="Email" variant="solo">

            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="passwort" label="Passwort" type="password" variant="solo">

            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-select v-model="berechtigung" :items="berechtigungenItems" label="Berechtigung" variant="solo">

            </v-select>
          </v-col>
          <v-col cols="6">
            <v-file-input v-model="profilBild" label="Bild" variant="solo">

            </v-file-input>
          </v-col>
          <v-col class="d-flex justify-center" cols="12">
            <v-btn class="mt-n5 text-white" style="background-color: #2F53A7" @click="userErstellen">
              Erstellen
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <div v-if="userLoeschen">
        <v-card-title class="text-center pb-8">User Löschen</v-card-title>
        <v-row class="mx-auto" style="width: 95%">
          <v-col cols="3">Vorname</v-col>
          <v-col cols="3">Nachname</v-col>
          <v-col cols="3">Email</v-col>
          <v-col cols="2">Berechtigung</v-col>
        </v-row>
        <v-row v-for="x in userArray" :key="x"
               class="mx-auto my-1" style="border: black solid 2px;border-radius: 10px; width: 95%">
          <v-col cols="3">
            {{ x.vorname }}
          </v-col>
          <v-col cols="3">
            {{ x.nachname }}
          </v-col>
          <v-col cols="3">
            {{ x.email }}
          </v-col>
          <v-col cols="2">
            {{ x.berechtigung }}
          </v-col>
          <v-col class="py-0 pr-1 d-flex align-center justify-end">
            <Icon icon="tabler:trash-x-filled" style="font-size: 30px; color: red; cursor: pointer"/>
          </v-col>
        </v-row>
      </div>
      <div v-if="userBearbeiten">
        <v-card-title class="text-center pb-8">User Löschen</v-card-title>
        <v-row class="mx-auto" style="width: 95%">
          <v-col cols="3">Vorname</v-col>
          <v-col cols="3">Nachname</v-col>
          <v-col cols="3">Email</v-col>
          <v-col cols="2">Berechtigung</v-col>
        </v-row>
        <v-row v-for="x in userArray" :key="x" class="mx-auto my-1" style=" width: 95%">
          <v-col class="pa-0" cols="3">
            <v-text-field v-model="x.vorname" variant="solo">

            </v-text-field>

          </v-col>
          <v-col class="pa-0" cols="3">
            <v-text-field v-model="x.nachname" variant="solo">

            </v-text-field>
          </v-col>
          <v-col class="pa-0" cols="3">
            <v-text-field v-model="x.email" variant="solo">

            </v-text-field>
          </v-col>
          <v-col class="pa-0" cols="2">
            <v-select v-model="x.berechtigung" :items="berechtigungenItems" variant="solo">

            </v-select>

          </v-col>
          <v-col class="py-0 pr-1 d-flex align-center justify-end">
            <Icon icon="fluent-mdl2:accept-medium" style="font-size: 30px; color: green; cursor: pointer"/>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
import {Icon} from "@iconify/vue/dist/iconify";

export default {
  name: "UserComponent",
  components:{
    Icon
  },
  data(){
    return{
      userAnlegen: false,
      userLoeschen: false,
      userBearbeiten: true,
      berechtigung: '',
      vorname: '',
      nachname: '',
      email: '',
      passwort: '',
      profilBild: null,
      berechtigungenItems: ['Admin', 'Verfasser', 'Keine'],
      userArray: [{
        vorname: 'stefan',
        nachname: 'Franke',
        email: 'testmail',
        berechtigung: 'Admin',
        profilBild: null
      }, {
        vorname: 'stefan',
        nachname: 'Franke',
        email: 'testmail',
        berechtigung: 'Admin',
        profilBild: null
      }, {
        vorname: 'stefan',
        nachname: 'Franke',
        email: 'testmail',
        berechtigung: 'Admin',
        profilBild: null
      }, ]

    }
  },
  methods:{
    userErstellen() {
      this.userArray.push({
        vorname: this.vorname,
        nachname: this.nachname,
        email: this.email,
        berechtigung: this.berechtigung,
        profilBild: this.profilBild
      })

      this.profilBild = null
      this.vorname = ''
      this.nachname = ''
      this.email = ''
      this.passwort = ''
      this.berechtigung = ''
    }

  }
}
</script>

<style scoped>
.userLoeschen {
  background-color: #2F53A7;
  color: white;
}

.userAnlegen {
  background-color: #2F53A7;
  color: white;
}

.userBearbeiten {
  background-color: #2F53A7;
  color: white;
}
.card {
  width: 100%;
  height: 88%;
  box-shadow: 2px 4px 6px black;
  border-radius: 13px;
  overflow-y: auto;
}


</style>
