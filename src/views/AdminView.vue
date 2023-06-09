<template>
  <div >
    <HeaderComponent/>
    <div class="background">
      <v-row  style="height: 100%; width: 100%" class="px-0">
        <v-col style="height: 100%" cols="3" >
          <div class="d-flex align-center" style="height: 100%">
            <v-row style="width: 100%" class=" px-0">
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn @click="vorstandAktiv= false;  userAktive=userAktive = true; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;teamAktive=false;bewerbungAktive=false" class="button-links">
                  User
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= true;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;teamAktive=false;bewerbungAktive=false" class="button-links">
                  Aktuelles
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=true;kommentareAktive=false;pressearchivAktive=false;teamAktive=false;bewerbungAktive=false" class="button-links">
                  Erfolge
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=true;pressearchivAktive=false;teamAktive=false;bewerbungAktive=false" class="button-links">
                  Kommentare
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=true;teamAktive=false;bewerbungAktive=false" class="button-links">
                  Pressearchiv
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;teamAktive=true;bewerbungAktive=false" class="button-links">
                  Rat
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn @click="vorstandAktiv= true; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;teamAktive=false;bewerbungAktive=false" class="button-links">
                  Vorstand
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;teamAktive=false;bewerbungAktive=true" class="button-links">
                  Bewerbung
                </v-btn>
              </v-col>

            </v-row>
          </div>

        </v-col>
        <v-col v-if="userAktive" cols="9">
          <v-row style="width: 100% " class="mb-1 px-0">
            <v-col class="d-flex justify-center">
              <v-btn :class="{ 'userAnlegen': userAnlegen }" @click="userAnlegen= true;userLoeschen=false; userBearbeiten=false" class="button-links">
                User anlegen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">

              <v-btn :class="{ 'userLoeschen': userLoeschen }" @click="userAnlegen= false;userLoeschen=true; userBearbeiten=false" class="button-links">
                User Löschen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">

              <v-btn :class="{ 'userBearbeiten': userBearbeiten }" @click="userAnlegen= false;userLoeschen=false; userBearbeiten=true" class="button-links">
                User bearbeiten
              </v-btn>
            </v-col>
          </v-row>



          <v-card class="card" style="max-height: 420px">
                <div v-if="userAnlegen">
                  <v-card-title class="text-center pb-8" >User Anlegen</v-card-title>
                  <v-row class=" mx-0" style="width: 100%">
                    <v-col cols="6">
                        <v-text-field v-model="vorname" variant="solo" label="Vorname">

                        </v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field v-model="nachname" variant="solo" label="Nachname">

                      </v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field v-model="email" variant="solo" label="Email">

                      </v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field v-model="passwort" variant="solo" type="password" label="Passwort">

                      </v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-select :items="berechtigungenItems" v-model="berechtigung"  variant="solo" label="Berechtigung">

                      </v-select>
                    </v-col>
                    <v-col cols="6">
                      <v-file-input v-model="profilBild" variant="solo"  label="Bild">

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
                  <v-card-title class="text-center pb-8" >User Löschen</v-card-title>
                  <v-row style="width: 95%" class="mx-auto">
                    <v-col cols="3">Vorname</v-col>
                    <v-col cols="3">Nachname</v-col>
                    <v-col cols="3">Email</v-col>
                    <v-col cols="2">Berechtigung</v-col>
                  </v-row>
                  <v-row class="mx-auto my-1" style="border: black solid 2px;border-radius: 10px; width: 95%" v-for="x in userArray" :key="x" >
                    <v-col cols="3">
                      {{x.vorname}}
                    </v-col>
                    <v-col cols="3">
                      {{x.nachname}}
                    </v-col>
                    <v-col cols="3">
                      {{x.email}}
                    </v-col>
                    <v-col cols="2">
                      {{x.berechtigung}}
                    </v-col>
                    <v-col class="py-0 pr-1 d-flex align-center justify-end" >
                      <Icon style="font-size: 30px; color: red; cursor: pointer" icon="tabler:trash-x-filled" />
                    </v-col>
                  </v-row>
                </div>
          </v-card>




        </v-col>
        <v-col v-if="aktuellesAktive" cols="9">
          <v-row style="width: 100% " class="mb-1 px-0">
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
          <v-row style="width: 100% " class="mb-1 px-0">
            <v-col class="d-flex justify-center">
              <v-btn class="button-links">
                Erfolg anlegen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">

              <v-btn class="button-links">
                Erfolg Löschen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">

              <v-btn class="button-links">
                Erfolg bearbeiten
              </v-btn>
            </v-col>
          </v-row>
          <v-card class="card">

          </v-card>
        </v-col>
        <v-col v-if="pressearchivAktive" cols="9">
          <v-row style="width: 100% " class="mb-1 px-0">
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
        <v-col v-if="teamAktive" cols="9">
          <v-row style="width: 100% " class="mb-1 px-0">
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
          <v-row style="width: 100% " class="mb-1 px-0">
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
          <v-row style="width: 100% " class="mb-1 px-0">
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



      </v-row>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import { Icon } from '@iconify/vue';
export default {
  data() {
    return {
      name: 'Admin',
      background: require('../assets/aktuelles.jpeg'),

      userAktive: true,
      aktuellesAktive: false,
      erfolgeAktive:false,
      kommentareAktive: false,
      pressearchivAktive: false,
      teamAktive: false,
      vorstandAktiv: false,
      bewerbungAktive:false,
      userAnlegen:true,
      userLoeschen:false,
      userBearbeiten:false,
      profilBild: null,
      vorname:'',
      nachname:'',
      email:'',
      passwort:'',
      berechtigung:'',
      berechtigungenItems: ['Admin', 'Verfasser', 'Keine'],
      userArray:[{vorname:'stefan', nachname:'Franke', email:'testmail',berechtigung:'Admin',profilBild: null},{vorname:'stefan', nachname:'Franke', email:'testmail',berechtigung:'Admin',profilBild: null},{vorname:'stefan', nachname:'Franke', email:'testmail',berechtigung:'Admin',profilBild: null},{vorname:'stefan', nachname:'Franke', email:'testmail',berechtigung:'Admin',profilBild: null},{vorname:'stefan', nachname:'Franke', email:'testmail',berechtigung:'Admin',profilBild: null},{vorname:'stefan', nachname:'Franke', email:'testmail',berechtigung:'Admin',profilBild: null},{vorname:'stefan', nachname:'Franke', email:'testmail',berechtigung:'Admin',profilBild: null},{vorname:'stefan', nachname:'Franke', email:'testmail',berechtigung:'Admin',profilBild: null},{vorname:'stefan', nachname:'Franke', email:'testmail',berechtigung:'Admin',profilBild: null},{vorname:'stefan', nachname:'Franke', email:'testmail',berechtigung:'Admin',profilBild: null},{vorname:'stefan', nachname:'Franke', email:'testmail',berechtigung:'Admin',profilBild: null},{vorname:'stefan', nachname:'Franke', email:'testmail',berechtigung:'Admin',profilBild: null},{vorname:'stefan', nachname:'Franke', email:'testmail',berechtigung:'Admin',profilBild: null},]
    }
  },
  components: {
    HeaderComponent,Icon
  },
  methods:{
    userErstellen(){
      this.userArray.push({vorname: this.vorname, nachname:this.nachname, email:this.email, berechtigung:this.berechtigung,profilBild: this.profilBild})
      console.log(this.UserArray)
      this.profilBild= null,
          this.vorname='',
          this.nachname='',
          this.email='',
          this.passwort='',
          this.berechtigung=''
    }
  },
  created() {
    this.$store.state.routername = this.name
  }
}
</script>

<style scoped>
.background{
  background-color: rgba(47, 83, 167, 0.52);
  height: 82vh;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
.button-links{
  width: 90%;
  height: 40px;
  border-radius: 13px;
  box-shadow: 2px 4px 6px black;
}
.col-links{
  padding-bottom: 0px;
}
.card{
  width: 100%;
  height: 80%;
  box-shadow: 2px 4px 6px black;
  border-radius: 13px;
  overflow-y: auto;
}
.userLoeschen{
background-color: #2F53A7;
  color: white;
}
.userAnlegen{
  background-color: #2F53A7;
  color: white;
}
.userBearbeiten{
  background-color: #2F53A7;
  color: white;
}
</style>
