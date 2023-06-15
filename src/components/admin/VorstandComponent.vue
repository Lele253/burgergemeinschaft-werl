<template>
  <v-row class="mb-1 px-0" style="width: 100% ">
    <v-col class="d-flex justify-center">
      <v-btn @click="vorstandAnlegen=true; vorstandLoeschen=false" :class="{ 'btn-active': vorstandAnlegen }" class="button-links">
        Vorstandsmitglied anlegen
      </v-btn>
    </v-col>
    <v-col class="d-flex justify-center">

      <v-btn @click="vorstandAnlegen=false; vorstandLoeschen=true" :class="{ 'btn-active': vorstandLoeschen }" class="button-links">
        Vorstandsmitglied Löschen
      </v-btn>
    </v-col>
  </v-row>
  <v-card v-if="vorstandAnlegen" class="card" style="height: 500px">
    <v-card-title class="text-center pb-8">Vorstandsmitglied Anlegen</v-card-title>

    <v-row class="justify-center">
      <v-col class="my-n2 mt-5" cols="5">
        <v-text-field v-model="name" label="Name" variant="solo">

        </v-text-field>
      </v-col>
      <v-col class="my-n2 mt-5" cols="5">
        <v-text-field v-model="position" label="Position" variant="solo"></v-text-field>
      </v-col>
      <v-col class="mb-n2" cols="10">
        <v-file-input v-model="bild" label="Bild" variant="solo"></v-file-input>
      </v-col>

      <v-col class="d-flex justify-center mb-n5"  cols="10">
        <v-btn style="background-color: #2F53A7" class="text-white"> Vorstandsmitglied erstellen</v-btn>
      </v-col>
    </v-row>
  </v-card>
  <v-card v-if="vorstandLoeschen" class="card" style="height: 500px">
    <v-card-title class="text-center pb-8">Ratsmitglied Löschen</v-card-title>
    <v-row style="width: 100%; " class="justify-center mx-0">
      <v-col style="border-radius: 8px;border: black solid 2px" class="mt-2 d-flex justify-space-between" cols="9" v-for="x in $store.state.vorstand" :key="x">
        <p>{{x.name}}</p>
        <p>{{x.position}}</p>
        <Icon icon="tabler:trash-x-filled" style="font-size: 30px; color: red; cursor: pointer"/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {Icon} from "@iconify/vue/dist/iconify";

export default {
  name: "VorstandComponent",
  components:{
    Icon
  },
  data(){
    return{
      vorstandAnlegen: true,
      vorstandLoeschen:false,
      name: '',
      position: '',
      bild: null,

    }
  }
}
</script>

<style scoped>
.card {
  width: 100%;
  height: 88%;
  box-shadow: 2px 4px 6px black;
  border-radius: 13px;
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.91);

}
.btn-active {
  background-color: #2F53A7;
  color: white;
}
</style>
