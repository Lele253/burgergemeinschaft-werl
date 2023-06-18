<template>
  <div class="background d-flex align-center" style="height: 85vh; position: fixed">
    <HeaderComponent/>

    <v-row class="justify-center d-flex align-center mt-n15" style="width: 80%; height: 80vh">

      <v-col class="card align-center d-flex justify-center" cols="5">
        <div>
          <h2 class="text-white text-center mb-5">Willkommen bei der Bürgergemeinschaft Werl!</h2>
          <p class="text-center text-white mx-10">
            Hier in Werl arbeiten wir als engagierte Bürger zusammen, um unsere Stadt lebendig und lebenswert zu
            gestalten. Von unserer faszinierenden Geschichte über unsere bezaubernde Altstadt bis hin zu unserer
            leidenschaftlichen Bürgerschaft, die keine Herausforderung scheut - wir sind stolz auf das, was wir
            erreichen können.<br><br>
            Auf unserer Website finden Sie alle relevanten Informationen über aktuelle Projekte, Veranstaltungen,
            Möglichkeiten zur Mitwirkung und Neuigkeiten rund um Werl. Ganz gleich, ob Sie seit Langem in Werl leben
            oder neu hier sind - wir laden Sie herzlich ein, Teil unserer Gemeinschaft zu werden und gemeinsam mit uns
            die Zukunft Werls zu gestalten.<br><br>
            Gemeinsam können wir Großes erreichen! Willkommen bei der Bürgergemeinschaft Werl!
          </p>
        </div>
      </v-col>

      <v-col cols="1"/>

      <v-col class="d-flex align-center justify-center" cols="4">
        <!--        <v-img :src="image" class="image" width="500"/>-->
        <v-carousel
            :interval="5000"
            :show-arrows="false"
            cycle
            height="400"
            hide-delimiter-background
            hide-delimiters>
          <v-carousel-item
              v-for="image in images"
              :key="image">
            <v-img :src="image.url"/>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      
    </v-row>
  </div>

</template>

<script>

import HeaderComponent from "@/components/HeaderComponent";

export default ({
  data() {
    return {
      name: 'Bürgergemeinschaft Werl',

      image: require('../assets/vorstandneu.jpeg'),

      images: [
        {
          url: require('../assets/home/images.jpeg')
        },
        {
          url: require('../assets/home/273037602_469812634818383_3897029102871763589_n.jpg')
        },
        {
          url: require('../assets/home/112409825_112576980541952_3415738472525881347_n.jpg')
        },
        {
          url: require('../assets/home/117409729_127034065762910_3253618623528389260_n.jpg')
        },
        {
          url: require('../assets/home/346867890_211897704968189_3681748391991571383_n.jpg')
        }
      ]

    }
  },
  components: {
    HeaderComponent,
  },
  created() {
    this.$store.state.routername = this.name
  }
});
</script>

<style scoped>

.background {
  width: 100vw;
  height: 10vh;
  background-image: url('../assets/werl.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.card {
  width: 90%;
  height: 450px;
  background-color: #2F53A7;
  box-shadow: 2px 4px 6px black;
  border-radius: 20px;
}

.image {
  box-shadow: 2px 4px 6px white;
}
</style>