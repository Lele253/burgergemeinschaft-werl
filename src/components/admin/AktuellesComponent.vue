<template>
  <div>
    <v-row class="mb-1 px-0" style="width: 100% ">
      <v-col class="d-flex justify-center">
        <v-btn class="button-links" @click="anlegen = true, bearbeiten = false, löschen = false">
          Aktuelles anlegen
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-btn class="button-links" @click="anlegen = false; bearbeiten = false; löschen = true">
          Aktuelles Löschen
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-btn class="button-links" @click="anlegen = false; bearbeiten = true; löschen = false">
          Aktuelles bearbeiten
        </v-btn>
      </v-col>
    </v-row>

    <!--    Anlegen-->

    <v-card v-if="anlegen" class="card">
      <div>
        <v-row class="mx-0 my-0 mt-5 d-flex justify-center" style="width: 100%">
          <v-col cols="5">
            <v-text-field v-model="titel" label="Titel" variant="solo"/>
          </v-col>
          <v-col cols="10">
            <v-textarea v-model="inhalt" label="Inhalt" no-resize rows="10" variant="solo"/>
          </v-col>
          <v-col class="d-flex justify-center" cols="10">
            <v-btn color="green" @click="speichern"> Speichern</v-btn>
            <v-btn class="ml-2" color="red" @click="clear"> Leeren</v-btn>
          </v-col>
        </v-row>
      </div>
    </v-card>

    <!--    Löschen-->

    <v-card v-if="löschen" class="card">
      <div>
        <v-card-title class="text-center"> Löschen</v-card-title>
        <v-row v-for="x in $store.state.beiträge" :key="x" class="mx-0" style="width: 100%">
          <v-col cols="11">
            <v-card style="height: 90px; width: 100%">
              <p style="font-size: 12px">{{ x.text }}</p>
            </v-card>
          </v-col>
          <v-col class="d-flex align-center" cols="1">
            <Icon icon="tabler:trash-x-filled" style="font-size: 30px; color: red; cursor: pointer"/>
          </v-col>
        </v-row>
      </div>
    </v-card>

    <!--    Bearbeiten-->

    <v-card v-if="bearbeiten" class="card">
      <div>
        <v-row class="mx-0 my-0 mt-5 d-flex justify-center" style="width: 100%">
          <v-col cols="5">
            <v-text-field v-model="titel" label="Titel" variant="solo"/>
          </v-col>
        </v-row>
      </div>
    </v-card>

  </div>
</template>

<script>
import {Icon} from "@iconify/vue/dist/iconify";

export default {
  name: "AktuellesComponent",
  data() {
    return {
      anlegen: true,
      bearbeiten: false,
      löschen: false,
    }
  },
  components: {
    Icon
  }
}
</script>

<style scoped>
.card {
  width: 90%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.91);
  box-shadow: 4px 6px 8px black;
  border-radius: 20px 20px 20px 20px;
}
</style>
