<template>
  <div>
    <v-img :src="background" class="pb-16" cover style="position:fixed">
      <HeaderComponent/>
      <div class="d-flex justify-center" style="background-color: rgba(255,255,255,0);height: 100%; width: 100%">
        <v-sheet
            class="bg-transparent"
            elevation="8"
            style="position: fixed;bottom: 4%;width: 100%; height: 100%;"

        >
          <v-slide-group
              v-model="model"
              class="slide-group pa-4 d-flex align-end"
              style="height: 100%"
          >
            <v-slide-group-item
                v-for="n in $store.state.vorstand"
                :key="n"
            >
              <v-card
                  class="ma-4 slide-card"
                  color="grey-lighten-1"
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
.v-slide-group__wrapper {
  overflow-x: auto; /* Enables the horizontal scrollbar */
  /* Next lines hides scrollbar in different browsers for styling purposes */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.v-slide-group__wrapper::-webkit-scrollbar {
  display: none; /* Chrome opera and Safary */
  width: 0px;
  background: transparent;
}

.slide-group > :first-child,
.slide-group > :last-child {
  margin-top: auto;
  margin-bottom: auto;
}

.slide-group > :first-child > :first-child > :first-child,
.slide-group > :last-child > :first-child > :first-child {
  min-width: 80px;
  min-height: 80px;
}

.slide-group > :first-child > :first-child,
.slide-group > :last-child > :first-child {
  font-size: 80px;
}

</style>
