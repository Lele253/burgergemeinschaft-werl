<template>

  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 81vh">
      <div style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100%">
        <h1 class="text-center pt-5">Wusstest du, dass...</h1>
        <v-virtual-scroll :item-height="30" :items="this.erfolge" height="65vh">
          <template v-slot="{ item }">
            <div class="d-flex justify-center">
              <v-card class="mt-3 card">
                <v-row>
                  <v-col cols="2">
                    <v-img v-if="item.img !=''" :src="item.img" width="200"/>
                  </v-col>
                  <v-col class="d-flex align-center" cols="10">
                    <p class="text-center mx-2 my-2 text-white">{{ item.text }}</p>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </template>
        </v-virtual-scroll>

      </div>
    </v-img>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  data() {
    return {
      erfolge: this.$store.state.erfolge.sort((a, b) => b.id - a.id),

      name: "Erfolge",
      background: require('../assets/erfolge.png'),
    }
  },
  components: {
    HeaderComponent
  },
  created() {
    this.$store.state.routername = this.name
  }
}
</script>

<style scoped>
.card {
  color: black;
  min-height: 60px;
  width: 75vw;
  background-color: rgba(128, 128, 128, 0.65);
}
</style>
