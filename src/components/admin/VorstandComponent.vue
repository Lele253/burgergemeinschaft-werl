<template>

  <!--  Menu-->

  <v-row class="mb-1 px-0" style="width: 100% ">
    <v-col class="d-flex justify-end">
      <v-btn :class="{ 'btn-active': vorstandAnlegen }" class="button-links"
             @click="vorstandAnlegen=true; vorstandLoeschen=false">
        Vorstandsmitglied anlegen
      </v-btn>
    </v-col>
    <v-col class="d-flex justify-start">

      <v-btn :class="{ 'btn-active': vorstandLoeschen }" class="button-links"
             @click="vorstandAnlegen=false; vorstandLoeschen=true">
        Vorstandsmitglied Löschen
      </v-btn>
    </v-col>
  </v-row>

  <!--  Anlegen-->

  <div class="d-flex justify-center">
    <v-card v-if="vorstandAnlegen" class="cardAnlegen d-flex align-center" style="height: 500px">
      <v-row class="justify-center">
        <v-col cols="12">
          <h2 class="text-center">Vorstandsmitglied Anlegen</h2>
        </v-col>
        <v-col class="my-n2 mt-5" cols="10">
          <v-text-field v-model="name" label="Name" variant="outlined"/>
        </v-col>
        <v-col class="my-n2 mt-5" cols="10">
          <v-select v-model="position" :items="positionAuswahl" label="Position" variant="outlined"/>
        </v-col>
        <v-col class="mb-n2" cols="5">
          <v-text-field v-model="email" label="Email" variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col class="mb-n2" cols="5">
          <v-file-input v-model="bild" label="Bild" prepend-icon="mdi-camera" variant="outlined"/>
        </v-col>
        <v-col class="d-flex justify-center mb-n5" cols="10">
          <v-btn class="text-white" style="background-color: #2F53A7" @click="speichern"> Vorstandsmitglied erstellen
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>

  <!--  Löschen-->

  <div class="d-flex justify-center">
    <v-card v-if="vorstandLoeschen" class="card" style="height: 500px">
      <v-row class="justify-center mx-0" style="width: 100%; ">
        <v-col class="mt-5" cols="12">
          <h2 class="text-center">Ratsmitglied Löschen</h2>
        </v-col>
        <v-col v-for="x in vorstand" :key="x" class="mt-5 d-flex justify-space-between"
               cols="9" style="border-radius: 8px;border: black solid 2px">
          <p>{{ x.name }}</p>
          <p>{{ x.position }}</p>
          <Icon icon="tabler:trash-x-filled" style="font-size: 30px; color: red; cursor: pointer" @click="löschen(x)"/>
        </v-col>
      </v-row>
    </v-card>

  </div>
</template>

<script>
import {Icon} from "@iconify/vue/dist/iconify";
import axios from "axios";

export default {
  name: "VorstandComponent",
  components: {
    Icon
  },
  data() {
    return {
      positionAuswahl: ["Vorsitzender", "Vorsitzende", "Stellv. Vorsitzender", "Stellv. Vorsitzende", "Schriftführerin", "Schriftführer", "Kassenwart", "Kassenwärtin", "Besitzer", "Besitzerin"],
      vorstand: [],
      email: '',
      vorstandAnlegen: true,
      vorstandLoeschen: false,
      name: '',
      position: '',
      bild: null,
    }
  },
  mounted() {
    this.getAllVorstand()
  },
  methods: {
    async getAllVorstand() {
      const response = await axios.get('/vorstand')
      this.$store.state.vorstand = response.data

      this.vorstand = this.$store.state.vorstand
    },
    async speichern() {
      try {
        const formdata = new FormData()
        formdata.append('name', this.name)
        formdata.append('position', this.position)
        formdata.append('image', this.bild[0])
        formdata.append('email', this.email)


        await axios.post('/vorstand', formdata, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

        this.$store.state.vorstand.push({
          name: this.name,
          position: this.position,
          img: this.bild,
          email: this.email
        })
        this.name = '';
        this.position = ''
        this.bild = ''
        this.email = ''
      } catch (e) {
        alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie Bitte den Administrator.")
      }
      await this.getAllVorstand()
    },
    async löschen(person) {
      try {
        await axios.delete('/vorstand/' + person.id)

        const index = this.vorstand.indexOf(person);
        if (index > -1) {
          this.vorstand.splice(index, 1);
        }
      } catch (e) {
        alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie Bitte den Administrator.")
      }
    }
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

.btn-active {
  background-color: #2F53A7;
  color: white;

}
</style>
