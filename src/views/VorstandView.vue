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
                    v-for="p in sortVorstand"
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
                      <h5 class="text-center">{{ p.position }}</h5>
                      <v-img
                          :src="p.image"
                          class="image mx-auto"
                          cover

                          height="370" width="243"/>
                    </div>
                    <div class="d-flex justify-center">
                      <a :href="'mailto:' + p.email" class="text-center pt-2  text-black mt-4"
                         style="text-align: justify; text-justify: inter-word;">
                        {{ p.email }}
                      </a>

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
                    v-for="p in sortVorstand"
                    :key="p"
                    v-slot="{ isSelected}">
                  <v-card
                      :class="{ 'cardOne': isSelected }"
                      class="ml-5 mr-5 d-flex align-center cardMobile justify-center"
                      elevation="0">
                    <div>
                      <h2 class="text-center">{{ p.name }}</h2>
                      <h5 class="text-center">{{ p.position }}</h5>
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
import axios from "axios";

export default {
  name: "UnserTeamViewNeu.vue",

  data() {
    return {
      name: 'Vorstand',
      background: require('../assets/VorstandUndRat.png'),
      vorstand: [],
      person: '',
      model: null
    }
  },
  components: {
    HeaderComponent
  },
  computed: {
    sortVorstand: function () {
      const order = ["Vorsitzender", "Vorsitzende", "Stellv. Vorsitzender", "Stellv. Vorsitzende", "Schriftführerin", "Schriftführer", "Kassenwart", "Kassenwärtin", "Besitzer", "Besitzerin"];

      return [...this.vorstand].sort((a, b) => {
        const positionA = order.indexOf(a.position);
        const positionB = order.indexOf(b.position);
        return positionA - positionB;
      });
    }
  },
  methods: {
    async getAllVorstand() {
      try {
        const response = await axios.get('/vorstand')
        this.$store.state.vorstand = response.data

        this.vorstand = this.$store.state.vorstand

        this.vorstand.forEach(item => {
          item.image = `data:image/jpeg;base64,${item.image}`;
        });
      } catch (e) {
        alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie Bitte den Administrator.")
      }
    },
  },
  created() {
    this.$store.state.routername = this.name
  },
  mounted() {
    this.getAllVorstand()
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
