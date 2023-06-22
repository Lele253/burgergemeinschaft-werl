<template>
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
</template>

<script>
export default {
  name: "BeitragAnlegenComponent",
  data() {
    return {
      titel: '',
      inhalt: '',
    }
  },
  methods: {
    speichern() {
      let id = (this.$store.state.beiträge.length) + 1;
      let date = this.getDate();

      this.$store.state.beiträge.push({
        id: id,
        titel: this.titel,
        text: this.inhalt,
        datum: date
      })

      this.titel = '';
      this.inhalt = '';
    },
    clear() {
      this.titel = '';
      this.inhalt = '';
    },
    getDate() {
      let datum = new Date();

      let tag = datum.getDate();
      let monat = datum.getMonth() + 1;
      let jahr = datum.getFullYear();

      if (tag < 10) {
        tag = "0" + tag;
      }

      if (monat < 10) {
        monat = "0" + monat;
      }

      return (tag + "." + monat + "." + jahr);
    }
  },

}
</script>

<style scoped>

</style>