<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 81vh">
      <div class="d-flex align-center" style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100%">

        <v-row class="d-flex justify-center mt-n15" style="width: 100%;">
          <v-col cols="4" style="height: 500px; overflow-y: auto">
            <v-row v-for="beitrag in beiträge" :key="beitrag" class="d-flex justify-center">
              <v-card
                  :class="{ 'selected-card': beitrag.selected }"
                  class="mt-3 cardArtikelVorschau"
                  @click="selectCard(beitrag); this.beitrag = beitrag"
              >
                <v-col class="mt-3" cols="12">
                  <h3 class="text-center mx-5" style="color: black">{{ beitrag.titel }}</h3>
                </v-col>
                <v-col class="d-flex justify-end" cols="12">
                  <p class="mr-10">{{ beitrag.datum }}</p>
                </v-col>
              </v-card>
            </v-row>


          </v-col>
          <v-col class="d-flex justify-center" cols="6">
            <v-card class="card mx-0">

              <v-list->
                <v-list-item>
                  <h3 class="text-center mt-5 mx-8">
                    {{ beitrag.titel }}
                  </h3>

                </v-list-item>

                <v-list-item class="text-center mt-2">

                  <v-virtual-scroll :height="420" :items="[beitrag.text]">
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
  background-color: rgba(245, 245, 220, 0.5);
}

.selected-card {
  background-color: lightskyblue; /* Hier kannst du die gewünschte Hintergrundfarbe für die ausgewählte Karte festlegen */
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
