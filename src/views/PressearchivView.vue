<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 86vh">
      <div class="d-flex align-center" style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100%">

        <v-row class="d-flex justify-center mt-n15" style="width: 100%;">
          <v-col cols="4" style="height: 500px; overflow-y: auto">
            <v-card
                v-for="artikel in pressearchiv" :key="artikel"
                :class="{ 'selected-card': artikel.selected }"
                class="mt-3 cardArtikelVorschau d-flex justify-center"
                @click="selectCard(artikel); this.beitrag = artikel">

              <v-row>
                <v-col cols="3">
                  <v-img :src="artikel.img" class="mx-2 my-2"/>
                </v-col>

                <v-col class="mt-3 d-flex align-center" cols="9">
                  <h3 class="text-center mx-5" style="color: black">{{ artikel.titel }}</h3>
                </v-col>

                <v-col class="d-flex justify-end" cols="12">
                  <p class="mr-10">{{ artikel.datum }}</p>
                </v-col>
              </v-row>
            </v-card>


          </v-col>
          <v-col class="d-flex justify-center" cols="6">
            <v-card class="card mx-0">

              <v-list->
                <v-list-item>
                  <h3 class="text-center mt-5 mx-8">
                    {{ beitrag.titel }}
                  </h3>
                  <h4 v-if="beitrag.untertitel != ''" class="text-center mt-5 mx-8">
                    {{ beitrag.untertitel }}
                  </h4>
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
    convertTitle(string) {
      if (string.length > 70) {
        return string.substring(0, 70) + '...'
      }
      return string
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
  background-color: rgba(245, 245, 220, 0.5);
}

.selected-card {
  background-color: lightskyblue; /* Hier kannst du die gewünschte Hintergrundfarbe für die ausgewählte Karte festlegen */
}

.card {
  width: 90%;
  height: 100%;
  max-height: 500px;
  background-color: lightskyblue;
  box-shadow: 4px 6px 8px black;
  border-radius: 20px 20px 20px 20px;
}

.cardActive {
  background-color: lightskyblue;
}
</style>
