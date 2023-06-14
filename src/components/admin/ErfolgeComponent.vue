<template>
  <div>
    <v-row class="mb-1 px-0" style="width: 100% ">
      <v-col class="d-flex justify-center">
        <v-btn :class="{ 'userAnlegen': erfolgAnlegen }"
               class="button-links" @click="erfolgAnlegen=true; erfolgBearbeiten=false; erfolgLoeschen= false">
          Erfolg anlegen
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-center">

        <v-btn :class="{ 'userAnlegen': erfolgLoeschen }"
               class="button-links" @click="erfolgAnlegen=false; erfolgBearbeiten=false; erfolgLoeschen= true">
          Erfolg Löschen
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-center">

        <v-btn :class="{ 'userAnlegen': erfolgBearbeiten }"
               class="button-links" @click="erfolgAnlegen=false; erfolgBearbeiten=true; erfolgLoeschen= false">
          Erfolg bearbeiten
        </v-btn>
      </v-col>
    </v-row>
    <v-card v-if="erfolgAnlegen" class="card">
      <v-card-title class="text-center"> Anlegen</v-card-title>
      <v-card-subtitle class="text-center">Wusstest du dass...</v-card-subtitle>
      <v-row class="d-flex justify-center" style="width: 100%">
        <v-col cols="9">
          <v-textarea v-model="erfolgText" label="Erfolg eintragen" variant="solo"></v-textarea>
        </v-col>
        <v-col cols="9">
          <v-file-input
              v-model="erfolgBild"
              accept="image/*"
              label="Wähle ein Bild aus"
              variant="solo"
          ></v-file-input>
        </v-col>

        <v-col class="d-flex justify-center" cols="9">
          <v-btn class="text-white " style="background-color: #2F53A7" @click="erfolgErstellen">
            Erstellen
          </v-btn>
        </v-col>
      </v-row>

    </v-card>

    <v-card v-if="erfolgLoeschen" class="card" style="max-height: 500px">
      <v-card-title class="text-center"> Löschen</v-card-title>
      <v-row class="mx-auto my-1" style="width: 95%">
        <v-col class="text-center" cols="11"><h4>Text</h4></v-col>
        <v-col class="text-center" cols="1"><h4>Löschen</h4></v-col>
      </v-row>
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
    </v-card>

    <v-card v-if="erfolgBearbeiten" class="card" style="height: 500px;">
      <v-card-title class="text-center"> Bearbeiten</v-card-title>
      <v-card v-for="x in $store.state.erfolge" :key="x" class="mx-auto mb-2 pt-3"
              style="width: 95%; background-color: #e8e8e8">
        <v-row class="mx-0" style="width: 100%">

          <v-col cols="11">
            <v-textarea v-model="x.text" counter
                        no-resize="true" style=" height: 170px; width: 100%" variant="solo">

            </v-textarea>
          </v-col>
          <v-col class="d-flex align-center" cols="1">
            <Icon icon="fluent-mdl2:accept-medium" style="font-size: 30px; color: green; cursor: pointer"/>
          </v-col>
          <v-col>
            <v-file-input v-model="erfolgBild"
                          accept="image/*"
                          label="Wähle ein Bild aus"
                          variant="solo"></v-file-input>
          </v-col>

        </v-row>
      </v-card>

    </v-card>
  </div>
</template>

<script>
import {Icon} from "@iconify/vue/dist/iconify";

export default {
  name: "erfolgeComponent",
  components: {
    Icon
  },
  data() {
    return {
      erfolge: this.$store.state.erfolge.sort((a, b) => b.id - a.id),

      erfolgAnlegen: false,
      erfolgLoeschen: true,
      erfolgBearbeiten: false,

      erfolgBild: null,
      erfolgText: '',
    }
  },
  methods: {
    erfolgErstellen() {
      let id = (this.$store.state.erfolge[this.$store.state.erfolge.length - 1].id + 1)
      this.$store.state.erfolge.push({
        id: id,
        img: this.erfolgBild,
        text: this.erfolgText,
      });

      this.bild = null;
      this.text = ''
    },
    deleteErfolg(erfolg) {
      const index = this.erfolge.indexOf(erfolg);
      if (index > -1) {
        this.erfolge.splice(index, 1);
      }
    },
  },
}
</script>

<style scoped>
.userAnlegen {
  background-color: #2F53A7;
  color: white;
}

.card {
  width: 100%;
  height: 88%;
  box-shadow: 2px 4px 6px black;
  border-radius: 13px;
  overflow-y: auto;
}

</style>
