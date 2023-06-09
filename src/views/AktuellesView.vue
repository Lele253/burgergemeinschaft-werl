<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 81vh">
      <div class="d-flex align-center" style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100%">

        <v-row class="d-flex justify-center mt-n15" style="width: 100%;">
          <v-col class="d-flex justify-center" cols="4">
            <!--            <v-card class="card">

                          <v-list
                              class="text-center"
                              fixed-header
                              height="470px"
                              style="border-radius: 20px"
                          >
                            <v-list-item
                                v-for="item in beiträge"
                                :key="item"
                                :value="item"
                                color="blue"
                                @click="setBeitrag(item.id)"
                            >
                              <v-row>
                                <v-col cols="8">
                                  <h3 class="text-center"> {{ item.titel }}</h3>
                                </v-col>
                                <v-col cols="4">
                                  {{ item.datum }}
                                </v-col>
                              </v-row>
                              <v-divider></v-divider>
                            </v-list-item>
                          </v-list>
                          <v-divider thickness="5"></v-divider>

                        </v-card>-->
            <v-virtual-scroll :item-height="30" :items="beiträge" height="470px">
              <template v-slot="{ item }">
                <v-card class="mt-3" height="50" width="500" @click="setBeitrag(item.id)">

                  <v-row class="mt-0">
                    <v-col cols="8">
                      <h3 v-if="item.titel == this.ausgewählterBeitragTitel" class="text-center" style="color: blue">
                        {{ item.titel }}</h3>
                      <h3 v-if="item.titel != this.ausgewählterBeitragTitel" class="text-center" style="color: black">
                        {{ item.titel }}</h3>
                    </v-col>
                    <v-col cols="4">
                      {{ item.datum }}
                    </v-col>
                  </v-row>

                </v-card>
              </template>
            </v-virtual-scroll>

          </v-col>
          <v-col class="d-flex justify-center" cols="6">
            <v-card class="card mx-0">

              <v-list->
                <v-list-item-title>
                  <h3 class="text-center mt-5">
                    {{ this.ausgewählterBeitragTitel }}
                  </h3>
                </v-list-item-title>

                <v-list-item class="text-center mt-2">

                  <v-virtual-scroll :height="400" :items="[this.ausgewählterBeitragText]">
                    <template v-slot:default="{ item }">
                      {{ item }}
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
      background: require('../assets/aktuelles.jpeg'),
      beiträge: [{id: 1, titel: 'Test1', text: 'Beitrag 1: Erster Beitrag', datum: '15.07.2022'},
        {
          id: 2,
          titel: 'Test2',
          text: 'Beitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter BeitragBeitrag 2: Zweiter Beitrag',
          datum: '16.07.2022'
        },
        {id: 3, titel: 'Test3', text: 'Beitrag 3: Dritter Beitrag', datum: '17.07.2022'},
        {id: 4, titel: 'Test4', text: 'Beitrag 4: Vierter Beitrag', datum: '18.07.2022'},
        {id: 5, titel: 'Test5', text: 'Beitrag 5: Fünfter Beitrag', datum: '19.07.2022'},
        {id: 6, titel: 'Test6', text: 'Beitrag 6: Sechster Beitrag', datum: '20.07.2022'},
        {id: 7, titel: 'Test7', text: 'Beitrag 7: Siebter Beitrag', datum: '21.07.2022'},
        {id: 8, titel: 'Test8', text: 'Beitrag 8: Achter Beitrag', datum: '22.07.2022'},
        {id: 9, titel: 'Test9', text: 'Beitrag 9: Neunter Beitrag', datum: '23.07.2022'},
        {id: 10, titel: 'Test10', text: 'Beitrag 10: Zehnter Beitrag', datum: '24.07.2022'},
        {id: 11, titel: 'Test11', text: 'Beitrag 11: Elfter Beitrag', datum: '25.07.2022'},
        {id: 12, titel: 'Test12', text: 'Beitrag 12: Zwölfter Beitrag', datum: '26.07.2022'},
        {id: 13, titel: 'Test13', text: 'Beitrag 13: Dreizehnter Beitrag', datum: '27.07.2022'},
        {id: 14, titel: 'Test14', text: 'Beitrag 14: Vierzehnter Beitrag', datum: '28.07.2022'},
        {id: 15, titel: 'Test15', text: 'Beitrag 15: Fünfzehnter Beitrag', datum: '29.07.2022'},
        {id: 16, titel: 'Test16', text: 'Beitrag 16: Sechzehnter Beitrag', datum: '30.07.2022'},
        {id: 17, titel: 'Test17', text: 'Beitrag 17: Siebzehnter Beitrag', datum: '31.07.2022'},
        {id: 18, titel: 'Test18', text: 'Beitrag 18: Achtzehnter Beitrag', datum: '01.08.2022'},
        {id: 19, titel: 'Test19', text: 'Beitrag 19: Neunzehnter Beitrag', datum: '02.08.2022'},
        {id: 20, titel: 'Test20', text: 'Beitrag 20: Zwanzigster Beitrag', datum: '03.08.2022'},],
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
  },
  created() {
    this.$store.state.routername = this.name
    this.setErstenBeitrag()
  }
}
</script>

<style scoped>
.card {

  width: 90%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.91);
  box-shadow: 4px 6px 8px black;
  border-radius: 20px 20px 20px 20px;
}
</style>
