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
                      class="ml-5 mr-5 d-flex align-center card justify-center"
                      elevation="0"
                      width="300"
                      @click="toggle">
                    <div>
                      <h2 class="text-center">{{ p.name }}</h2>
                      <h5 class="text-center">{{ p.position }}</h5>
                      <v-img
                          :src="p.img"
                          class="image"
                          height="350" min-width="233"/>
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
                      <h5 class="text-center">{{ p.position }}</h5>
                      <v-img
                          :src="p.img" class="image" cover
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
  methods: {
    async getAllVorstand() {
      const response = await axios.get('/vorstand')
      this.$store.state.vorstand = response.data

      this.vorstand = this.$store.state.vorstand
    },
  },
  created() {
    this.$store.state.routername = this.name
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
  transform: scale(1.2);
  transition: transform 0.5s ease;
}

</style>