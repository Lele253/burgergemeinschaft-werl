<template>

  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 81vh">
      <div style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100%">
        <h1 class="text-center pt-5">Wusstest du, dass...</h1>

        <v-virtual-scroll :item-height="30" :items="erfolge" height="65vh">
          <template v-slot="{ item }">
            <div class="d-flex justify-center">
              <v-card class="mt-3 card">
                <v-row v-if="item.img !=''">
                  <v-col cols="2">
                    <v-img :src="item.img" width="200"/>
                  </v-col>
                  <v-col class="d-flex align-center" cols="10">
                    <p class="text-center mx-2 my-2">{{ item.text }}</p>
                  </v-col>
                </v-row>

                <v-row v-else class="d-flex justify-center">
                  <v-col cols="10">
                    <p class="text-center mx-2 my-2">{{ item.text }}</p>
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
      name: "Erfolge",
      background: require('../assets/erfolge.png'),
      erfolge: [
        {
          id: 1,
          img: require('../assets/erfolge/ratsinfo_seitenleiste.png'),
          text: '... auf Antrag der BG in 2012 ein Ratsinformationssystem für die Ratsmitglieder eingeführt wurde, das hilft, Tausende von Papierseiten nicht mehr auszudrucken und den Ratsmitgliedern zuzustellen, sondern welches ihnen ermöglicht, alle Unterlagen am Rechner einzusehen und zu bearbeiten. Dass dabei gleichzeitig ein digitales Archiv entsteht, ist ein gewollter Nebeneffekt, der die Arbeit des Rates transparenter und nachhaltiger machen kann.'
        },
        {
          id: 2,
          img: require('../assets/erfolge/bushaltestelle_holtum.png'),
          text: '... auf Beharren der BG die Bushaltestelle in Holtum einen neuen Platz erhielt, somit der Busverkehr aus dem engen Kirchenumfeld geholt wurde. Erst bei einem Ortstermin konnte die BG mit ihrem Vorschlag überzeugen, der zuletzt sogar preiswerter war als der Vorschlag von CDU und SPD.'
        },
        {
          id: 3,
          img: '',
          text: '... auf Anregung der BG eine zukunftsweisende Erdgastankstelle an der Tankstelle Rubarth geschaffen wurde?'
        },
        {
          id: 4,
          img: '',
          text: '... auf Vermittlung der BG ein Krematorium in Werl geschaffen wurde und somit bei vielen Todesfällen ein unnötiger "Reiseverkehr" nach Hamm unterbleiben kann?'
        },
        {
          id: 5,
          img: require('../assets/erfolge/kbw.jpg'),
          text: '... durch massiven Personeneinsatz der BG und durch massive politische Unterstützung der BG Bürgerbegehren und Bürgerentscheid zum Erhalt des öffentlichen KBW (Kanalsystem, Straßenreinigung, Müllabfuhr, Sperrmüll, etc.) stattgefunden haben. Heute sind auch die damaligen Gegner CDU und SPD dankbar dafür, vermeidet die verhinderte Privatisierung doch steigende Kosten für Bürger.'
        },
        {
          id: 6,
          img: require('../assets/erfolge/tunnel.jpg'),
          text: '... die BG als erste politische Gruppe die Reißlinie gezogen hat, um das Tunnelbauwerk Langenwiedenweg auf 20 Jahre zu verschieben, weil sonst nur die Schuldensumme weiter erhöht würde? Andere Parteien haben sich angeschlossen und auch die CDU verlangt keine schnelle Lösung mehr. Nur die SPD verharrt in ihrer 30 Jahre alten Position, egal, wieviel Schulden den Bürgern aufgebürdet werden.'
        },
        {
          id: 7,
          img: '',
          text: '... die BG bereits seit 2002 in ihren Haushaltsreden und ihrer Politik die Haushaltsführung angegriffen hat und in der aktuellen Legislaturperiode endlich mit der CDU und den Grünen die Wende geschafft hat?'
        },
        {
          id: 8,
          img: require('../assets/erfolge/wald.jpg'),
          text: '... die BG sich als erste Fraktion massiv gegen den Ausbau des Werler Stadtwaldes zum Verkehrsübungsplatz gewandt hat?'
        },
        {
          id: 9,
          img: '',
          text: '... die BG in der aktuellen, finanziell angespannten Situation auch den Mut hat, zurückzustecken und versucht, den Bürgern die Haushaltssorgen transparent zu machen?'
        },
        {
          id: 10,
          img: '',
          text: '... die BG seit langem Kreisverkehre statt Ampeln fordert, was langsam auch in Werl Einkehr findet?'
        },
        {
          id: 11,
          img: '',
          text: '... sich die BG sachlich und konstruktiv mit den Konzepten aller Werler Parteien auseinandersetzt und gemeinsam mit ihnen nach der jeweils bestmöglichen Lösung sucht?'
        },
        {
          id: 12,
          img: require('../assets/erfolge/gradierwerk.jpg'),
          text: '... die Idee für das Gradierwerk im Kurpark u.v.a.m von der BG initiiert wurden?'
        },
        {
          id: 13,
          img: require('../assets/erfolge/kaemperstrasse.jpg'),
          text: '... Gründungsmitglieder der BG Zeit und Geld geopfert haben, um eine Straße zu verhindern, die quer durch die Kernstadt (Westtangente) geführt werden sollte?'
        },
        {
          id: 14,
          img: require('../assets/erfolge/freibad.jpg'),
          text: '... die Werler BG sich immer für ein leistungsfähiges Frei- und Hallenbad mit familienfreundlichen Preisen eingesetzt hat?'
        },
        {
          id: 15,
          img: require('../assets/erfolge/autobahnparkplatz.jpg'),
          text: '... die BG mit dafür verantwortlich ist, dass es an der Autobahnabfahrt Büderich einen Parkplatz gibt?'
        }
      ]


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
