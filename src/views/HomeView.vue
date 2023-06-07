<template>
  <div>
    <HeaderComponent/>
    <div class="background pt-10">
      <v-row class="d-flex justify-center">
        <v-col class="d-flex justify-center" cols="7">
          <v-card class=" card">
            <h2 class="px-10 pt-3 text-center">Herzlich Willkommen auf den
              Seiten der Bürgergemeinschaft Werl e.V.!
            </h2>
            <p class="px-5 pt-15 text-center">
              Die Bürgergemeinschaft Werl e.V. (BG-Werl) ist ein Zusammenschluss parteiunabhängiger Bürgerinnen und
              Bürger, die auf kommunaler Ebene bürgernahe politische Arbeit leisten. Die BG ist eine ideologiefreie
              kommunale Wählergemeinschaft, die alle Fragen und Probleme unserer Stadt in ständiger Diskussion gemeinsam
              mit und für die Bürgerinnen und Bürger zu lösen versucht. Wir entscheiden frei von Weisungen und
              Programmen eines Landes- oder Bundesverbandes und orientieren uns allein am Wohl der Stadt. Die
              Mandatsträger entscheiden frei nach ihrem Gewissen und unterliegen keinem Fraktionszwang.
            </p>
          </v-card>
        </v-col>
        <v-col class="d-flex justify-center" cols="5">
          <v-card class="card">
            <v-img :src="bildRechts" cover></v-img>
          </v-card>
        </v-col>
      </v-row>

    </div>
  </div>


</template>

<script>

import HeaderComponent from "@/components/HeaderComponent";

export default ({
  data() {
    return {
      bildRechts: require('../assets/vorstandneu.jpeg'),
      name: 'Bürgergemeinschaft Werl',
    }
  },
  components: {
    HeaderComponent
  },
  created() {
    this.$store.state.routername = this.name
  }
});
</script>

<style>

.background {
  width: 100vw;
  height: 90vh;
  background-image: url('../assets/werl.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.card {
  height: 70vh;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 4px 6px 8px black;
  border-radius: 20px 20px 20px 20px;
}
</style>
