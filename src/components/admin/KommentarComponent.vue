<template>
  <v-row class="mb-1 px-0" style="width: 100% ">
    <v-col class="d-flex justify-end">
      <v-btn :class="{ 'btn-active': kommentarAnlegen }" class="button-links"
             @click="kommentarAnlegen = true; kommentarLoeschen=false;">
        Kommentar anlegen
      </v-btn>
    </v-col>
    <v-col class="d-flex justify-start">

      <v-btn :class="{ 'btn-active': kommentarLoeschen }" class="button-links"
             @click="kommentarAnlegen = false; kommentarLoeschen=true;">
        Kommentar Löschen
      </v-btn>
    </v-col>
  </v-row>
  <v-card v-if="kommentarAnlegen" class="card">
    <v-card-title class="text-center pb-8">Kommentar Anlegen</v-card-title>
    <v-row class="justify-center mx-0" style="width: 100%">
      <v-col class="mt-n6" cols="5">
        <v-text-field v-model="autor" label="Autor" variant="solo"></v-text-field>
      </v-col>
      <v-col class="mt-n6" cols="5">
        <v-file-input v-model="bild" label="Bild" variant="solo"></v-file-input>

      </v-col>
      <v-col class="mt-n6" cols="10">
        <v-text-field v-model="titel" label="Titel" variant="solo"></v-text-field>
      </v-col>
      <v-col class="mt-n6" cols="10">
        <v-textarea v-model="text" label="Kommentar" variant="solo"></v-textarea>
      </v-col>
      <v-col class="mt-n6 d-flex justify-center" cols="10">
        <v-btn class="text-white" style="background-color: #2F53A7" @click="erstelleKommentar">
          Kommentar erstellen
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
  <v-card v-if="kommentarLoeschen" class="card">
    <v-card-title class="text-center pb-8">Kommentar Löschen</v-card-title>
    <v-row class=" mx-0" style="width: 100%">
      <v-col v-for="kommentar in kommentare" :key="kommentar" cols="3">
        <v-card class=" px-1" style="height: 200px;width: 100% ">
          <v-card-subtitle class="text-center">{{ kommentar.autor }}</v-card-subtitle>
          <p class="text-center" style="height: 53px; overflow: scroll; font-size: 13px">{{ kommentar.titel }}</p>
          <p class="mt-1" style="height: 44%; font-size: 10px ; overflow: scroll">{{ kommentar.text }}</p>
          <Icon class="text-center" icon="tabler:trash-x-filled"
                style="position: absolute; bottom: 2px; width: 100%; font-size: 24px; margin-top: 8px; color: red; cursor: pointer"
                @click="deleteKommentar(kommentar)"/>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {Icon} from "@iconify/vue/dist/iconify";

export default {
  name: "KommentarComponent",
  components: {
    Icon
  },
  data() {
    return {
      kommentare: this.$store.state.kommentare.sort((a, b) => b.id - a.id),

      autor: '',
      titel: '',
      bild: null,
      text: '',
      kommentarAnlegen: true,
      kommentarLoeschen: false,
    }
  },
  methods: {
    getDate() {
      var datum = new Date();
      var tag = datum.getDate();
      var monat = datum.getMonth() + 1; // Monate beginnen bei 0, daher +1
      var jahr = datum.getFullYear();
      if (tag < 10) {
        tag = "0" + tag;
      }
      if (monat < 10) {
        monat = "0" + monat;
      }
      var formatiertesDatum = tag + "." + monat + "." + jahr;
      return formatiertesDatum
    },
    erstelleKommentar() {
      let id = (this.$store.state.kommentare.length + 1)
      this.$store.state.kommentare.push({
        id: id,
        img: null,
        titel: this.titel,
        text: this.text,
        autor: this.autor,
        datum: this.getDate()
      })

      this.autor = '';
      this.titel = '';
      this.kommentar = '';
      this.bild = '';
    },
    deleteKommentar(kommentar) {
      const index = this.kommentare.indexOf(kommentar);
      if (index > -1) {
        this.kommentare.splice(index, 1);
      }
    },
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
