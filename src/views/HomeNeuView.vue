<template>
<div>
  <HeaderComponent></HeaderComponent>
  <div style="height: 100vh ">
    <v-img cover :src="background" style="position: fixed; height: 100vh;">
      <div class="d-flex align-center justify-center" style="height: 100%; padding-bottom: 150px">
        <v-card style=" box-shadow: 0 0 20px 30px rgba(0,0,0,0.5); height: 90%; width: 90%; background-color: rgba(255,255,255,0.01); color: transparent">
          <v-row  style="overflow-y: scroll; width: 100%; height: 100%" class="ma-0 pb-0">
            <v-col class="d-flex align-center" style="height: 100%; width: 100%;" md="5" cols="12" >
              <v-card style="overflow-y: scroll " class="card ">
                <h2 class="text-white text-center mt-2">Willkommen bei der Bürgergemeinschaft Werl!</h2>

                <v-card-item >
                  <p class="d-block text-white ma-2 ">Die Bürgergemeinschaft Werl arbeitet engagiert
                    daran,
                    unsere Stadt lebendig
                    und
                    lebenswert zu machen. Wir
                    sind stolz auf unsere faszinierende Geschichte, bezaubernde Altstadt und leidenschaftliche
                    Bürgerschaft.
                    Besuchen Sie unsere Website für Informationen zu aktuellen Projekten, Veranstaltungen und
                    Möglichkeiten
                    zur Mitwirkung. Werl ist offen für alle, die Teil unserer Gemeinschaft werden und gemeinsam mit uns
                    die
                    Zukunft gestalten möchten. Willkommen bei der Bürgergemeinschaft Werl!</p>

                  <p class=" text-white ma-2 ">
                    Hier in Werl arbeiten wir als engagierte Bürger zusammen, um unsere Stadt lebendig und lebenswert zu
                    gestalten. Von unserer faszinierenden Geschichte über unsere bezaubernde Altstadt bis hin zu unserer
                    leidenschaftlichen Bürgerschaft, die keine Herausforderung scheut - wir sind stolz auf das, was wir
                    erreichen können.<br><br>
                    Auf unserer Website finden Sie alle relevanten Informationen über aktuelle Projekte, Veranstaltungen,
                    Möglichkeiten zur Mitwirkung und Neuigkeiten rund um Werl. Ganz gleich, ob Sie seit Langem in Werl
                    leben
                    oder neu hier sind - wir laden Sie herzlich ein, Teil unserer Gemeinschaft zu werden und gemeinsam mit
                    uns
                    die Zukunft Werls zu gestalten.<br><br>
                    Gemeinsam können wir Großes erreichen! Willkommen bei der Bürgergemeinschaft Werl!
                  </p>
                </v-card-item>

              </v-card>
            </v-col>
            <v-spacer></v-spacer>
            <v-col  style="height: 100%; width: 100%;" cols="12" md="5" >
              <v-card class="card my-auto d-flex align-center">
                <v-carousel
                    :interval="2000"
                    :show-arrows="false"
                    cycle
                    class="d-flex my-auto align-center"
                    hide-delimiter-background
                    hide-delimiters>
                  <v-carousel-item
                      class="d-flex my-auto justify-center align-center"
                      v-for="image in images"
                      :key="image">
                    <v-tooltip :text="image.text" location="bottom">
                      <template  v-slot:activator="{ props }">
                        <v-img  :src="image.url" class="d-flex mx-auto align-center"  cover style=" border-radius: 13px; width: 80% "
                               v-bind="props"/>
                      </template>
                    </v-tooltip>
                  </v-carousel-item>
                </v-carousel>

              </v-card>
            </v-col>

          </v-row>
        </v-card>
      </div>

    </v-img>

  </div>
</div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  name: "HomeNeuView",
  data(){
    return{
      background: require('../assets/werl1.jpeg'),
      images: [
        {
          url: require('../assets/home/1.png'),
          text: 'Bürgergemeinschaft Werl'
        },
        {
          url: require('../assets/home/2.png'),
          text: 'Jens Schmigowski | Vorsitzender'
        },
        {
          url: require('../assets/home/3.png'),
          text: 'Vorstand der Bürgergemeinschaft Werl'
        },
        {
          url: require('../assets/home/4.png'),
          text: 'Junge Frauen-Power in unserer BG Werl'
        },

      ]

    }
  },
  components: {HeaderComponent}

}
</script>

<style scoped>
.card{
  height: 100%;
  width: 100%;
  background-color: rgba(47, 83, 167, 0.76);
}
</style>
