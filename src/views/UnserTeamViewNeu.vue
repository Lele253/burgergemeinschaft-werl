<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 86vh; width: 100vw; position:fixed;">
      <div class="d-flex justify-center" style="background-color: rgba(255,255,255,0);height: 100%; width: 100%">

        <div class="d-flex align-center" style="height: 88%">

          <v-sheet
              style="background-color: rgba(255,255,255,0)"
              width="90vw"
          >
            <v-slide-group
                v-model="model"
                center-active>
              <v-slide-group-item
                  v-for="p in vorstand"
                  :key="p"
                  v-slot="{ isSelected, toggle }">
                <v-card
                    class="ml-5 mr-5 d-flex align-center"
                    color="transparent"
                    elevation="0"
                    width="300"
                    @click="toggle">
                  <v-row class="d-flex justify-center align-center" style="width: 100%">
                    <v-col cols="12">
                      <h2 v-if="!isSelected" class="text-center">{{ p.name }}</h2>
                      <h1 v-if="isSelected" class="text-center">{{ p.name }}</h1>
                    </v-col>
                    <v-col cols="12">
                      <v-card-subtitle class="text-center mt-3">{{ p.position }}</v-card-subtitle>
                    </v-col>
                    <v-col cols="12">
                      <v-img v-if="isSelected" :src="p.img" class="mt-3 bild"/>
                      <v-img v-if="!isSelected" :src="p.img" class="mt-3 bildActive"/>
                    </v-col>
                  </v-row>
                </v-card>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>

        </div>

      </div>
    </v-img>

  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  name: "UnserTeamViewNeu.vue",

  data() {
    return {
      background: require('../assets/VorstandUndRat.png'),
      vorstand: this.$store.state.vorstand,
      person: '',
      model: null
    }
  },
  components: {
    HeaderComponent
  },
  methods: {
    setFirstPerson() {
      this.person = this.$store.state.vorstand
    }
  },
  created() {
    this.$store.state.routername = this.name
    this.setFirstPerson()
  }
}
</script>

<style scoped>
.bild {
  height: 400px;
  border-radius: 20px 20px 20px 20px !important;
  border-style: wave;
}

.bildActive {
  height: 300px;
  border-radius: 20px 20px 20px 20px !important;
}

.v-img__img {
  border-radius: 20px 20px 20px 20px !important;
}

</style>