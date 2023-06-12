<template>
  <div>
    <HeaderComponent/>
    <div class="background">
      <v-row class="px-0" style="height: 100%; width: 100%">
        <v-col cols="3" style="height: 100%">
          <div class="d-flex align-center" style="height: 100%">
            <v-row class=" px-0" style="width: 100%">
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn :class="{ 'userAktive': userAktive }"
                       class="button-links"
                       @click="vorstandAktiv= false;  userAktive=userAktive = true; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;teamAktive=false;bewerbungAktive=false">
                  User
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn :class="{ 'userAktive': aktuellesAktive }"
                       class="button-links"
                       @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= true;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;teamAktive=false;bewerbungAktive=false">
                  Aktuelles
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn :class="{ 'userAktive': erfolgeAktive }"
                       class="button-links"
                       @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=true;kommentareAktive=false;pressearchivAktive=false;teamAktive=false;bewerbungAktive=false">
                  Erfolge
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn :class="{ 'userAktive': kommentareAktive }"
                       class="button-links"
                       @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=true;pressearchivAktive=false;teamAktive=false;bewerbungAktive=false">
                  Kommentare
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn :class="{ 'userAktive': pressearchivAktive }"
                       class="button-links"
                       @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=true;teamAktive=false;bewerbungAktive=false">
                  Pressearchiv
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn :class="{ 'userAktive': teamAktive  }"
                       class="button-links"
                       @click=" vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;teamAktive=true;bewerbungAktive=false">
                  Rat
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn :class="{ 'userAktive': vorstandAktiv  }"
                       class="button-links"
                       @click="vorstandAktiv= true; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;teamAktive=false;bewerbungAktive=false">
                  Vorstand
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn :class="{ 'userAktive': bewerbungAktive  }"
                       class="button-links"
                       @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;teamAktive=false;bewerbungAktive=true">
                  Bewerbung
                </v-btn>
              </v-col>

            </v-row>
          </div>

        </v-col>
        <v-col v-if="userAktive" cols="9">

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
                  <v-btn class="mt-n5" style="background-color: rgba(17,236,17,0.59)" @click="userErstellen">
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
        </v-col>
        <v-col v-if="aktuellesAktive" cols="9">
          <v-row class="mb-1 px-0" style="width: 100% ">
            <v-col class="d-flex justify-center">
              <v-btn class="button-links">
                Beitrag anlegen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">

              <v-btn class="button-links">
                Beitrag Löschen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">

              <v-btn class="button-links">
                Beitrag bearbeiten
              </v-btn>
            </v-col>
          </v-row>
          <v-card class="card">

          </v-card>
        </v-col>
        <v-col v-if="erfolgeAktive" cols="9">
          <v-row class="mb-1 px-0" style="width: 100% ">
            <v-col class="d-flex justify-center">
              <v-btn @click="erfolgAnlegen=true; erfolgBearbeiten=false; erfolgLoeschen= false" :class="{ 'userAnlegen': erfolgAnlegen }" class="button-links">
                Erfolg anlegen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">

              <v-btn @click="erfolgAnlegen=false; erfolgBearbeiten=false; erfolgLoeschen= true" :class="{ 'userAnlegen': erfolgLoeschen }" class="button-links">
                Erfolg Löschen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">

              <v-btn @click="erfolgAnlegen=false; erfolgBearbeiten=true; erfolgLoeschen= false" :class="{ 'userAnlegen': erfolgBearbeiten }" class="button-links">
                Erfolg bearbeiten
              </v-btn>
            </v-col>
          </v-row>
          <v-card v-if="erfolgAnlegen" class="card">
            <v-card-title class="text-center"> Anlegen</v-card-title>
            <v-card-subtitle class="text-center">Wusstest du dass...</v-card-subtitle>
            <v-row style="width: 100%" class="d-flex justify-center">
              <v-col cols="9">
                <v-textarea label="Erfolg eintragen" variant="solo" v-model="erfolgText"></v-textarea>
              </v-col>
              <v-col cols="9">
                <v-file-input
                    v-model="erfolgBild"
                    accept="image/*"
                    label="Wähle ein Bild aus"
                    variant="solo"
                ></v-file-input>
              </v-col>

              <v-col cols="9" class="d-flex justify-center">
                <v-btn @click="erfolgErstellen" class="text-white " style="background-color: #2F53A7" >
                  Erstellen
                </v-btn>
              </v-col>
            </v-row>

          </v-card>
          <v-card v-if="erfolgLoeschen" class="card">
            <v-card-title class="text-center">  Löschen</v-card-title>

          </v-card>
          <v-card v-if="erfolgBearbeiten" class="card">
            <v-card-title class="text-center"> Bearbeiten</v-card-title>
          </v-card>
        </v-col>
        <v-col v-if="pressearchivAktive" cols="9">
          <v-row class="mb-1 px-0" style="width: 100% ">
            <v-col class="d-flex justify-center">
              <v-btn class="button-links">
                Beitrag anlegen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">

              <v-btn class="button-links">
                Beitrag Löschen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">

              <v-btn class="button-links">
                Beitrag bearbeiten
              </v-btn>
            </v-col>
          </v-row>
         <v-card class="card"></v-card>
        </v-col>
        <v-col v-if="teamAktive" cols="9">
          <v-row class="mb-1 px-0" style="width: 100% ">
            <v-col class="d-flex justify-center">
              <v-btn class="button-links">
                Beitrag anlegen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">

              <v-btn class="button-links">
                Beitrag Löschen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">

              <v-btn class="button-links">
                Beitrag bearbeiten
              </v-btn>
            </v-col>
          </v-row>
          <v-card class="card">

          </v-card>
        </v-col>
        <v-col v-if="vorstandAktiv" cols="9">
          <v-row class="mb-1 px-0" style="width: 100% ">
            <v-col class="d-flex justify-center">
              <v-btn class="button-links">
                Beitrag anlegen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">

              <v-btn class="button-links">
                Beitrag Löschen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">

              <v-btn class="button-links">
                Beitrag bearbeiten
              </v-btn>
            </v-col>
          </v-row>
          <v-card class="card">

          </v-card>
        </v-col>
        <v-col v-if="bewerbungAktive" cols="9">
          <v-card class="card">
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
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import {Icon} from '@iconify/vue';

export default {
  data() {
    return {
      name: 'Admin',
      background: require('../assets/aktuelles.jpeg'),
      erfolgText:'...',
      userAktive: false,
      aktuellesAktive: false,
      erfolgeAktive: true,
      kommentareAktive: false,
      pressearchivAktive: false,
      teamAktive: false,
      vorstandAktiv: false,
      bewerbungAktive: false,
      userAnlegen: false,
      userLoeschen: false,
      userBearbeiten: true,
      erfolgAnlegen: true,
      erfolgLoeschen: false,
      erfolgBearbeiten: false,
      profilBild: null,
      erfolgBild:null,
      vorname: '',
      nachname: '',
      email: '',
      passwort: '',
      berechtigung: '',
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
      }, {
        vorname: 'stefan',
        nachname: 'Franke',
        email: 'testmail',
        berechtigung: 'Admin',
        profilBild: null
      }, {vorname: 'stefan', nachname: 'Franke', email: 'testmail', berechtigung: 'Admin', profilBild: null},]
    }
  },
  components: {
    HeaderComponent, Icon
  },
  methods: {
    erfolgErstellen(){

      this.$store.state.erfolge.unshift({
        img: this.erfolgBild,
        text: this.erfolgText,
      })
      console.log(this.$store.state.erfolge)
    },
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
  },
  created() {
    this.$store.state.routername = this.name
  }
}
</script>

<style scoped>
.background {
  background-color: rgba(47, 83, 167, 0.52);
  height: 82vh;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.button-links {
  width: 90%;
  height: 40px;
  border-radius: 13px;
  box-shadow: 2px 4px 6px black;
}

.col-links {
  padding-bottom: 0;
}

.card {
  width: 100%;
  height: 88%;
  box-shadow: 2px 4px 6px black;
  border-radius: 13px;
  overflow-y: auto;
}

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

.userAktive {
  background-color: #2F53A7;
  color: white;
}

.bewerbungsCard {

}

.user-card {
  width: 100%;
  margin: auto;

}

.headline {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.info-label {
  font-weight: bold;
}
</style>
