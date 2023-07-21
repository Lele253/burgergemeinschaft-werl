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
      <v-card v-if="anlegen" class="cardAnlegen d-flex align-center">

        <v-row class="mx-0 ml-0 mr-0 my-0 d-flex justify-center " style="width: 100%">
          <v-col cols="12">
            <h2 class="text-center">Beitrag Anlegen</h2>
          </v-col>
          <v-col cols="5">
            <v-text-field v-model="titel" label="Titel" variant="outlined"/>
          </v-col>
          <v-col cols="10">
            <v-textarea v-model="text" label="Inhalt" rows="8" variant="outlined"/>
          </v-col>
          <v-col class="d-flex justify-center align-center mt-n5" cols="10">
            <v-btn class="text-white" style="background-color: #2F53A7" @click="speichern"> Anlegen</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <!--    Löschen-->

    <div class="d-flex justify-center">
      <v-card v-if="löschen" class="card">
        <v-row class="mx-auto my-1" style="width: 95%">
          <v-col class="text-center" cols="3"><h3>Titel</h3></v-col>
          <v-col class="text-center" cols="6"><h3>Inhalt</h3></v-col>
          <v-col class="text-center" cols="2"><h3>Datum</h3></v-col>
        </v-row>
        <v-row v-for="beitrag in beiträge" :key="beitrag"
               class="mx-auto my-1 mt-5" style="border: black solid 2px;border-radius: 10px; width: 95%">
          <v-col class="text-center mt-6" cols="3">
            <h4>{{ beitrag.titel }}</h4>
          </v-col>
          <v-col cols="6" style="height: 150px; overflow-y: auto">
            {{ beitrag.text }}
          </v-col>
          <v-col class="d-flex align-center justify-center" cols="2">
            <p class="text-center">{{ beitrag.datum }}</p>
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
import axios from "axios";

export default {
  name: "AktuellesComponent",
  data() {
    return {
      beiträge: [],
      beitrag: {},

      titel: '',
      text: '',

      anlegen: true,
      löschen: false,
    }
  },
  components: {
    Icon
  },
  methods: {
    setErstenBeitrag() {
      this.beitrag = this.$store.state.beiträge
    },
    async speichern() {
      try {
        await axios.post('/aktuelles', {
          titel: this.titel,
          inhalt: this.text,
          datum: this.getDate()
        })


        let id = this.$store.state.beiträge.length + 1
        this.$store.state.beiträge.push({
          id: id,
          titel: this.titel,
          text: this.text,
          datum: this.getDate()
        })
        this.titel = '';
        this.text = ''
      } catch (e) {
        console.log(e)
      }

    },
    async deleteBeitrag(beitrag) {
      try {
        await axios.delete('/aktuelles/' + beitrag.id)

        const index = this.beiträge.indexOf(beitrag);
        if (index > -1) {
          this.beiträge.splice(index, 1);
        }
      } catch (e) {
        console.log(e)
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
      this.beiträge = this.$store.state.beiträge.sort((a, b) => b.id - a.id);
    },
    async getAllAktuelles() {
      const response = await axios.get('/aktuelles')
      this.$store.state.beiträge = response.data
    }
  },
  created() {
    this.setErstenBeitrag()
  },
  mounted() {
    this.getAllAktuelles()
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
  box-shadow: 2px 4px 6px black;
  border-radius: 20px;
}

.activeComponent {
  background-color: #2F53A7;
  color: white;
}
</style>
