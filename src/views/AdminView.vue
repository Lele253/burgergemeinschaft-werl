<template>
  <div >
    <HeaderComponent/>
    <div class="background">
      <v-row style="width: 100%" class="px-0">
        <v-col cols="3" >
          <v-row tyle="width: 100%" class="px-0">
            <v-col class="d-flex justify-center  col-links" cols="11">
              <v-btn @click="userAktive=userAktive = true; aktuellesAktive= false;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;teamAktive=false;bewerbungAktive=false" class="button-links">
                User
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center  col-links" cols="11">
              <v-btn @click="userAktive=userAktive = false; aktuellesAktive= true;erfolgeAktive=false;kommentareAktive=false;pressearchivAktive=false;teamAktive=false;bewerbungAktive=false" class="button-links">
                Aktuelles
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center  col-links" cols="11">
              <v-btn @click="userAktive=userAktive = false; aktuellesAktive= false;erfolgeAktive=true;kommentareAktive=false;pressearchivAktive=false;teamAktive=false;bewerbungAktive=false" class="button-links">
                Erfolge
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center  col-links" cols="11">
              <v-btn class="button-links">
                Kommentare
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center  col-links" cols="11">
              <v-btn class="button-links">
                Pressearchiv
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center  col-links" cols="11">
              <v-btn class="button-links">
                Team
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center  col-links" cols="11">
              <v-btn class="button-links">
                Bewerbung
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-if="userAktive" cols="9">
          <v-row style="width: 100% " class="mb-1 px-0">
            <v-col class="d-flex justify-center">
              <v-btn class="button-links">
                User anlegen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">

              <v-btn class="button-links">
                User Löschen
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">

              <v-btn class="button-links">
                User bearbeiten
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

export default {
  data() {
    return {
      name: 'Admin',
      background: require('../assets/aktuelles.jpeg'),
      userAktive: false,
      aktuellesAktive: false,
      erfolgeAktive:false,
      kommentareAktive: false,
      pressearchivAktive: false,
      teamAktive: false,
      bewerbungAktive:false
    }
  },
  components: {
    HeaderComponent
  },
  created() {
    this.$store.state.routername = this.name
  }
}
</script>

<style scoped>
.background{
background-color: rgba(47, 83, 167, 0.52);
height: 85vh;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
}
.button-links{
  width: 90%;
  height: 50px;
  border-radius: 13px;
  box-shadow: 2px 4px 6px black;
}
.col-links{
  padding-bottom: 0px;
}
.card{
  width: 100%;
  height: 100%;
  box-shadow: 2px 4px 6px black;
  border-radius: 13px;
}
</style>
