<template>
  <v-row class="mb-1 px-0" style="width: 100% ">
    <v-col class="d-flex justify-center">
      <v-btn class="button-links">
        Beitrag anlegen
      </v-btn>
    </v-col>
    <v-col class="d-flex justify-center">

      <v-btn class="button-links">
        Beitrag Löschen
      </v-btn>
    </v-col>
    <v-col class="d-flex justify-center">

      <v-btn class="button-links">
        Beitrag bearbeiten
      </v-btn>
    </v-col>
  </v-row>
  <v-card class="card"></v-card>
</template>

<script>
export default {
  name: "KommentarComponent"
}
</script>

<style scoped>
.card {
  width: 100%;
  height: 88%;
  box-shadow: 2px 4px 6px black;
  border-radius: 13px;
  overflow-y: auto;
}
</style>
