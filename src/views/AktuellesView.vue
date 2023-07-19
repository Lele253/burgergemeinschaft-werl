<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 100vh;position:fixed;">

      <div class="d-flex align-center"
           style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100%">

        <!--        Desktop-->

        <div v-if="!$store.state.mobile">
          <v-row class="d-flex justify-center mt-n15 mx-0" style="width: 100%;">
            <v-col cols="12">
              <h1 class="text-center mt-n12 mb-5">Bleib immer auf dem Laufendem</h1>
            </v-col>
            <v-col cols="4" style="height: 500px; overflow-y: auto">
              <v-row v-for="beitrag in beiträge" :key="beitrag" class="d-flex justify-center">
                <v-card
                    :class="{ 'selected-card': beitrag.selected }"
                    class="mb-3 cardArtikelVorschau"
                    @click="selectCard(beitrag); this.beitrag = beitrag">
                  <v-col class="mt-3" cols="12">
                    <h3 class="text-center mx-5">{{ beitrag.titel }}</h3>
                  </v-col>
                  <v-col class="d-flex justify-end" cols="12">
                    <p class="mr-10">{{ beitrag.datum }}</p>
                  </v-col>
                </v-card>
              </v-row>
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

                    <v-virtual-scroll :height="420" :items="[beitrag.text]">
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

        <!--        <div class="hidden-sm-and-up">
                  <h3 class="text-center mt-10">Bleib immer auf dem Laufenden</h3>
                  <div class="d-flex justify-center">
                    <div style="overflow-y: scroll; height: 80vh">
                      <v-card-item>
                        <v-expansion-panels>
                          <v-expansion-panel
                              v-for="beitrag in beiträge"
                              :key="beitrag"
                              :text="beitrag.text"
                              :title="beitrag.titel"
                              class="text-center mt-3 mb-2"
                              style=" background-color: #2F53A7; color: white; border-radius: 20px"
                          ></v-expansion-panel>
                        </v-expansion-panels>
                      </v-card-item>
                    </div>
                  </div>
                </div>-->

        <!--        Mobile Neu-->

        <div v-if="$store.state.mobile" class="d-flex justify-center" style=" width: 100vw">
          <div style="overflow-y:scroll; height: 100vh; padding-bottom: 120px">
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
                      <v-expansion-panel-text class="text-center">{{ beitrag.text }}</v-expansion-panel-text>
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

export default {
  data() {
    return {
      name: 'Aktuelles',

      panel: 0,
      beiträge: this.$store.state.beiträge.sort((a, b) => b.id - a.id),
      background: require('../assets/aktuelles.jpeg'),
      beitrag: {}
    }
  },
  components: {
    HeaderComponent
  },
  methods: {
    setErstenBeitrag() {
      this.beitrag = this.beiträge[0]
    },
    selectCard(selectedBeitrag) {
      this.beiträge.forEach(beitrag => {
        beitrag.selected = (beitrag === selectedBeitrag); // Setze 'selected' auf true, wenn es der ausgewählte Beitrag ist, ansonsten auf false
      });
    }
  },
  created() {
    this.$store.state.routername = this.name
    this.setErstenBeitrag()
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

.cardArtikelVorschauSlider {
  min-height: 100px;
  width: 100px;
  background-color: white;
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
