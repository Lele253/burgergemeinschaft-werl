<template>
  <v-row class="mb-1 px-0" style="width: 100% ">
    <v-col class="d-flex justify-center">
      <v-btn :class="{ 'btn-active': kommentarAnlegen }" @click="kommentarAnlegen = true; kommentarLoeschen=false;" class="button-links">
        Kommentar anlegen
      </v-btn>
    </v-col>
    <v-col class="d-flex justify-center">

      <v-btn :class="{ 'btn-active': kommentarLoeschen }" @click="kommentarAnlegen = false; kommentarLoeschen=true;" class="button-links">
        Kommentar Löschen
      </v-btn>
    </v-col>
  </v-row>
  <v-card v-if="kommentarAnlegen" class="card">
      <v-card-title class="text-center pb-8">Kommentar Anlegen</v-card-title>
      <v-row style="width: 100%" class="justify-center mx-0">
        <v-col class="mt-n6" cols="5">
          <v-text-field variant="solo" v-model="autor" label="Autor"></v-text-field>
        </v-col>
        <v-col class="mt-n6" cols="5">
          <v-file-input variant="solo" v-model="bild" label="Bild" ></v-file-input>

        </v-col>
        <v-col class="mt-n6" cols="10">
          <v-text-field variant="solo" v-model="titel" label="Titel"></v-text-field>
        </v-col>
        <v-col class="mt-n6" cols="10">
          <v-textarea variant="solo" v-model="text" label="Kommentar"></v-textarea>
        </v-col>
        <v-col class="mt-n6 d-flex justify-center"  cols="10">
          <v-btn class="text-white" style="background-color: #2F53A7">
            Kommentar erstellen
          </v-btn>
        </v-col>
      </v-row>
  </v-card>
  <v-card v-if="kommentarLoeschen" class="card">
    <v-card-title class="text-center pb-8">Kommentar Löschen</v-card-title>
    <v-row style="width: 100%" class=" mx-0">
      <v-col v-for="x in $store.state.kommentare" :key="x.datum" cols="3">
        <v-card  style="height: 200px;width: 100% " class=" px-1">
            <v-card-subtitle class="text-center">{{x.autor}}</v-card-subtitle>
            <p class="text-center" style="height: 53px; overflow: scroll; font-size: 13px">{{x.titel}}</p>
            <p style="height: 44%; font-size: 10px ; overflow: scroll" class="mt-1">{{x.text}}</p>
          <Icon class="text-center" icon="tabler:trash-x-filled" style="position: absolute; bottom: 2px; width: 100%; font-size: 24px; margin-top: 8px; color: red; cursor: pointer"/>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {Icon} from "@iconify/vue/dist/iconify";

export default {
  name: "KommentarComponent",
  components:{
    Icon
  },
  data(){
    return{
      autor:'',
      titel: '',
      bild: null,
      text:'',
      kommentarAnlegen: true,
      kommentarLoeschen: false,
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
}
.btn-active {
  background-color: #2F53A7;
  color: white;
}
</style>
