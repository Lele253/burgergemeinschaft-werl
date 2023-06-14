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
                       @click="vorstandAktiv= false;  userAktive=userAktive = true; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;ratAktive=false;bewerbungAktive=false">
                  User
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn :class="{ 'userAktive': aktuellesAktive }"
                       class="button-links"
                       @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= true;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;ratAktive=false;bewerbungAktive=false">
                  Aktuelles
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn :class="{ 'userAktive': erfolgeAktive }"
                       class="button-links"
                       @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=true;kommentareAktive=false;pressearchivAktive=false;ratAktive=false;bewerbungAktive=false">
                  Erfolge
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn :class="{ 'userAktive': kommentareAktive }"
                       class="button-links"
                       @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=true;pressearchivAktive=false;ratAktive=false;bewerbungAktive=false">
                  Kommentare
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn :class="{ 'userAktive': pressearchivAktive }"
                       class="button-links"
                       @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=true;ratAktive=false;bewerbungAktive=false">
                  Pressearchiv
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn :class="{ 'userAktive': ratAktive  }"
                       class="button-links"
                       @click=" vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;ratAktive=true;bewerbungAktive=false">
                  Rat
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn :class="{ 'userAktive': vorstandAktiv  }"
                       class="button-links"
                       @click="vorstandAktiv= true; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;ratAktive=false;bewerbungAktive=false">
                  Vorstand
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center  col-links" cols="11">
                <v-btn :class="{ 'userAktive': bewerbungAktive  }"
                       class="button-links"
                       @click="vorstandAktiv= false; userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;ratAktive=false;bewerbungAktive=true">
                  Bewerbung
                </v-btn>
              </v-col>
            </v-row>
          </div>

        </v-col>
        <v-col v-if="userAktive" cols="9">
          <UserComponent></UserComponent>
        </v-col>
        <v-col v-if="aktuellesAktive" cols="9">
          <AktuellesComponent></AktuellesComponent>
        </v-col>
        <v-col v-if="erfolgeAktive" cols="9">
          <ErfolgeComponent></ErfolgeComponent>
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
        <v-col v-if="ratAktive" cols="9">
          <v-row class="mb-1 px-0" style="width: 100% ">
            <v-col class="d-flex justify-center">
              <v-btn  class="button-links">
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
          <BewerbungComponent></BewerbungComponent>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import UserComponent from "@/components/admin/UserComponent";
import AktuellesComponent from "@/components/admin/AktuellesComponent";
import ErfolgeComponent from "@/components/admin/ErfolgeComponent";
import BewerbungComponent from "@/components/admin/BewerbungComponent";

export default {
  data() {
    return {
      name: 'Admin',
      background: require('../assets/aktuelles.jpeg'),
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
    HeaderComponent,UserComponent,AktuellesComponent,ErfolgeComponent,BewerbungComponent
  },
  methods: {
  },
  created() {
    this.$store.state.routername = this.name
  }
}
</script>

<style scoped>
.background {
  background-color: rgba(47, 83, 167, 0.52);
  height: 85vh;
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
.userAktive {
  background-color: #2F53A7;
  color: white;
}
</style>
