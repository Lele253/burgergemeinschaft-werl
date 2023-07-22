<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 100vh; width: 100vw; position:fixed;">

      <div style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100%; ">

        <!--        Desktop-->

        <div v-if="!$store.state.mobile" style="padding-top: 125px">
          <v-row class="d-flex justify-center mt-n15 mx-0" style="width: 100vw;height: 100%">
            <v-col cols="12">
              <h1 class="text-center mt-n12 mb-5">Bleib immer auf dem Laufendem</h1>
            </v-col>

            <v-col cols="4" style="overflow-y: scroll !important;">
              <div style="height: 65%; overflow-y: scroll !important;">

                <v-card
                    v-for="beitrag in beiträge"
                    :key="beitrag" :class="{ 'selected-card': beitrag.selected }"
                    class="mb-3 cardArtikelVorschau d-flex justify-center"
                    style="width: 95%"
                    @click="selectCard(beitrag); this.beitrag = beitrag">

                  <v-row class="mx-0" style="width: 100%">
                    <v-col cols="3">
                      <v-img :src="beitrag.image" class="mx-2 my-2 image"/>
                    </v-col>

                    <v-col class="mt-3 d-flex align-center" cols="9">
                      <h3 class="text-center mx-5">{{ beitrag.titel }}</h3>
                    </v-col>

                    <v-col class="d-flex justify-end" cols="12">
                      <p v-if="beitrag !== this.beitrag" class="mr-10 text-black">{{ beitrag.datum }}</p>
                      <p v-if="beitrag == this.beitrag" class="mr-10 text-white">{{ beitrag.datum }}</p>
                    </v-col>
                  </v-row>
                </v-card>
              </div>
            </v-col>

            <v-col class="d-flex justify-center" cols="7">
              <v-card class="card mx-0">
                <v-list class="list">
                  <v-list-item>
                    <h3 class="text-center mt-5 mx-8 text-white">
                      {{ beitrag.titel }}
                    </h3>

                  </v-list-item>

                  <v-list-item class="text-center mt-2">

                    <v-virtual-scroll :height="420" :items="[beitrag.inhalt]">
                      <template v-slot:default="{ item }">
                        <p class="mx-10 text-white">{{ item }}</p>
                      </template>
                    </v-virtual-scroll>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!--        Mobile-->


        <div v-if="$store.state.mobile" class="d-flex justify-center" style=" width: 100vw">
          <div style="overflow-y:scroll; height: 100vh; padding-bottom: 250px">
            <v-card v-for="beitrag in beiträge" :key="beitrag" class="mx-10 mt-10"
                    style="background-color: #2F53A7; border-radius: 20px">
              <v-row class="d-flex justify-center mx-0" style="width: 100%;">
                <v-col class="mt-4" cols="10">
                  <h3 class="text-white text-center">{{ beitrag.titel }}</h3>
                </v-col>
                <v-col cols="12">
                  <v-expansion-panels>
                    <v-expansion-panel
                        :title="beitrag.titel"
                        class="text-white"
                        color="#2F53A7"
                        style=" background-color: rgba(97,153,218,0.73); border: #69a6f1 solid 2px; border-radius: 20px  "
                    >
                      <v-expansion-panel-text class="text-center">{{ beitrag.inhalt }}</v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
                <v-col cols="10">
                  <p style="color: #69a6f1"> {{ beitrag.datum }}</p>
                </v-col>
              </v-row>
            </v-card>
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
  data() {
    return {
      name: 'Aktuelles',

      panel: 0,
      beiträge: [],
      background: require('../assets/aktuelles.jpeg'),
      beitrag: {inhalt: "Bitte wählen Sie einen beitrag aus"}
    }
  },
  components: {
    HeaderComponent
  },
  methods: {
    async getAllBeiträge() {
      try {
        const response = await axios.get('/aktuelles')
        this.$store.state.beiträge = response.data

        this.beiträge = this.$store.state.beiträge;

        this.beiträge.forEach(item => {
          item.image = `data:image/jpeg;base64,${item.image}`;
        });
      } catch (e) {
        alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie Bitte den Administrator.")
      }

    },
    selectCard(selectedBeitrag) {
      this.beiträge.forEach(beitrag => {
        beitrag.selected = (beitrag === selectedBeitrag); // Setze 'selected' auf true, wenn es der ausgewählte Beitrag ist, ansonsten auf false
      });
    }
  },
  created() {
    this.$store.state.routername = this.name
    this.getAllBeiträge()
  }
}
</script>

<style scoped>
p {
  color: white;
  text-align: center;
}

.cardArtikelVorschau {
  min-height: 100px;
  width: 500px;
  background-color: #e3dede;
  box-shadow: 2px 4px 6px black;
  border-radius: 20px;
}


.selected-card {
  background-color: #2F53A7;
  color: white;
}

.selected-card > :first-child {
  background-color: #2F53A7;
  color: white;
}

.card {
  width: 90%;
  height: 500px;
  background-color: #2F53A7;
  box-shadow: 2px 4px 6px black;
  border-radius: 20px;
}

.cardActive {
  background-color: #2F53A7;
}

.list {
  background-color: #2F53A7;
}
</style>
