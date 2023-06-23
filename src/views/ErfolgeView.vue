<template>

  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 102vh; width: 100vw; position: fixed">
      <div style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100%">

        <div>
          <h1 class="text-center pt-5">Wusstest du, dass...</h1>
          <v-virtual-scroll :item-height="30" :items="this.erfolge" height="65vh">
            <template v-slot="{ item }">
              <div class="d-flex justify-center">
                <div>
                  <div class="d-flex justify-center">
                    <v-img v-if="item.img !=''" :src="item.img" class="pt-5 hidden-md-and-up" max-height="400"
                           width="150"/>
                  </div>
                  <v-card class="mt-3 card">
                    <v-row class="justify-center align-center d-flex">
                      <v-col class="hidden-sm-and-down" cols="2">
                        <v-img v-if="item.img !=''" :src="item.img" width="200"/>
                      </v-col>
                      <v-col class="d-flex align-center" cols="10">
                        <p class="text-center mx-2 my-2 text-white">{{ item.text }}</p>
                      </v-col>
                    </v-row>
                  </v-card>
                </div>
              </div>
            </template>
          </v-virtual-scroll>
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
  },
  computed: {
    setMainHeight() {
      if (this.mobile) {
        return {
          height: '92vh'
        };
      } else {
        return {
          height: '85vh'
        };
      }
    }
  },
  mounted() {
    this.checkMobileView();
    window.addEventListener('resize', this.checkMobileView);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobileView);
  },
  methods: {
    checkMobileView() {
      if (window.innerWidth <= 1605) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    }
  }
}
</script>

<style scoped>
.card {
  color: black;
  min-height: 60px;
  width: 75vw;
  background-color: rgba(47, 83, 167, 0.65);
  box-shadow: 2px 4px 6px black;
  border-radius: 20px;
}
</style>
