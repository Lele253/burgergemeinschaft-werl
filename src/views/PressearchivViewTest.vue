<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 81vh">
      <div class="d-flex align-center" style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100%">
        <div>
          <!--        BeitragCard-->

          <div class="d-flex justify-center mt-n5" style="width: 100vw">
            <v-card class="card">
              <v-card-item>
                <h3 class="text-center">{{ beitrag.titel }}</h3>
              </v-card-item>

              <v-card-item v-if="beitrag.untertitel != ''">
                <h4 class="text-center">{{ beitrag.untertitel }}</h4>
              </v-card-item>

              <v-card-item>
                <p class="text-center mx-2 my-2" style="overflow-y: scroll; height: 325px">
                  {{ beitrag.text }}
                </p>
              </v-card-item>
            </v-card>
          </div>


          <!--        Slider-->

          <div>
            <v-sheet
                class="mx-auto mt-8"
                color="transparent"
                max-height="20vh"
                max-width="60vw"
            >
              <v-slide-group
                  v-model="beitrag"
                  class="pa-4"
                  selected-class="bg-success"
                  show-arrows
              >
                <v-slide-group-item
                    v-for="beitrag in pressearchiv"
                    :key="beitrag">
                  <v-card
                      :class="{ 'selected-card': beitrag.selected }"
                      class="ml-3 d-flex align-center"
                      height="100"
                      width="20vw" @click="selectCard(beitrag); this.beitrag = beitrag">
                    <v-img :src="beitrag.img" height="70"/>
                    <h4 class="text-center">{{ beitrag.titel }}</h4>
                  </v-card>
                </v-slide-group-item>
              </v-slide-group>
            </v-sheet>
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
  background-color: rgba(245, 245, 220, 0.5);
}

.selected-card {
  background-color: lightskyblue;
}

.card {
  width: 90%;
  height: 500px;
  background-color: lightskyblue;
  box-shadow: 4px 6px 8px black;
  border-radius: 20px 20px 20px 20px;
}

.cardActive {
  background-color: lightskyblue !important;
}

.list {
  background-color: lightskyblue;
}
</style>
