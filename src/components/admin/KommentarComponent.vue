<template>

  <!--  Menu-->

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

  <!--  Anlegen-->
  <div class="d-flex justify-center">
    <v-card v-if="kommentarAnlegen" class="card d-flex align-center">
      <v-row class="justify-center mx-0 my-0" style="width: 100%; height: 100%">
        <v-col cols="12">
          <h2 class="text-center">
            Kommentar Anlegen
          </h2>
        </v-col>
        <v-col class="mt-n6" cols="5">
          <v-text-field v-model="autor" label="Autor" variant="outlined"/>
        </v-col>
        <v-col class="mt-n6" cols="5">
          <v-file-input v-model="image" accept="image/*" label="Bild" prepend-icon="mdi-camera" variant="outlined"/>
        </v-col>
        <v-col class="mt-n6" cols="10">
          <v-text-field v-model="titel" label="Titel" variant="outlined"/>
        </v-col>
        <v-col class="mt-n6" cols="10">
          <v-textarea v-model="text" label="Kommentar" variant="outlined"/>
        </v-col>
        <v-col class="mt-n6 d-flex justify-center" cols="10">
          <v-btn class="text-white" style="background-color: #2F53A7" @click="erstelleKommentar">
            Kommentar erstellen
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>

  <!--  Löschen-->

  <div class="d-flex justify-center">
    <v-card v-if="kommentarLoeschen" class="card" style="overflow: scroll">
      <v-row class="mx-0" style="width: 100%">
        <v-col class="text-center mt-5" cols="12">
          <h2>Kommentar Löschen</h2>
        </v-col>
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
  </div>
</template>

<script>
import {Icon} from "@iconify/vue/dist/iconify";
import axios from "axios";

export default {
  name: "KommentarComponent",
  components: {
    Icon
  },
  data() {
    return {
      kommentare: [],

      autor: '',
      titel: '',
      image: null,
      text: '',
      kommentarAnlegen: true,
      kommentarLoeschen: false,
    }
  },
  mounted() {
    this.getAllKommentare()
  },
  methods: {
    async getAllKommentare() {
      const response = await axios.get('/kommentare')
      this.$store.state.kommentare = response.data
      this.kommentare = this.$store.state.kommentare
    },
    getDate() {
      let datum = new Date();
      let tag = datum.getDate();
      let monat = datum.getMonth() + 1; // Monate beginnen bei 0, daher +1
      let jahr = datum.getFullYear();
      if (tag < 10) {
        tag = "0" + tag;
      }
      if (monat < 10) {
        monat = "0" + monat;
      }
      let formatiertesDatum = tag + "." + monat + "." + jahr;
      return formatiertesDatum
    },
    async erstelleKommentar() {
      if (this.image != null) {
        try {
          const formdata = new FormData()
          formdata.append('image', this.image[0])
          formdata.append('titel', this.titel)
          formdata.append('text', this.text)
          formdata.append('autor', this.autor)
          formdata.append('datum', this.getDate())

          await axios.post('/kommentare', formdata, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })

          this.$store.state.kommentare.push({
            img: null,
            titel: this.titel,
            text: this.text,
            autor: this.autor,
            datum: this.getDate()
          })

          this.autor = '';
          this.titel = '';
          this.text = '';
          this.kommentar = '';
          this.image = null;
        } catch (e) {
          alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie Bitte den Administrator.")
        }
      } else {
        try {
          const formdata = new FormData()
          formdata.append('titel', this.titel)
          formdata.append('text', this.text)
          formdata.append('autor', this.autor)
          formdata.append('datum', this.getDate())

          await axios.post('/kommentare/withoutImage', formdata, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })

          this.$store.state.kommentare.push({
            img: null,
            titel: this.titel,
            text: this.text,
            autor: this.autor,
            datum: this.getDate()
          })

          this.autor = '';
          this.titel = '';
          this.text = '';
          this.kommentar = '';
          this.image = null;
        } catch (e) {
          alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie Bitte den Administrator.")
        }
      }


    },
    async deleteKommentar(kommentar) {
      try {
        await axios.delete('/kommentare/' + kommentar.id)


        const index = this.kommentare.indexOf(kommentar);
        if (index > -1) {
          this.kommentare.splice(index, 1);
        }
      } catch (e) {
        alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie Bitte den Administrator.")
      }


    },
  }
}
</script>

<style scoped>
.card {
  width: 90%;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.91);
  box-shadow: 4px 6px 8px black;
  border-radius: 20px;
}

.btn-active {
  background-color: #2F53A7;
  color: white;
}
</style>
