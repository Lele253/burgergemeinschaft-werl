<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 85vh; position: fixed">
      <div class="d-flex align-center justify-center"
           style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100%">

        <div class="hidden-xs">
          <v-row class="d-flex justify-center mt-n15" style="width: 100%;">
            <v-col cols="12">
              <h1 class="text-center mt-n12 mb-5">Ihre Meinung ist uns wichtig</h1>
            </v-col>
            <v-col cols="4" style="height: 500px; overflow-y: auto">
              <v-card
                  v-for="kommentar in kommentare" :key="kommentar"
                  :class="{ 'selected-card': kommentar.selected }"
                  class="mb-3 cardArtikelVorschau d-flex justify-center"
                  @click="selectCard(kommentar); this.kommentar = kommentar">

                <v-row class="mx-0" style="width: 100%">
                  <v-col cols="3">
                    <v-img :src="kommentar.img" class="mx-2 my-2 image"/>
                  </v-col>

                  <v-col class="mt-3 d-flex align-center" cols="9">
                    <h3 class="text-center mx-5">{{ kommentar.titel }}</h3>
                  </v-col>

                  <v-col class="d-flex justify-end" cols="12">
                    <p class="mr-10">{{ kommentar.datum }}</p>
                  </v-col>
                </v-row>
              </v-card>


            </v-col>
            <v-col class="d-flex justify-center" cols="7">
              <v-card class="card mx-0">

                <v-list class="list">
                  <v-list-item>
                    <h3 class="text-center mt-5 mx-8 text-white">
                      {{ kommentar.titel }}
                    </h3>
                  </v-list-item>


                  <v-list-item class="text-center mt-2">

                    <v-virtual-scroll :height="420" :items="[kommentar.text]">
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

        <div class="hidden-sm-and-up">
          <h3 class="text-center mt-10">Ihre Meinung ist uns wichtig</h3>
          <div class="d-flex justify-center pb-5">
            <div style="overflow-y: scroll; height: 80vh">
              <v-card-item>
                <v-expansion-panels>
                  <v-expansion-panel
                      v-for="kommentar in kommentare"
                      :key="kommentar"
                      class="text-center mt-3 mb-2"
                      style=" background-color: #2F53A7; color: white; border-radius: 20px">
                    <v-expansion-panel-title class="text-center">
                      <h4 class="text-center">{{ kommentar.titel }}</h4>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      {{ kommentar.text }}
                    </v-expansion-panel-text>
                    <h4 class="text-grey">{{ kommentar.autor }}, {{ kommentar.datum }}</h4>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-card-item>
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
      name: 'Kommentare',

      kommentare: this.$store.state.kommentare,
      kommentar: '',
      background: require('../assets/aktuelles.jpeg'),
      ausgewählterBeitragText: '',
      ausgewählterBeitragTitel: ''
    }
  },
  components: {
    HeaderComponent
  },
  methods: {
    setErstenBeitrag() {
      this.kommentar = this.kommentare[0]
    },
    setBeitrag(itemId) {
      this.ausgewählterBeitragText = this.kommentare[itemId - 1].text
      this.ausgewählterBeitragTitel = this.kommentare[itemId - 1].titel
    },
    convertTitle(string) {
      if (string.length > 70) {
        return string.substring(0, 70) + '...'
      }
      return string
    },
    selectCard(selectedKommentar) {
      this.kommentare.forEach(kommentar => {
        kommentar.selected = (kommentar === selectedKommentar); // Setze 'selected' auf true, wenn es der ausgewählte Beitrag ist, ansonsten auf false
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

.image {
  border-radius: 20px;
}
</style>
