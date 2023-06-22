<template>
  <div :style="setMainHeight" class="background d-flex align-center main" style="width: 100vw; position: fixed">
    <HeaderComponent/>

    <!--    Dekstop-->

    <div class="hidden-xs" style="width: 100vw; height: 85vh">
      <v-row class="justify-center align-center" style="width: 103vw; height: 80vh">

        <v-col class="d-flex justify-center" cols="12" md="5" sm="10">
          <v-card class="card">
            <h2 class="text-white text-center mb-5">Willkommen bei der Bürgergemeinschaft Werl!</h2>
            <v-card-item>
              <p class="hidden-lg-and-up text-white text-center ">Die Bürgergemeinschaft Werl arbeitet engagiert
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

              <p class="text-center text-white mx-10 hidden-md-and-down">
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


        <v-col class="d-flex align-center justify-center" cols="10" md="5" sm="9">
          <v-carousel
              :interval="5000"
              :show-arrows="false"
              cycle
              hide-delimiter-background
              hide-delimiters>
            <v-carousel-item
                v-for="image in images"
                :key="image">
              <v-tooltip :text="image.text" location="bottom">
                <template v-slot:activator="{ props }">
                  <v-img :src="image.url" class="image" cover style="object-position: center center;"
                         v-bind="props"/>
                </template>
              </v-tooltip>
            </v-carousel-item>
          </v-carousel>
        </v-col>

      </v-row>
    </div>

    <!--Mobile-->

    <div class="hidden-sm-and-up" style="width: 100vw; height: 85vh; overflow-y: scroll">
      <v-row class="justify-center align-center" style="width: 103vw; height: 80vh">

        <v-col class="d-flex justify-center" cols="12" md="5" sm="10">
          <v-card class="card">
            <h2 class="text-white text-center mb-5">Willkommen bei der Bürgergemeinschaft Werl!</h2>
            <v-card-item>
              <p class="hidden-lg-and-up text-white text-center ">Die Bürgergemeinschaft Werl arbeitet engagiert
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

              <p class="text-center text-white mx-10 hidden-md-and-down">
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


        <v-col class="d-flex align-center justify-center" cols="10" md="5" sm="9">
          <v-carousel
              :interval="5000"
              :show-arrows="false"
              cycle
              height="500"
              hide-delimiter-background
              hide-delimiters>
            <v-carousel-item
                v-for="image in images"
                :key="image">
              <v-tooltip :text="image.text" location="bottom">
                <template v-slot:activator="{ props }">
                  <v-img :src="image.url" class="image" cover v-bind="props"/>
                </template>
              </v-tooltip>
            </v-carousel-item>
          </v-carousel>
        </v-col>

      </v-row>
    </div>

  </div>

</template>

<script>

import HeaderComponent from "@/components/HeaderComponent";

export default ({
  data() {
    return {
      name: 'Bürgergemeinschaft Werl',
      mobile: '',
      image: require('../assets/vorstandneu.jpeg'),

      images: [
        {
          url: require('../assets/home/images.jpeg'),
          text: 'Bürgergemeinschaft Werl'
        },
        {
          url: require('../assets/home/273037602_469812634818383_3897029102871763589_n.jpg'),
          text: 'Jens Schmigowski | Vorsitzender'
        },
        {
          url: require('../assets/home/112409825_112576980541952_3415738472525881347_n.jpg'),
          text: 'Vorstand der Bürgergemeinschaft Werl'
        },
        {
          url: require('../assets/home/117409729_127034065762910_3253618623528389260_n.jpg'),
          text: 'Junge Frauen-Power in unserer BG Werl'
        },
        {
          url: require('../assets/home/346867890_211897704968189_3681748391991571383_n.jpg'),
          text: 'BG-Werl ist ein Zusammenschluss parteiunabhängiger Bürgerinnen und Bürger'
        }
      ]

    }
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
  components: {
    HeaderComponent,
  },
  created() {
    this.$store.state.routername = this.name
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
})
</script>

<style scoped>

.background {
  width: 100vw;
  padding-top: 0 !important;
  height: 10vh;
  background-image: url('../assets/werl.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.card {
  overflow-y: scroll;
  width: 90%;
  padding-bottom: 20px;
  padding-top: 20px;
  max-height: 500px;
  background-color: #2F53A7;
  box-shadow: 2px 4px 6px black;
  border-radius: 20px;
}

.image {
  border-radius: 20px;
}
</style>