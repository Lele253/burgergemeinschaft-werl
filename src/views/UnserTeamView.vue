<template>
  <div>
    <v-img  :src="background" cover style="height: 100vh">
    <HeaderComponent/>
      <div class="d-flex justify-center" style="background-color: rgba(255,255,255,0);height: 100%; width: 100%">
        <v-sheet
            style="position: fixed;bottom: 20px;width: 100%; height: 100%;"
            class="bg-transparent"
            elevation="8"

        >
          <v-slide-group
              v-model="model"
              class="pa-4"
              style="margin-top: 22%"
              selected-class="test"
              multiple
              show-arrows
          >
            <v-slide-group-item
                v-for="n in $store.state.vorstand"
                :key="n"

            >

              <v-card

                  color="grey-lighten-1"
                  class="ma-4"
                  height="300"
                  width="200"
              >

                <div class="d-flex fill-height align-center justify-center">

                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </v-img>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  data() {
    return {
      name: "Unser Team",
      background: require('../assets/VorstandUndRat.png'),
      model: [],
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

</style>
