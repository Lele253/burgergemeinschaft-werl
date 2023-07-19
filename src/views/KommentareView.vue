<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 100vh; position: fixed">
      <div class="d-flex justify-center "
           style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100% ;" >

        <div v-if="!$store.state.mobile" style="padding-top: 125px" >
          <v-row class="d-flex justify-center mt-n15" style="width: 100%; ">
            <v-col cols="12">
              <h1 class="text-center mt-n12 mb-5">Ihre Meinung ist uns wichtig</h1>
            </v-col>
            <v-col cols="4" style="height: 500px; overflow-y: auto">
              <v-card
                  style="width: 95%"
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


        <div v-if="$store.state.mobile" class="d-flex justify-center" style=" width: 100vw ;">
          <div style="overflow-y:scroll; height: 100vh; padding-bottom: 125px">
            <v-card v-for="beitrag in kommentare" :key="beitrag" class="mx-10 mt-10"
                    style="background-color: #2F53A7; border-radius: 20px">
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
