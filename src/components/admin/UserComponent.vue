<template>
  <div>

    <!--     Menu-->

    <v-row class="mb-1 px-0" style="width: 100% ">
      <v-col class="d-flex justify-end">
        <v-btn :class="{ 'userAnlegen': userAnlegen }"
               class="button-links" @click="userAnlegen= true;userLoeschen=false; userBearbeiten=false">
          User anlegen
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-start">

        <v-btn :class="{ 'userLoeschen': userLoeschen }"
               class="button-links" @click="userAnlegen= false;userLoeschen=true; userBearbeiten=false">
          User Löschen
        </v-btn>
      </v-col>
    </v-row>

    <!--    Inhalt-->

    <div class="d-flex justify-center">
      <v-card class="card" style="height: 500px">

        <!--      Anlegen-->

        <div v-if="userAnlegen">
          <v-card-item class="text-center pb-10 mt-5"><h2>User Anlegen</h2></v-card-item>
          <v-row class="d-flex justify-center ml-0" style="width: 100%">
            <v-col cols="5">
              <v-text-field v-model="vorname" label="Vorname" variant="outlined"/>
            </v-col>
            <v-col cols="5">
              <v-text-field v-model="nachname" label="Nachname" variant="outlined"/>
            </v-col>
            <v-col cols="5">
              <v-text-field v-model="email" label="Email" variant="outlined"/>
            </v-col>
            <v-col cols="5">
              <v-text-field v-model="passwort" label="Passwort" variant="outlined"/>
            </v-col>
            <v-col cols="5">
              <v-select v-model="berechtigung" :items="berechtigungenItems" label="Berechtigung" variant="outlined"/>
            </v-col>
            <v-col class="d-flex justify-center" cols="12">
              <v-btn class="text-white" style="background-color: #2F53A7" @click="userErstellen">
                Erstellen
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <!--        Löschen-->

        <div v-if="userLoeschen">
          <v-card-item class="text-center pb-10 mt-5"><h2>User Anlegen</h2></v-card-item>
          <v-row class="mx-auto" style="width: 95%">
            <v-col cols="3">Vorname</v-col>
            <v-col cols="3">Nachname</v-col>
            <v-col cols="3">Email</v-col>
            <v-col cols="2">Berechtigung</v-col>
          </v-row>
          <v-row v-for="user in userArray" :key="user"
                 class="mx-auto my-1" style="border: black solid 2px;border-radius: 10px; width: 95%">
            <v-col cols="3">
              {{ user.vorname }}
            </v-col>
            <v-col cols="3">
              {{ user.nachname }}
            </v-col>
            <v-col cols="3">
              {{ user.email }}
            </v-col>
            <v-col cols="2">
              {{ user.berechtigung }}
            </v-col>
            <v-col class="py-0 pr-1 d-flex align-center justify-end">
              <Icon v-if="user.status != 'Admin'" icon="tabler:trash-x-filled"
                    style="font-size: 30px; color: red; cursor: pointer"
                    @click="löschen(user)"/>
            </v-col>
          </v-row>
        </div>

      </v-card>
    </div>
  </div>
</template>

<script>
import {Icon} from "@iconify/vue/dist/iconify";
import axios from "axios";

export default {
  name: "UserComponent",
  components: {
    Icon
  },
  data() {
    return {
      userAnlegen: true,
      userLoeschen: false,
      berechtigung: '',
      vorname: '',
      nachname: '',
      email: '',
      passwort: '',
      berechtigungenItems: ['Admin', 'Verfasser'],
      userArray: []
    }
  },
  mounted() {
    this.getAllUser()
  },
  methods: {
    async userErstellen() {
      await axios.post('/regist', {
        password: this.passwort,
        email: this.email,
        status: this.berechtigung,
        vorname: this.vorname,
        nachname: this.nachname,
      })

      this.userArray.push({
        password: this.passwort,
        email: this.email,
        status: this.berechtigung,
        vorname: this.vorname,
        nachname: this.nachname,
      })

      this.vorname = ''
      this.nachname = ''
      this.email = ''
      this.passwort = ''
      this.berechtigung = ''

      await this.getAllUser()
    },
    async getAllUser() {
      const response = await axios.get('/user/all')
      this.userArray = response.data
    },
    async löschen(user) {
      try {
        const index = this.userArray.indexOf(user);
        this.userArray.splice(index, 1);

        await axios.delete('/user/all/' + user.nutzerId,)
      } catch (e) {
        alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie Bitte den Administrator.")
      }
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
  width: 90%;
  height: 100%;
  max-height: 500px;
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.91);
  box-shadow: 4px 6px 8px black;
  border-radius: 20px;
}


</style>
