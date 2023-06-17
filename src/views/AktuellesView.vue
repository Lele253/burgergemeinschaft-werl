<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 85vh;position:fixed;">
      <div class="d-flex align-center" style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100%">
        <v-row class="d-flex justify-center mt-n15 mx-0" style="width: 100%;">
          <v-col cols="12">
            <h1 class="text-center mt-n12 mb-5">Bleib immer auf dem Laufendem</h1>
          </v-col>
          <v-col class="hidden-sm-and-down" cols="4" style="height: 500px; overflow-y: auto">
            <v-row v-for="beitrag in beiträge" :key="beitrag" class="d-flex justify-center">
              <v-card
                  :class="{ 'selected-card': beitrag.selected }"
                  class="mt-3 cardArtikelVorschau"
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

          <v-col class="hidden-md-and-up" cols="10">
            <v-sheet
                class="mx-auto"
                color="transparent"
                max-width="600"
            >
              <v-slide-group
                  v-model="beitrag"
                  class="pa-4"
              >
                <v-slide-group-item
                    v-for="beitrag in beiträge"
                    :key="beitrag"
                >
                  <v-card
                      :class="{ 'selected-card': beitrag.selected }"
                      @click="selectCard(beitrag); this.beitrag = beitrag">
                    class="mt-3 mr-3"
                    height="200"
                    width="200"
                    <v-col class="mt-3" cols="12">
                      <h3 class="text-center mx-5 text-white" style="color: white">{{ beitrag.titel }}</h3>
                    </v-col>
                    <v-col class="d-flex justify-end" cols="12">
                      <p class="mr-10 text-white">{{ beitrag.datum }}</p>
                    </v-col>
                  </v-card>
                </v-slide-group-item>
              </v-slide-group>
            </v-sheet>
          </v-col>
        </v-row>
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
