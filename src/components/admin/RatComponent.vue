<template>

  <!--  Menu-->

  <v-row class="mb-1 px-0" style="width: 100% ">
    <v-col class="d-flex justify-end">
      <v-btn :class="{ 'btn-active': ratAnlegen }" class="button-links" @click="ratAnlegen=true; ratLoeschen=false">
        Ratsmitglied anlegen
      </v-btn>
    </v-col>
    <v-col class="d-flex justify-start">

      <v-btn :class="{ 'btn-active': ratLoeschen }" class="button-links" @click="ratAnlegen=false; ratLoeschen=true">
        Ratsmitglied Löschen
      </v-btn>
    </v-col>
  </v-row>

  <!--  Anlegen-->

  <div class="d-flex justify-center">
    <v-card v-if="ratAnlegen" class="cardAnlegen" style="height: 500px">
      <v-row class="justify-center">
        <v-col cols="12">
          <h2 class="text-center mt-5">Ratsmitglied Anlegen</h2>
        </v-col>
        <v-col class="my-n2 mt-5" cols="5">
          <v-text-field v-model="name" label="Name" variant="outlined">

          </v-text-field>
        </v-col>
        <v-col class="my-n2 mt-5" cols="5">
          <v-text-field v-model="titel" label="Titel" variant="outlined"></v-text-field>
        </v-col>
        <v-col class="mb-n2" cols="10">
          <v-file-input v-model="bild" accept="image/*" label="Bild" prepend-icon="mdi-camera"
                        variant="outlined"></v-file-input>
        </v-col>
        <v-col class="mb-n2" cols="10">
          <v-textarea v-model="vita" label="Vita" variant="outlined"></v-textarea>
        </v-col>
        <v-col class="d-flex justify-center mt-n5" cols="10">
          <v-btn class="text-white" style="background-color: #2F53A7" @click="speichern"> Ratsmitglied erstellen</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>

  <!--  Löschen-->

  <div class="d-flex justify-center">
    <v-card v-if="ratLoeschen" class="card" style="height: 500px">
      <v-row class="justify-center mx-0" style="width: 100%; ">
        <v-col class="mt-5" cols="12">
          <h2 class="text-center">Ratsmitglied Löschen</h2>
        </v-col>
        <v-col v-for="x in rat" :key="x" class="mt-5 d-flex justify-space-between"
               cols="9" style="border-radius: 8px;border: black solid 2px">
          <p>{{ x.name }}</p>
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
  name: "RatComponent",
  components: {
    Icon
  },
  data() {
    return {
      rat: [],

      ratAnlegen: true,
      ratLoeschen: false,
      name: '',
      titel: '',
      bild: null,
      vita: '',
    }
  },
  mounted() {
    this.getAllRat()
  },
  methods: {
    async getAllRat() {
      const response = await axios.get('/rat')
      this.$store.state.rat = response.data

      this.rat = this.$store.state.rat
    },
    async speichern() {
      try {
        await axios.post('/rat', {
          name: this.name,
          titel: this.titel,
          bild: this.bild,
          vita: this.vita,
        })

        console.log("Titel: " + this.titel)

        this.$store.state.rat.push({
          name: this.name,
          titel: this.titel,
          bild: this.bild,
          vita: this.vita,
        })
        this.name = '';
        this.titel = ''
        this.bild = ''
        this.vita = ''
      } catch (e) {
        console.log(e)
      }
    },
    async löschen(person) {
      try {
        await axios.delete('/rat/' + person.id)

        const index = this.rat.indexOf(person);
        if (index > -1) {
          this.rat.splice(index, 1);
        }
      } catch (e) {
        console.log(e)
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
