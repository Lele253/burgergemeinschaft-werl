<template>
  <div>

    <!--    Menu-->

    <v-row class="mb-1 px-0" style="width: 100% ">
      <v-col class="d-flex justify-end">
        <v-btn :class="{ 'userAnlegen': erfolgAnlegen }"
               class="button-links" @click="erfolgAnlegen=true;  erfolgLoeschen= false">
          Erfolg anlegen
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-start">

        <v-btn :class="{ 'userAnlegen': erfolgLoeschen }"
               class="button-links" @click="erfolgAnlegen=false; erfolgLoeschen= true">
          Erfolg Löschen
        </v-btn>
      </v-col>
      <!--      <v-col class="d-flex justify-center">

              <v-btn :class="{ 'userAnlegen': erfolgBearbeiten }"
                     class="button-links" @click="erfolgAnlegen=false; erfolgBearbeiten=true; erfolgLoeschen= false">
                Erfolg bearbeiten
              </v-btn>
            </v-col>-->
    </v-row>

    <!--    Anlegen-->
    <div class="d-flex justify-center">
      <v-card v-if="erfolgAnlegen" class="card ">
        <div>


          <v-row class="d-flex justify-center" style="width: 100%">
            <v-col class="mt-3" cols="12">
              <h2 class="text-center">Erfolg anlegen</h2>
            </v-col>
            <v-col cols="12">
              <p class="text-center">Wusstest du dass...</p>
            </v-col>
            <v-col cols="9">
              <v-textarea v-model="text" label="Erfolg eintragen" variant="outlined"></v-textarea>
            </v-col>
            <v-col cols="9">
              <v-file-input
                  v-model="img"
                  accept="image/*"
                  label="Wähle ein Bild aus"
                  prepend-icon="mdi-camera"
                  variant="outlined"
              ></v-file-input>
            </v-col>

            <v-col class="d-flex justify-center" cols="9">
              <v-btn class="text-white " style="background-color: #2F53A7" @click="erfolgErstellen">
                Erstellen
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </div>

    <!--    Löschen-->
    <div class="d-flex justify-center">

      <v-card v-if="erfolgLoeschen" class="card" style="max-height: 500px; overflow-y: scroll">
        <h2 class="text-center mt-2"> Löschen</h2>
        <v-card-item>
          <v-row v-for="erfolg in erfolge" :key="erfolg"
                 class="mx-auto my-1 mt-5" style="border: black solid 2px;border-radius: 10px; width: 95%">
            <v-col cols="11">
              <p class="text-center">{{ erfolg.text }}</p>
            </v-col>
            <v-col class="py-0 pr-1 d-flex align-center justify-center" cols="1">
              <Icon icon="tabler:trash-x-filled"
                    style="font-size: 30px; color: red; cursor: pointer"
                    @click="deleteErfolg(erfolg)"/>
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>
    </div>

  </div>
</template>

<script>
import {Icon} from "@iconify/vue/dist/iconify";
import axios from "axios";

export default {
  name: "erfolgeComponent",
  components: {
    Icon
  },
  data() {
    return {
      erfolge: this.$store.state.erfolge.sort((a, b) => b.id - a.id),

      error: null,

      erfolgAnlegen: true,
      erfolgLoeschen: false,

      img: null,
      text: '',
    }
  },
  mounted() {
    this.getAllErfolge()
  },
  methods: {
    async erfolgErstellen() {
      try {
        const formdata = new FormData()
        formdata.append('bild', 'test')
        console.log(formdata.get('bild'))

        await axios.post('/erfolge', formdata, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })


        this.$store.state.erfolge.push({
          img: this.img,
          text: this.text,
        })

        this.img = null;
        this.text = ''

      } catch (e) {
        this.error = e;
        console.log(e)
      }
    },
    async deleteErfolg(erfolg) {
      try {
        await axios.delete('/erfolge/' + erfolg.id)

        const index = this.erfolge.indexOf(erfolg);
        if (index > -1) {
          this.erfolge.splice(index, 1);
        }
      } catch (e) {
        console.log(e)
      }

    },
    async getAllErfolge() {
      const response = await axios.get('/erfolge')
      this.$store.state.erfolge = response.data

      this.erfolge = this.$store.state.erfolge
    }
  },
}
</script>

<style scoped>
.userAnlegen {
  background-color: #2F53A7;
  color: white;
}

.card {
  width: 90%;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.91);
  box-shadow: 4px 6px 8px black;
  border-radius: 20px;
}
</style>
