<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 100vh; position: fixed; width: 100vw; margin-top: -160px">
      <div class="d-flex justify-center" style="background-color: rgba(255,255,255,0);height: 100%; width: 100%">

        <!--          Vorstand / Rat-->

        <div class="d-flex mt-5 justify-center"
             style="z-index: 1000; width: 100%; height: 50px">
          <h1 class="text-end mr-2" style="cursor: pointer; margin-top: 160px" @click="$router.push('/vorstand')">
            Vorstand</h1>
          <h1 class="text-center" style="margin-top: 160px">/</h1>
          <h1 class="text-start text-white ml-2"
              style="cursor: pointer; margin-top: 160px; text-shadow: 2px 2px 2px black"
              @click="$router.push('/rat')">Rat</h1>
        </div>

        <!--        Main Card-->


        <v-row class="justify-center"
               style="width: 100%; position:absolute;margin-top: 230px; z-index: 1200">
          <v-col cols="3">
            <v-card class="mainCard ">
              <v-img :src="person.bild" cover/>
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
            style="position: fixed;bottom: 4%;width: 100%; height: 100%"

        >
          <v-slide-group
              v-model="model"
              center-active
              class="slide-group pa-4 d-flex align-end"
              style="height: 100%; width: 94%"
          >
            <v-slide-group-item
                v-for="n in $store.state.rat"
                :key="n"
                v-slot="{ isSelected, toggle }"
            >
              <div
                  class="ma-4"
                  style="height: 200px; width: 200px"
              >
                <div style="width: 140px" @click="this.person = n">
                  <v-img :class="{ 'selectedCard': isSelected }" :src="n.bild" class="bild"
                         @click="toggle"/>
                </div>
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>

      </div>
    </v-img>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  data() {
    return {
      name: "Unser Team: Rat",
      background: require('../assets/VorstandUndRat.png'),
      model: [],

      person: {}
    }
  },
  components: {
    HeaderComponent
  },
  methods: {
    setFirstPerson() {
      this.person = this.$store.state.rat[0];
    }
  },
  created() {
    this.$store.state.routername = this.name
    this.setFirstPerson()
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
  min-width: 80px;
  min-height: 80px;
}

.slide-group > :first-child > :first-child,
.slide-group > :last-child > :first-child {
  font-size: 80px;
  min-width: 80px;
}

.selectedCard {
  border: 5px solid #2F53A7;
}

.bild {
  border-radius: 20px;
}

.mainCard {
  height: 370px;
  width: 100%;
  max-width: 300px;
  border-radius: 20px;
}

.secondCard {
  height: 370px;
  width: 100%;
  border-radius: 20px;
  background-color: #2F53A7;
}

</style>
