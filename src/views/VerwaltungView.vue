<template>
  <div>
    <HeaderComponent/>
    <div class="background d-flex justify-center" style="position: fixed; height: 86vh">
      

      <!--    Anmelde Dialog-->

      <div v-if="user">
        <v-row justify="center">
          <v-dialog
              v-model="dialog"
              persistent
              style="background-color: #2F53A7"
              width="500">
            <v-card>
              <v-card-title class="text-center">
                <span class="text-h5">Einloggen</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row class="d-flex justify-center" style="width: 100%">
                    <v-col
                        cols="12">
                      <v-text-field
                          v-model="username"
                          label="Benutzername"
                          required
                      ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12">
                      <v-text-field
                          v-model="password"
                          label="Passwort"
                          persistent-hint
                          required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <v-alert class="text-center text-h6" text="Bitte einfach auf einloggen drücken" type="warning"/>
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                <v-btn
                    color="white"
                    style="background-color: #2F53A7"
                    variant="text"
                    @click="$router.push('/')">
                  Abbrechen
                </v-btn>
                <v-btn
                    color="white"
                    style="background-color: #2F53A7"
                    variant="text"
                    @click="dialog = false">
                  Einloggen
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </div>

      <!--      Agenda -->

      <div class="d-flex align-center mt-n8" style="height: 100%; width: 20vw">
        <v-row class=" px-0" style="width: 100%">
          <v-col class="d-flex justify-center  col-links" cols="12">
            <v-btn :class="{ 'userAktive': userAktive }"
                   class="button-links"
                   @click="vorstandAktiv= false;  userAktive=userAktive = true; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;ratAktive=false;bewerbungAktive=false">
              User
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-center  col-links" cols="12">
            <v-btn :class="{ 'userAktive': aktuellesAktive }"
                   class="button-links"
                   @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= true;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;ratAktive=false;bewerbungAktive=false">
              Aktuelles
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-center  col-links" cols="12">
            <v-btn :class="{ 'userAktive': erfolgeAktive }"
                   class="button-links"
                   @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=true;kommentareAktive=false;pressearchivAktive=false;ratAktive=false;bewerbungAktive=false">
              Erfolge
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-center  col-links" cols="12">
            <v-btn :class="{ 'userAktive': kommentareAktive }"
                   class="button-links"
                   @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=true;pressearchivAktive=false;ratAktive=false;bewerbungAktive=false">
              Kommentare
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-center  col-links" cols="12">
            <v-btn :class="{ 'userAktive': pressearchivAktive }"
                   class="button-links"
                   @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=true;ratAktive=false;bewerbungAktive=false">
              Pressearchiv
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-center  col-links" cols="12">
            <v-btn :class="{ 'userAktive': ratAktive  }"
                   class="button-links"
                   @click=" vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;ratAktive=true;bewerbungAktive=false">
              Rat
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-center  col-links" cols="12">
            <v-btn :class="{ 'userAktive': vorstandAktiv  }"
                   class="button-links"
                   @click="vorstandAktiv= true; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;ratAktive=false;bewerbungAktive=false">
              Vorstand
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-center  col-links" cols="12">
            <v-btn :class="{ 'userAktive': bewerbungAktive  }"
                   class="button-links"
                   @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;ratAktive=false;bewerbungAktive=true">
              Bewerbung
            </v-btn>
          </v-col>
        </v-row>
      </div>

      <!--      Inhalt Card-->

      <div class="d-flex justify-center align-center mt-n10" style="width: 60vw; height: 100%">
        <v-row style="width: 100%">
          <v-col v-if="userAktive" cols="12">
            <UserComponent/>
          </v-col>
          <v-col v-if="aktuellesAktive" cols="12">
            <AktuellesComponent/>
          </v-col>
          <v-col v-if="erfolgeAktive" cols="12">
            <ErfolgeComponent/>
          </v-col>
          <v-col v-if="pressearchivAktive" cols="12">
            <PressearchivComponent/>
          </v-col>
          <v-col v-if="ratAktive" cols="12">
            <RatComponent/>
          </v-col>
          <v-col v-if="kommentareAktive" cols="12">
            <KommentarComponent/>
          </v-col>
          <v-col v-if="vorstandAktiv" cols="12">
            <VorstandComponent/>
          </v-col>
          <v-col v-if="bewerbungAktive" cols="12">
            <BewerbungComponent/>
          </v-col>
        </v-row>
      </div>

    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import UserComponent from "@/components/admin/UserComponent";
import AktuellesComponent from "@/components/admin/AktuellesComponent";
import ErfolgeComponent from "@/components/admin/ErfolgeComponent";
import BewerbungComponent from "@/components/admin/BewerbungComponent";
import PressearchivComponent from "@/components/admin/PressearchivComponent";
import RatComponent from "@/components/admin/RatComponent";
import VorstandComponent from "@/components/admin/VorstandComponent";
import KommentarComponent from "@/components/admin/KommentarComponent";
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      name: 'Admin',
      background: require('../assets/aktuelles.jpeg'),

      dialog: true,

      username: '',
      password: '',

      userAktive: true,
      aktuellesAktive: false,
      erfolgeAktive: false,
      kommentareAktive: false,
      pressearchivAktive: false,
      ratAktive: false,
      vorstandAktiv: false,
      bewerbungAktive: false,
    }
  },
  components: {
    HeaderComponent,
    UserComponent,
    AktuellesComponent,
    ErfolgeComponent,
    BewerbungComponent,
    PressearchivComponent,
    RatComponent,
    VorstandComponent,
    KommentarComponent
  },
  methods: {},
  created() {
    this.$store.state.routername = this.name
  },
  computed: {
    ...mapGetters(['user']),
  }
}
</script>

<style scoped>
.background {
  background-color: rgba(47, 83, 167, 0.52);
  height: 85vh;
  width: 100vw;
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

.userAktive {
  background-color: #2F53A7;
  color: white;
}
</style>
