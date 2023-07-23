<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 100vh; width: 100vw; position: fixed;">
      <div style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100%;">

        <div class="d-flex justify-center" style="width: 100vw; height: 100vh;padding-top: 0px;">

          <!--          Desktopansicht-->

          <div v-if="!$store.state.mobile">
            <h1 class="text-center pt-5">Wusstest du, dass...</h1>
            <div class="mt-2" style="height: 82vh; overflow-y: scroll; padding-bottom: 80px">
              <v-card v-for="erfolg in erfolge"  :key="erfolg"
                      style="width: 80vw;max-width: 800px; box-shadow: 4px 6px 8px black; width: 98%; margin-bottom: 20px; background-color: rgba(47, 83, 167, 0.65); border-radius: 20px">
                <v-card-item>
                  <v-row>
                    <v-col v-if="erfolg.image != '' ">
                      <v-img :src="erfolg.image" style="border-radius: 20px"/>
                    </v-col>
                    <v-col class="d-flex align-center">
                      <p class="text-center text-white">
                        {{ erfolg.text }}
                      </p>
                    </v-col>
                  </v-row>
                </v-card-item>
              </v-card>
            </div>
          </div>

          <!--          Handyansicht-->

          <div v-if="$store.state.mobile">
            <h2 class="text-center mt-5">Wusstest du, dass...</h2>
            <div class="mt-2 " style="height: 100vh;padding-bottom: 250px; overflow-y: scroll">
              <v-card v-for="erfolg in erfolge" :key="erfolg"
                      class="mx-auto"
                      style="width: 80vw;max-width: 600px; box-shadow: 3px 6px 8px black; width: 96%; margin-bottom: 20px; background-color: rgba(47, 83, 167, 0.65); border-radius: 20px">

                <v-card-item>
                  <v-img :src="erfolg.image" style=" border-radius: 20px"/>
                  <p class="text-center text-white my-2 mx-10">
                    {{ erfolg.text }}
                  </p>
                </v-card-item>
              </v-card>
            </div>
          </div>

        </div>
      </div>
    </v-img>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import axios from "axios";

export default {
  name: "ErfolgeNeuView",
  data() {
    return {
      name: 'Erfolge',
      bild: '',
      background: require('../assets/aktuelles.jpeg'),

      erfolge: this.$store.state.erfolge
    }
  },
  created() {
    this.getAllErfolge()
    this.$store.state.routername = this.name
  },
  methods: {

    async getAllErfolge() {
      try {
        const response = await axios.get('/erfolge')
        this.$store.state.erfolge = response.data
        this.erfolge = this.$store.state.erfolge

        this.erfolge.forEach(item => {
          item.image = `data:image/jpeg;base64,${item.image}`;
        });
      } catch (e) {
        alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie Bitte den Administrator.")
      }
    }
  },
  components: {HeaderComponent}
}
</script>

<style scoped>
.card {
  color: black;
  min-height: 60px;
  width: 75vw;
  background-color: rgba(47, 83, 167, 0.65);
  box-shadow: 2px 4px 4px black;
  border-radius: 20px;
}
</style>
