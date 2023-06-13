<template>
  <v-row class="mb-1 px-0" style="width: 100% ">
    <v-col class="d-flex justify-center">
      <v-btn @click="erfolgAnlegen=true; erfolgBearbeiten=false; erfolgLoeschen= false" :class="{ 'userAnlegen': erfolgAnlegen }" class="button-links">
        Erfolg anlegen
      </v-btn>
    </v-col>
    <v-col class="d-flex justify-center">

      <v-btn @click="erfolgAnlegen=false; erfolgBearbeiten=false; erfolgLoeschen= true" :class="{ 'userAnlegen': erfolgLoeschen }" class="button-links">
        Erfolg Löschen
      </v-btn>
    </v-col>
    <v-col class="d-flex justify-center">

      <v-btn @click="erfolgAnlegen=false; erfolgBearbeiten=true; erfolgLoeschen= false" :class="{ 'userAnlegen': erfolgBearbeiten }" class="button-links">
        Erfolg bearbeiten
      </v-btn>
    </v-col>
  </v-row>
  <v-card v-if="erfolgAnlegen" class="card">
    <v-card-title class="text-center"> Anlegen</v-card-title>
    <v-card-subtitle class="text-center">Wusstest du dass...</v-card-subtitle>
    <v-row style="width: 100%" class="d-flex justify-center">
      <v-col cols="9">
        <v-textarea label="Erfolg eintragen" variant="solo" v-model="erfolgText"></v-textarea>
      </v-col>
      <v-col cols="9">
        <v-file-input
            v-model="erfolgBild"
            accept="image/*"
            label="Wähle ein Bild aus"
            variant="solo"
        ></v-file-input>
      </v-col>

      <v-col cols="9" class="d-flex justify-center">
        <v-btn @click="erfolgErstellen" class="text-white " style="background-color: #2F53A7" >
          Erstellen
        </v-btn>
      </v-col>
    </v-row>

  </v-card>
  <v-card v-if="erfolgLoeschen" class="card" style="max-height: 500px">
    <v-card-title class="text-center"> Löschen</v-card-title>
    <v-row v-for="x in $store.state.erfolge" :key="x" style="width: 100%" class="mx-0">
      <v-col cols="11">
        <v-card style="height: 90px; width: 100%">
          <p style="font-size: 12px">{{x.text}}</p>
        </v-card>
      </v-col>
      <v-col class="d-flex align-center" cols="1">
        <Icon icon="tabler:trash-x-filled" style="font-size: 30px; color: red; cursor: pointer"/>
      </v-col>
    </v-row>
  </v-card>
  <v-card v-if="erfolgBearbeiten" class="card" style="height: 500px;">
    <v-card-title class="text-center"> Bearbeiten</v-card-title>
    <v-card class="mx-auto mb-2 pt-3" v-for="x in $store.state.erfolge" :key="x" style="width: 95%; background-color: #e8e8e8">
      <v-row style="width: 100%" class="mx-0">

        <v-col cols="11">
          <v-textarea counter no-resize="true"
                      variant="solo" v-model="x.text" style=" height: 170px; width: 100%">

          </v-textarea>
        </v-col>
        <v-col class="d-flex align-center" cols="1">
          <Icon icon="fluent-mdl2:accept-medium" style="font-size: 30px; color: green; cursor: pointer"/>
        </v-col>
        <v-col>
          <v-file-input  accept="image/*"
                         label="Wähle ein Bild aus"
                         variant="solo"
                         v-model="erfolgBild"></v-file-input>
        </v-col>

      </v-row>
    </v-card>

  </v-card>
</template>

<script>
export default {
  name: "erfolgeComponent",
  data(){
    return{
      erfolgAnlegen: true,
      erfolgLoeschen: false,
      erfolgBearbeiten: false,
      erfolgBild:null,
      erfolgText:'...',

    }
  },
  methods: {
    erfolgErstellen(){

      this.$store.state.erfolge.unshift({
        img: this.erfolgBild,
        text: this.erfolgText,
      })
      console.log(this.$store.state.erfolge)
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
