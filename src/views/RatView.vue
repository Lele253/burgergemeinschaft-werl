<template>
  <div>
    <HeaderComponent/>
    <v-img v-if="!$store.state.mobile" :src="background" cover
           style="height: 100vh; position: fixed; width: 100vw; margin-top: -160px">
      <div class="d-flex justify-center" style="background-color: rgba(255,255,255,0);height: 100%; width: 100%">

        <!--        Main Card-->


        <v-row class="justify-center"
               style="width: 100%; position:absolute;margin-top: 20vh; z-index: 1200">
          <v-col cols="3">
            <v-card class="mainCard ">
              <v-img :src="person.image" cover/>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card class="secondCard pa-5" style="overflow-y: scroll">
              <h2 class="text-center text-white">{{ person.name }}</h2>
              <p class="text-center pt-2" style="font-size: 18px; color: #dcdcdc">{{
                  person.titel
                }}
              </p>
              <v-card-item>
                <p class="pt-2 mx-10 text-white" style="text-align: justify; text-justify: inter-word;">
                  {{ person.vita }}
                </p>
              </v-card-item>
            </v-card>
          </v-col>

        </v-row>


        <!--        Slider-->


        <v-sheet
            class="bg-transparent d-flex justify-center"
            style="position: fixed;bottom: 0vh;width: 100%; height: 100%"
        >
          <v-slide-group
              v-model="model"
              center-active
              class="slide-group pa-4 d-flex align-end"
              style="height: 100%; width: 94%"
          >
            <v-slide-group-item
                v-for="n in rat"
                :key="n"
                v-slot="{ isSelected, toggle }"
            >
              <div
                  class="ma-4"
                  style="height: 200px; width: 200px"
              >
                <div style="width: 140px" @click="this.person = n">
                  <v-img :class="{ 'selectedCard': isSelected }" :src="n.image" class="bild"
                         @click="toggle"/>
                </div>
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>

      </div>
    </v-img>


    <v-img v-if="$store.state.mobile" :src="background" cover style="height: 100vh; position: fixed; width: 100vw; ">
      <div style="padding-top: 10px; padding-bottom: 120px; overflow: scroll;height: 100% ">
        <h2 class="text-center text-white mb-2">Unser Rat</h2>
        <v-row class="justify-center mx-0" style="width: 100%">

          <v-col v-for="x in $store.state.rat" :key="x.id" cols="10">
            <v-card
                style="box-shadow: 2px 4px 6px black; width: 100%; min-height: 450px; background-color: #2F53A7; border-radius: 20px">
              <v-img :src="x.image" cover style="height: 90% "></v-img>
              <div class="d-flex justify-center">
                <v-expansion-panels>
                  <v-expansion-panel
                      :title=" x.name"
                      class="text-white"
                      color="#2F53A7"
                      style=" background-color: rgba(97,153,218,0.73); border: #69a6f1 solid 2px; border-radius: 0px 0px 20px 20px ; "
                  >
                    <v-expansion-panel-text class="text-center">{{ x.vita }}</v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-img>

  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import axios from "axios";

export default {
  data() {
    return {
      name: "Rat",
      background: require('../assets/VorstandUndRat.png'),
      model: [],

      rat: [],

      person: {}
    }
  },
  components: {
    HeaderComponent,
  },
  mounted() {
    this.getAllRat()
  },
  methods: {
    async getAllRat() {
      const response = await axios.get('/rat')
      this.$store.state.rat = response.data

      this.rat = this.$store.state.rat

      this.rat.forEach(item => {
        item.image = `data:image/jpeg;base64,${item.image}`;
      });

      this.person = this.$store.state.rat[0]


    },

  },
  created() {
    this.$store.state.routername = this.name
  }
}
</script>

<style scoped>
.v-slide-group__wrapper {
  overflow-x: auto; /* Enables the horizontal scrollbar */
  /* Next lines hides scrollbar in different browsers for styling purposes */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.v-slide-group__wrapper::-webkit-scrollbar {
  display: none; /* Chrome opera and Safary */
  width: 0px;
  background: transparent;
}

.slide-group > :first-child,
.slide-group > :last-child {
  margin-top: auto;
  margin-bottom: auto;
  min-width: 80px;
}

.slide-group > :first-child > :first-child > :first-child,
.slide-group > :last-child > :first-child > :first-child {
  width: 0px;
  height: 0px;
}

.slide-group > :first-child > :first-child,
.slide-group > :last-child > :first-child {
  font-size: 0px;
  min-width: 80px;
}

.selectedCard {
  border: 5px solid #2F53A7;
}

.bild {
  border-radius: 20px;
}

.mainCard {
  height: 400px;
  width: 100%;
  max-width: 300px;
  border-radius: 20px;
}

.secondCard {
  height: 400px;
  width: 100%;
  border-radius: 20px;
  background-color: #2F53A7;
}

.selectedCardMobile {
  height: 900px;
}
</style>
