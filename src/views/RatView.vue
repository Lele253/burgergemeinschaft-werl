<template>
  <div>
    <HeaderComponent/>
    <v-img v-if="!$store.state.mobile" :src="background" cover
           style="height: 100vh; position: fixed; width: 100vw; padding-bottom: 160px">
      <div style="background-color: rgba(255,255,255,0);height: 100%; width: 100%">

        <v-row class="mx-0 mt-3 justify-center" style="height: 60%; width: 100vw">
          <v-col cols="2" md="3" style="height: 100%">
            <v-card style="height: 100% ; border-radius: 20px ;max-width: 300px; box-shadow: 2px 4px 6px black">
              <v-img :src="selectedPerson.image" cover
                     style="width: 100%; height: 100%; "></v-img>
            </v-card>
          </v-col>
          <v-col cols="6" md="6">
            <v-card style="background-color: #2F53A7; height: 100%;border-radius: 20px ; box-shadow: 2px 4px 6px black">
              <v-row class="mx-0" style="width: 100%;">
                <v-col class="mt-2 d-flex justify-center" cols="11">
                  <h2 class="text-white">{{ selectedPerson.name }}</h2>
                </v-col>
                <v-col class="mt-2 " cols="1">
                  <a :href="'mailto:'+ selectedPerson.email " target="_blank">
                    <Icon class="ml-n5" icon="line-md:email-twotone" style="color: white; font-size: 50px"
                    />
                  </a>


                </v-col>

                <v-col class="mt-n10 d-flex justify-center" cols="11">
                  <h4 class="text-white">{{ selectedPerson.titel }}</h4>
                </v-col>

                <v-col class="" cols="12">
                  <div>
                    <p class="mx-6 text-white">
                      {{ selectedPerson.vita }}
                    </p>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12" style="height: 100%">
            <v-sheet
                class="mx-auto mt-n2"
                style=" background-color: transparent;width: 90%"


            >
              <v-slide-group
                  v-model="model"
                  center-active
                  class="pa-4"
                  show-arrows
                  style="height:240px"
              >
                <v-slide-group-item
                    v-for="person in rat"
                    :key="person.id"
                    v-slot="{ isSelected, toggle }"
                    style="height: 100%"

                >
                  <v-card
                      :class="isSelected ? 'aktiviert' : 'nichtAktiviert'"
                      class="ma-4"
                      style="height: 88%; border-radius: 20px;box-shadow: 2px 4px 6px black"
                      width="130"
                      @click=" toggle "

                  >
                    <v-img :src="person.image" cover @click="selectedPerson = person"></v-img>
                  </v-card>
                </v-slide-group-item>
              </v-slide-group>
            </v-sheet>
          </v-col>
        </v-row>


      </div>
    </v-img>


    <v-img v-if="$store.state.mobile" :src="background" cover style="height: 100vh; position: fixed; width: 100vw; ">
      <div style="padding-top: 10px; padding-bottom: 120px; overflow: scroll;height: 100% ">
        <h2 class="text-center text-white mb-2">Unser Rat</h2>
        <v-row class="justify-center mx-0" style="width: 100%">

          <v-col v-for="x in sortRat" :key="x.id" cols="8" sm="5">
            <v-card
                style="box-shadow: 2px 4px 6px black; width: 100%;  background-color: #2F53A7; border-radius: 20px; ">
              <v-img :src="x.image" cover style="height: 90% ; "></v-img>
              <div class="d-flex justify-center">
                <v-expansion-panels>
                  <v-expansion-panel
                      :title=" x.name"
                      class="text-white"
                      color="#2F53A7"
                      style=" background-color: rgba(97,153,218,0.73); border: #69a6f1 solid 2px; border-radius: 0px 0px 20px 20px ; "
                  >
                    <v-expansion-panel-text class="text-center"><a :href="'mailto:'+x.email"> {{ x.email }}</a>
                    </v-expansion-panel-text>
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
import {Icon} from '@iconify/vue';

export default {
  data() {
    return {
      name: "Rat u. Ausschüsse",
      background: require('../assets/VorstandUndRat.png'),
      model: [],


      rat: [],

      selectedPerson: {}
    }
  },
  components: {
    HeaderComponent, Icon,

  },
  mounted() {
    this.getAllRat()

  },
  computed: {

    sortRat: function () {
      const order = ["Vorsitzender", "Stellv. Vorsitzender"];

      const vorsitzende = [];
      const rest = [];

      this.rat.forEach((ratObj) => {
        if (order.includes(ratObj.titel)) {
          vorsitzende.push(ratObj);
        } else {
          rest.push(ratObj);
        }
      });

      vorsitzende.sort((a, b) => b.titel.localeCompare(a.titel));
      rest.sort((a, b) => a.titel.localeCompare(b.titel));
      console.log([...vorsitzende, ...rest])
      return [...vorsitzende, ...rest];

    }
  },

  methods: {
    async getAllRat() {
      try {
        const response = await axios.get('/rat')
        this.$store.state.rat = response.data

        this.rat = this.$store.state.rat

        this.rat.forEach(item => {
          item.image = `data:image/jpeg;base64,${item.image}`;
        });
        this.person = this.$store.state.rat[0]
        this.selectedPerson = this.rat[0]
      } catch (e) {
        alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie Bitte den Administrator.")
      }


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
  box-shadow: 4px 4px 4px black;

}

.mainCard {
  height: 400px;
  width: 100%;
  max-width: 300px;
  border-radius: 20px;
  box-shadow: 4px 6px 8px black;
}

.secondCard {
  height: 400px;
  width: 100%;
  border-radius: 20px;
  background-color: #2F53A7;
  box-shadow: 4px 6px 8px black;
}

.selectedCardMobile {
  height: 900px;
}

.aktiviert {
  border: blue solid 3px;
  transform: scale(1.08);
  transition: transform 0.5s ease;
}
</style>
