<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 81vh">
      <div class="d-flex align-center" style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100%">

        <v-row class="d-flex justify-center mt-n15" style="width: 100%;">
          <!--          <v-col class="d-flex justify-center" cols="4">
                      <v-virtual-scroll :item-height="30" :items="$store.state.kommentare" height="500px">
                        <template v-slot="{ item }">
                          <div class="d-flex justify-center">
                            <v-card v-if="item.titel == this.ausgewählterBeitragTitel" class="mt-3 cardArtikelVorschau cardActive"
                                    @click="setBeitrag(item.id)">
                              <v-row>
                                <v-col cols="3">
                                  <div class="d-flex align-center">
                                    <v-img :src="item.img" class="mx-2 my-2"/>
                                  </div>
                                </v-col>
                                <v-col class="mt-3 d-flex align-center" cols="9">
                                  <h3 class="text-center mx-5" style="color: black">
                                    {{ item.titel }}</h3>
                                </v-col>
                                <v-col class="d-flex justify-center" cols="12">
                                  <p class="mr-10">{{ item.datum }}</p>
                                </v-col>
                              </v-row>

                            </v-card>

                            <v-card v-if="item.titel != this.ausgewählterBeitragTitel" class="mt-3 cardArtikelVorschau"
                                    @click="setBeitrag(item.id)">

                              <v-row>
                                <v-col cols="3">
                                  <div class="d-flex align-center">
                                    <v-img :src="item.img" class="mx-2 my-2"/>
                                  </div>
                                </v-col>
                                <v-col class="mt-3 d-flex align-center" cols="9">
                                  <h3 class="text-center mx-5" style="color: black">
                                    {{ item.titel }}</h3>
                                </v-col>
                                <v-col class="d-flex justify-center" cols="12">
                                  <p class="mr-10">{{ item.datum }}</p>
                                </v-col>
                              </v-row>

                            </v-card>
                          </div>
                        </template>
                      </v-virtual-scroll>

                    </v-col>-->
          <v-col cols="4" style="height: 500px; overflow-y: auto">
            <v-card
                v-for="kommentar in kommentare" :key="kommentar"
                :class="{ 'selected-card': kommentar.selected }"
                class="mt-3 cardArtikelVorschau d-flex justify-center"
                @click="selectCard(kommentar); this.kommentar = kommentar">

              <v-row>
                <v-col cols="3">
                  <v-img :src="kommentar.img" class="mx-2 my-2"/>
                </v-col>

                <v-col class="mt-3 d-flex align-center" cols="9">
                  <h3 class="text-center mx-5" style="color: black">{{ kommentar.titel }}</h3>
                </v-col>

                <v-col class="d-flex justify-end" cols="12">
                  <p class="mr-10">{{ kommentar.datum }}</p>
                </v-col>
              </v-row>
            </v-card>


          </v-col>
          <!--          <v-col class="d-flex justify-center" cols="6">
                      <v-card class="card mx-0">

                        <v-list->
                          <v-list-item>
                            <h3 class="text-center mt-5 mx-8">
                              {{ kommentar.titel }}
                            </h3>

                          </v-list-item>

                          <v-list-item class="text-center mt-2" style="overflow-y: auto; height: 400px">
                            <p class="mx-10">{{ kommentar.text }}</p>
                          </v-list-item>
                        </v-list->

                      </v-card>
                    </v-col>-->
          <v-col class="d-flex justify-center" cols="6">
            <v-card class="card mx-0">

              <v-list->
                <v-list-item>
                  <h3 class="text-center mt-5 mx-8">
                    {{ kommentar.titel }}
                  </h3>
                </v-list-item>


                <v-list-item class="text-center mt-2">

                  <v-virtual-scroll :height="420" :items="[kommentar.text]">
                    <template v-slot:default="{ item }">
                      <p class="mx-10">{{ item }}</p>
                    </template>
                  </v-virtual-scroll>
                </v-list-item>
              </v-list->

            </v-card>
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
  background-color: rgba(245, 245, 220, 0.5);
}

.selected-card {
  background-color: lightskyblue;
}

.card {
  width: 90%;
  height: 100%;
  height: 500px;
  background-color: lightskyblue;
  box-shadow: 4px 6px 8px black;
  border-radius: 20px 20px 20px 20px;
}

.cardActive {
  background-color: lightskyblue;
}
</style>
