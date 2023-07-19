<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 100vh; position:fixed;">
      <div class="d-flex  justify-center"
           style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100%; padding-top: 125px">

        <div v-if="!$store.state.mobile">
          <v-row class="d-flex justify-center mt-n15" style="width: 100%;">
            <v-col cols="12">
              <h1 class="text-center mt-n12 mb-5">Ein Blick in die Vergangenheit und die Gegenwart</h1>
            </v-col>
            <v-col cols="4" style="height: 500px; overflow-y: auto">
              <v-card
                  style="width: 95%"
                  v-for="artikel in pressearchiv" :key="artikel"
                  :class="{ 'selected-card': artikel.selected }"
                  class="mb-3 cardArtikelVorschau d-flex justify-center"
                  @click="selectCard(artikel); this.beitrag = artikel">

                <v-row>
                  <v-col class="d-flex align-center" cols="3">
                    <v-img :src="artikel.img" class="mx-2 my-2 image"/>
                  </v-col>

                  <v-col class="mt-3 d-flex align-center" cols="9">
                    <h3 class="text-center mx-5">{{ artikel.titel }}</h3>
                  </v-col>

                  <v-col class="d-flex justify-end" cols="12">
                    <p class="mr-10">{{ artikel.datum }}</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>

            <v-col class="d-flex justify-center" cols="7">
              <v-card class="card mx-0">
                <v-list class="list">
                  <v-list-item>
                    <h3 class="text-center mt-5 mx-8 text-white">
                      {{ beitrag.titel }}
                    </h3>
                    <h4 v-if="beitrag.untertitel != ''" class="text-center mt-5 mx-8 text-white">
                      {{ beitrag.untertitel }}
                    </h4>
                  </v-list-item>

                  <v-list-item class="text-center mt-2">
                    <v-virtual-scroll :height="350" :items="[beitrag.text]">
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
        <div v-if="$store.state.mobile"  style=" width: 100vw; padding-top: 125px">
          <h3 class="text-center">Ein Blick in die Vergangenheit <br> und die Gegenwart</h3>
            <div  class="d-flex justify-center">
              <div style="overflow-y:scroll; height: 100vh; padding-bottom: 120px">
                <v-card v-for="beitrag in pressearchiv" :key="beitrag" class="mx-10 mt-10"
                        style="background-color: #2F53A7; border-radius: 20px ">
                  <v-row class="d-flex justify-center mx-0" style="width: 100%;">
                    <v-col class="mt-4" cols="10">
                      <h3 class="text-white text-center">{{ beitrag.titel }}</h3>
                    </v-col>
                    <v-col class="pt-0" cols="10">
                      <p class="text-center" style="color: #69a6f1">{{ beitrag.autor }}</p>
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
                      <p style="color: #69a6f1" class="text-center"> {{ beitrag.datum }}</p>
                    </v-col>
                  </v-row>
                </v-card>
              </div>

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
      name: "Pressearchiv",
      background: require('../assets/VorstandUndRat.png'),

      pressearchiv: this.$store.state.pressearchiv,
      beitrag: ''
    }
  },
  components: {
    HeaderComponent
  },
  methods: {
    setErstenBeitrag() {
      this.beitrag = this.pressearchiv[0]
    },
    selectCard(selectedBeitrag) {
      this.pressearchiv.forEach(beitrag => {
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
  border-radius: 20px;
  box-shadow: 2px 4px 6px black;
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

.image {
  border-radius: 20px;
}
</style>
