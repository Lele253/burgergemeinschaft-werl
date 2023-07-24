<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div style="height: 100vh ">
      <v-img :src="background" cover style="position: fixed; height: 100vh;">
        <div class="d-flex align-center justify-center" style="height: 100%; padding-bottom: 150px">
          <v-card
              style=" border-radius: 0px; box-shadow: 0 0 10px 10px rgba(0,0,0,0.5); height: 90%; width: 90%; background-color: rgba(0,0,0,0.6); color: transparent">
            <v-row class="ma-0 pb-0" style="overflow-y: scroll; width: 100%; height: 100%">
              <v-col class="" cols="12" md="5" style="height: 100%; width: 100%;">


                <h1 class="mt-15 mx-3 text-white text-center mt-2">Willkommen bei der Bürgergemeinschaft Werl!</h1>

                <div>
                  <p class="my-15 d-block text-white ma-2 ">Die Bürgergemeinschaft Werl arbeitet engagiert
                    daran,
                    unsere Stadt lebendig
                    und
                    lebenswert zu machen. Wir
                    sind stolz auf unsere faszinierende Geschichte, bezaubernde Altstadt und leidenschaftliche
                    Bürgerschaft.
                    Besuchen Sie unsere Website für Informationen zu aktuellen Projekten, Veranstaltungen und
                    Möglichkeiten
                    zur Mitwirkung. Werl ist offen für alle, die Teil unserer Gemeinschaft werden und gemeinsam mit uns
                    die
                    Zukunft gestalten möchten. Willkommen bei der Bürgergemeinschaft Werl!</p>

                </div>


              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" md="5" style="height: 100%; width: 100%;">
                <v-card class="card-rechts my-auto ">
                  <div
                      style="position: absolute; left: 40%;  z-index: 200;  height: 7px; width: 100px; border-radius: 0px 0px 50px 50px; background-color: white">

                  </div>
                  <div
                      style="position: absolute; bottom:0px; left: 42%;  z-index: 200;  height: 7px; width: 100px; border-radius: 50px 50px 0px 00px; background-color: white">

                  </div>
                  <v-card class="innercard mx-auto my-auto">
                    <v-row justify="center">
                      <v-col class="d-flex justify-center" cols="12">
                        <!--                      <h1 class="mb-8 text-center text-white">
                                                {{ animatedText }}

                                              </h1>-->
                        <v-timeline>
                          <v-timeline-item
                              dot-color="purple-lighten-2"
                              fill-dot
                              size="x-small"

                          >
                            <v-card class="timeline-card mx-3">
                              <v-card-title class="bg-purple-lighten-2">
                                <h4 class="font-weight-light">
                                  {{ beitrag.titel }}
                                </h4>
                              </v-card-title>
                              <v-card-text class="mt-2">
                                {{ beitrag.inhalt }}
                              </v-card-text>
                            </v-card>
                          </v-timeline-item>

                          <v-timeline-item
                              dot-color="amber-lighten-1"
                              fill-dot
                              size="x-small"
                          >
                            <v-card class="mx-3 timeline-card">
                              <v-card-title class="bg-amber-lighten-1 justify-end">
                                <h4 class="me-4 font-weight-light">
                                  {{ kommentar.titel }}
                                </h4>

                              </v-card-title>
                              <v-card-text class="mt-2">
                                {{ kommentar.text }}
                              </v-card-text>
                            </v-card>
                          </v-timeline-item>

                          <v-timeline-item
                              dot-color="cyan-lighten-1"
                              fill-dot
                              size="x-small"

                          >
                            <v-card class="mx-3 timeline-card">
                              <v-card-title class="bg-cyan-lighten-1">

                                <h4 class="font-weight-light">
                                  Wussten du?
                                </h4>
                              </v-card-title>
                              <v-card-text class="mt-2">
                                {{ erfolg.text }}
                              </v-card-text>
                            </v-card>
                          </v-timeline-item>

                        </v-timeline>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </div>

      </v-img>

    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import axios from "axios";

export default {
  name: "HomeNeuView",
  data() {
    return {
      beitrag: {},
      erfolg: {},
      kommentar: {},
      text: 'Bürgergemeinschaft Werl',
      animatedText: '',
      background: require('../assets/werl1.jpeg'),
      images: [
        {
          url: require('../assets/home/1.png'),
          text: 'Bürgergemeinschaft Werl'
        },
        {
          url: require('../assets/home/2.png'),
          text: 'Jens Schmigowski | Vorsitzender'
        },
        {
          url: require('../assets/home/3.png'),
          text: 'Vorstand der Bürgergemeinschaft Werl'
        },
        {
          url: require('../assets/home/4.png'),
          text: 'Junge Frauen-Power in unserer BG Werl'
        },

      ]

    }
  },
  components: {HeaderComponent},
  mounted() {
    this.animateText();
    this.getAllTexte();
  },
  methods: {
    async getAllTexte() {
      try {
        const response1 = await axios.get('/aktuelles')
        this.$store.state.beiträge = response1.data
        this.beitrag = this.$store.state.beiträge[this.$store.state.beiträge.length - 1];

        if (this.beitrag.titel.length > 12) {
          this.beitrag.titel = this.beitrag.titel.slice(0, 12) + '...'
        }

        if (this.beitrag.inhalt.length > 120) {
          this.beitrag.inhalt = this.beitrag.inhalt.slice(0, 120) + '...'
        }

        const response2 = await axios.get('/erfolge')
        this.$store.state.erfolge = response2.data
        this.erfolg = this.$store.state.erfolge[this.$store.state.erfolge.length - 1];

        if (this.erfolg.text.length > 120) {
          this.erfolg.text = this.erfolg.text.slice(0, 120) + '...'
        }

        const response3 = await axios.get('/kommentare')
        this.$store.state.kommentare = response3.data
        this.kommentar = this.$store.state.kommentare[this.$store.state.kommentare.length - 1];

        if (this.kommentar.titel.length > 12) {
          this.kommentar.titel = this.kommentar.titel.slice(0, 12) + '...'
        }

        if (this.kommentar.text.length > 120) {
          this.kommentar.text = this.kommentar.text.slice(0, 120) + '...'
        }


      } catch (e) {
        alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie Bitte den Administrator.")
      }
    },
    animateText() {
      let index = 0;
      const intervalId = setInterval(() => {
        if (index < this.text.length) {
          this.animatedText += this.text.charAt(index);
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 200);
    }
  }

}
</script>

<style scoped>
.card {
  border-radius: 20px;
  height: 100%;
  width: 100%;
  background-color: rgba(47, 83, 167, 0.76);
  border: 3px solid #2b7dda;


}

.card-rechts {
  border-radius: 20px;
  height: 100%;
  width: 100%;
  background-color: rgba(47, 83, 167, 0.76);
  border: 3px solid #2b7dda;
  display: flex;

}

.innercard {
  height: 95%;
  width: 95%;
  background-color: transparent;
  border: 2px solid #2b7dda;
  border-radius: 20px;
  box-shadow: 0px 0px 30px 5px black;
}

.timeline-card {
  min-width: 220px;
  max-width: 300px;
}
</style>
