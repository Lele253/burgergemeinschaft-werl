<template>
  <div>
    <v-row class="mb-1 px-0" style="width: 100% ">
      <v-col class="d-flex justify-end">
        <v-btn :class="{ 'activeComponent': anlegen }" class="button-links" @click="anlegen = true; löschen = false">
          Beitrag anlegen
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-start">
        <v-btn :class="{ 'activeComponent': löschen }" class="button-links" @click="reloadBeiträge">
          Beitrag Löschen
        </v-btn>
      </v-col>
    </v-row>

    <!--    Anlegen-->

    <div class="d-flex justify-center">
      <v-card v-if="anlegen" class="cardAnlegen">
        <v-row class="mx-0 my-0 mt-5 d-flex justify-center " style="width: 100%">
          <v-col cols="12">
            <h2 class="text-center mt-n5">Beitrag Anlegen</h2>
          </v-col>
          <v-col cols="5">
            <v-text-field v-model="titel" label="Titel" variant="outlined"/>
          </v-col>
          <v-col cols="5">
            <v-text-field v-model="untertitel" label="Untertitel (optional)" variant="outlined"/>
          </v-col>
          <v-col class="mt-n5" cols="3">
            <v-text-field v-model="autor" label="Autor" variant="outlined"/>
          </v-col>
          <v-col class="mt-n5" cols="4">
            <v-file-input v-model="bild" label="Bild (optional)" prepend-icon="mdi-camera" variant="outlined"/>
          </v-col>
          <v-col class="mt-n5" cols="3">
            <v-text-field v-model="position" label="Position" variant="outlined"/>
          </v-col>
          <v-col class="mt-n5" cols="10">
            <v-textarea v-model="text" label="Inhalt" variant="outlined"/>
          </v-col>
          <v-col class="d-flex justify-center mt-n5" cols="10">
            <v-btn class="text-white" style="background-color: #2F53A7" @click="speichern"> Anlegen</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <!--    Löschen-->

    <div class="d-flex justify-center">
      <v-card v-if="löschen" class="card">
        <v-row class="mx-auto my-1" style="width: 95%">
          <v-col class="text-center" cols="2"><h4>Bild</h4></v-col>
          <v-col class="text-center" cols="2"><h4>Titel</h4></v-col>
          <v-col class="text-center" cols="2"><h4>Untertitel</h4></v-col>
          <v-col class="text-center" cols="3"><h4>Inhalt</h4></v-col>
          <v-col class="text-center" cols="2"><h4>Autor</h4></v-col>
        </v-row>
        <v-row v-for="beitrag in beiträge" :key="beitrag" class="mx-auto my-1 mt-5"
               style="border: black solid 2px;border-radius: 10px; width: 95%">
          <v-col class="text-center mt-3" cols="2">
            <v-img :src="beitrag.img" style="max-height: 200px; border-radius: 13px"/>
          </v-col>

          <v-col class="text-center mt-3" cols="2">
            <h4>{{ beitrag.titel }}</h4>
          </v-col>

          <v-col cols="2" style="height: 200px; overflow-y: auto">
            <h5 class="text-center mt-3">{{ beitrag.untertitel }}</h5>
          </v-col>

          <v-col cols="3" style="max-height: 200px; overflow-y: auto">
            <p class="text-center ">{{ beitrag.text }}</p>
          </v-col>

          <v-col class="align-center d-flex justify-center" cols="2">
            <p class="text-center mt-3">{{ beitrag.autor }}</p>
          </v-col>

          <v-col class="py-0 pr-1 d-flex align-center justify-center" cols="1">
            <Icon icon="tabler:trash-x-filled"
                  style="font-size: 30px; color: red; cursor: pointer"
                  @click="deleteBeitrag(beitrag)"/>
          </v-col>

        </v-row>
      </v-card>
    </div>

  </div>
</template>

<script>

import {Icon} from "@iconify/vue/dist/iconify";

export default {
  name: "PressearchivComponent",
  data() {
    return {
      beiträge: this.$store.state.pressearchiv.sort((a, b) => b.id - a.id),
      beitrag: {},

      titel: '',
      untertitel: '',
      bild: '',
      text: '',
      autor: '',
      datum: '',
      position: '',

      anlegen: true,
      löschen: false,
    }
  },
  components: {
    Icon
  },
  methods: {
    setErstenBeitrag() {
      this.beitrag = this.beiträge[0]
    },
    speichern() {
      let id = this.$store.state.pressearchiv.length + 1
      this.$store.state.pressearchiv.push({
        id: id,
        titel: this.titel,
        untertitel: this.untertitel,
        bild: this.bild,
        text: this.text,
        autor: this.autor,
        datum: this.getDate(),
        position: this.position
      })
      this.titel = '';
      this.untertitel = '';
      this.bild = '';
      this.text = '';
      this.autor = '';
      this.datum = '';
      this.position = '';
    },
    deleteBeitrag(beitrag) {
      const index = this.beiträge.indexOf(beitrag);
      if (index > -1) {
        this.beiträge.splice(index, 1);
      }
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
    reloadBeiträge() {
      this.anlegen = false;
      this.löschen = true;
      this.beiträge = '';
      this.beiträge = this.$store.state.pressearchiv.sort((a, b) => b.id - a.id);
    }
  },
  created() {
    this.setErstenBeitrag()
  }
}
</script>

<style scoped>
.card {
  overflow-y: scroll;
  width: 90%;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.91);
  box-shadow: 4px 6px 8px black;
  border-radius: 20px;
}

.cardAnlegen {
  width: 90%;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.91);
  box-shadow: 4px 6px 8px black;
  border-radius: 20px;
}

.activeComponent {
  background-color: #2F53A7;
  color: white;
}
</style>
