<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 100vh; width: 100vw; position:fixed;">
      <div class="d-flex justify-center" style="background-color: rgba(255,255,255,0);height: 100%; width: 100%">
        <div>

          <!--          Slider-->

          <div class="d-flex align-center" style="height: 88%">

            <v-sheet
                class="hidden-xs"
                style="background-color: rgba(255,255,255,0)"
                width="90vw">
              <v-slide-group
                  v-model="model"
                  center-active
                  show-arrows>
                <v-slide-group-item
                    v-for="p in vorstand"
                    :key="p"
                    v-slot="{ isSelected, toggle }">
                  <v-card
                      :class="{ 'cardOne': isSelected }"
                      class="ml-5 mt-10 mr-5  card "
                      elevation="0"
                      width="300"
                      @click="toggle">

                    <div>

                      <h2 class="text-center">{{ p.name }}</h2>

                      <v-img
                          :src="p.image"
                          class="image mx-auto"
                          cover

                          height="370" width="243"/>
                    </div>
                    <div class="d-flex justify-center mt-3" style="text-align: justify; text-justify: inter-word;">
                      Wahlbezirk: {{ p.wahlbezirk }}
                    </div>
                  </v-card>

                </v-slide-group-item>
              </v-slide-group>
            </v-sheet>

            <v-sheet
                class="hidden-sm-and-up"
                style="background-color: rgba(255,255,255,0)"
                width="100vw">
              <v-slide-group
                  v-model="model"
                  center-active
                  show-arrows>
                <v-slide-group-item
                    v-for="p in vorstand"
                    :key="p"
                    v-slot="{ isSelected}">
                  <v-card
                      :class="{ 'cardOne': isSelected }"
                      class="ml-5 mr-5 d-flex align-center cardMobile justify-center"
                      elevation="0">
                    <div>
                      <h2 class="text-center">{{ p.name }}</h2>

                      <div class=" mb-2 d-flex justify-center" style="text-align: justify; text-justify: inter-word;">
                        Wahlbezirk {{ p.wahlbezirk }}<br>
                      </div>
                      <v-img
                          :src="p.image" class="image" cover
                          height="350" max-width="240"/>
                    </div>

                  </v-card>

                </v-slide-group-item>
              </v-slide-group>
            </v-sheet>

          </div>

        </div>
      </div>
    </v-img>

  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  name: "KreistagView",

  data() {
    return {
      name: 'Vorstand',
      background: require('../assets/VorstandUndRat.png'),
      vorstand: [
        {
          wahlbezirk: "010",
          image: require('../assets/stadtrat/010 - Helene Kranemann.jpg'),
          name: "Helene Kranemann"
        },
        {
          wahlbezirk: "020",
          image: require('../assets/stadtrat/020 - Lothar Pieper.png'),
          name: "Lothar Pieper"
        },
        {
          wahlbezirk: "030",
          image: require('../assets/stadtrat/030 - Mareike Pieper.jpg'),
          name: "Mareike Pieper"
        },
        {
          wahlbezirk: "040",
          image: require('../assets/stadtrat/040 - Boris Schmigowski.jpg'),
          name: "Boris Schmigowski"
        },
        {
          wahlbezirk: "050",
          image: require('../assets/stadtrat/050 - Jens Schmigowski.jpg'),
          name: "Jens Schmigowski"
        },
        {
          wahlbezirk: "060",
          image: require('../assets/stadtrat/060 - Wilhelm Kranemann.jpg'),
          name: "Wilhelm Kranemann"
        },
        {
          wahlbezirk: "070",
          image: require('../assets/stadtrat/070 - Jan Kranemann.jpg'),
          name: "Jan Kranemann"
        },
        {
          wahlbezirk: "080",
          image: require('../assets/stadtrat/080 - Christa Kranemann.jpg'),
          name: "Christa Kranemann"
        },


        {
          wahlbezirk: "090",
          image: require('../assets/stadtrat/090 - Rex Klingenberg.png'),
          name: "Rex Klingenberg"
        },
        {
          wahlbezirk: "100",
          image: require('../assets/stadtrat/100 - Heinz Albrecht.jpg'),
          name: "Heinz Albrecht"
        },
        {
          wahlbezirk: "110",
          image: require('../assets/stadtrat/110 - Lisa Kranemann.jpg'),
          name: "Lisa Kranemann"
        },
        {
          wahlbezirk: "120",
          image: require('../assets/stadtrat/120 - Christa Schmigowski.jpg'),
          name: "Christa Schmigowski"
        },
        {
          wahlbezirk: "130",
          image: require('../assets/stadtrat/130 - Manfred Niemeyer.jpg'),
          name: "Manfred Niemeyer"
        },
        {
          wahlbezirk: "140",
          image: require('../assets/stadtrat/140 - Tim Kranemann.jpg'),
          name: "Tim Kranemann"
        },
        {
          wahlbezirk: "160",
          image: require('../assets/stadtrat/160 - Paul Joppen.jpg'),
          name: "Paul Joppen"
        },
        {
          wahlbezirk: "170",
          image: require('../assets/stadtrat/170 - Holger Bosmans.jpg'),
          name: "Holger Bosmans"
        },
        {
          wahlbezirk: "180",
          image: require('../assets/stadtrat/180 - Marianne Albrecht.jpg'),
          name: "Marianne Albrecht"
        },
        {
          wahlbezirk: "190",
          image: require('../assets/stadtrat/190 - Marc Schütter.jpeg'),
          name: "Marc Schütter"
        }
      ],

      person: '',
      model: null
    }
  },
  components: {
    HeaderComponent
  },
  computed: {

  },
  methods: {

  },
  created() {
    this.$store.state.routername = "Stadtrat"
  },
  mounted() {
  }
}
</script>

<style scoped>
.card {
  width: 90%;
  height: 500px;
  background-color: transparent;
  border-radius: 20px;
}

.cardMobile {
  background-color: transparent;
  border-radius: 20px;
}

.image {
  border-radius: 20px;
  box-shadow: 2px 4px 6px black;
}

.cardOne {
  transform: scale(1.1);
  transition: transform 0.5s ease;
}

</style>
