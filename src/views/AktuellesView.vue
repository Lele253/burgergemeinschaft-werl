<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 81vh">
      <div class="d-flex align-center" style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100%">

        <v-row class="d-flex justify-center mt-n15" style="width: 100%;">
          <v-col class="d-flex justify-center" cols="4">
            <v-virtual-scroll :item-height="30" :items="beiträge.sort((a, b) => a.id - b.id)" height="500px">
              <template v-slot="{ item }">
                <div class="d-flex justify-center">
                  <v-card v-if="item.titel == this.ausgewählterBeitragTitel" class="mt-3 cardArtikelVorschau cardActive"
                          @click="setBeitrag(item.id)">
                    <v-row>
                      <v-col class="mt-3" cols="12">
                        <h3 class="text-center mx-5" style="color: black">
                          {{ item.titel }}</h3>
                      </v-col>
                      <v-col class="d-flex justify-end" cols="12">
                        <p class="mr-10">{{ item.datum }}</p>
                      </v-col>
                    </v-row>

                  </v-card>

                  <v-card v-if="item.titel != this.ausgewählterBeitragTitel" class="mt-3 cardArtikelVorschau"
                          @click="setBeitrag(item.id)">

                    <v-row>
                      <v-col class="mt-3" cols="12">
                        <h3 v-if="item.titel != this.ausgewählterBeitragTitel" class="text-center mx-5"
                            style="color: black">
                          {{ item.titel }}</h3>
                      </v-col>
                      <v-col class="d-flex justify-end" cols="12">
                        <p class="mr-10">{{ item.datum }}</p>
                      </v-col>
                    </v-row>

                  </v-card>
                </div>
              </template>
            </v-virtual-scroll>

          </v-col>
          <v-col class="d-flex justify-center" cols="6">
            <v-card class="card mx-0">

              <v-list->
                <v-list-item-title>
                  <h3 class="text-center mt-5 mx-8">
                    {{ convertTitle(this.ausgewählterBeitragTitel) }}
                  </h3>

                </v-list-item-title>

                <v-list-item class="text-center mt-2">

                  <v-virtual-scroll :height="420" :items="[this.ausgewählterBeitragText]">
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
      name: 'Aktuelles',

      beiträge: this.$store.state.beiträge.sort((a, b) => b.id - a.id),

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
      this.ausgewählterBeitragText = this.beiträge[0].text
      this.ausgewählterBeitragTitel = this.beiträge[0].titel
    },
    setBeitrag(itemId) {
      this.ausgewählterBeitragText = this.beiträge[itemId - 1].text
      this.ausgewählterBeitragTitel = this.beiträge[itemId - 1].titel
    },
    convertTitle(string) {
      if (string.length > 70) {
        return string.substring(0, 70) + '...'
      }
      return string
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

.card {
  width: 90%;
  height: 100%;
  background-color: lightskyblue;
  box-shadow: 4px 6px 8px black;
  border-radius: 20px 20px 20px 20px;
}

.cardActive {
  background-color: lightskyblue;
}
</style>
