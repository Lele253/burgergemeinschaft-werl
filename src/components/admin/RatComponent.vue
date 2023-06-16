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
          <v-btn class="text-white" style="background-color: #2F53A7"> Ratsmitglied erstellen</v-btn>
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
          <Icon icon="tabler:trash-x-filled" style="font-size: 30px; color: red; cursor: pointer"/>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import {Icon} from "@iconify/vue/dist/iconify";

export default {
  name: "RatComponent",
  components: {
    Icon
  },
  data() {
    return {
      rat: this.$store.state.rat,

      ratAnlegen: true,
      ratLoeschen: false,
      name: '',
      titel: '',
      bild: null,
      vita: '',
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
  border-radius: 13px 13px 13px 13px;
}

.cardAnlegen {
  width: 90%;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.91);
  box-shadow: 4px 6px 8px black;
  border-radius: 13px 13px 13px 13px;
}

.btn-active {
  background-color: #2F53A7;
  color: white;
}
</style>
