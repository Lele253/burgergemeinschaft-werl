<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 81vh">
      <div class="d-flex align-center" style="background-color: rgba(255,255,255,0.56);height: 100%; width: 100%">

        <v-row class="d-flex justify-center mt-n15" style="width: 100%;">
          <v-col class="d-flex justify-center" cols="4">
            <v-virtual-scroll :item-height="30" :items="beiträge" height="500px">
              <template v-slot="{ item }">
                <div class="d-flex justify-center">
                  <v-card v-if="item.titel == this.ausgewählterBeitragTitel" class="mt-3 cardArtikelVorschau"
                          style="background-color: lightskyblue"
                          @click="setBeitrag(item.id)">
                    <v-row>
                      <v-col class="mt-3" cols="12">
                        <h3 class="text-center mx-5" style="color: black">
                          {{ item.titel }}</h3>
                      </v-col>
                      <v-col class="d-flex justify-end" cols="12">
                        <p class="mr-10">{{ item.datum }}</p>
                      </v-col>
                    </v-row>

                  </v-card>

                  <v-card v-if="item.titel != this.ausgewählterBeitragTitel" class="mt-3 cardArtikelVorschau"
                          @click="setBeitrag(item.id)">

                    <v-row>
                      <v-col class="mt-3" cols="12">
                        <h3 v-if="item.titel != this.ausgewählterBeitragTitel" class="text-center mx-5"
                            style="color: black">
                          {{ item.titel }}</h3>
                      </v-col>
                      <v-col class="d-flex justify-end" cols="12">
                        <p class="mr-10">{{ item.datum }}</p>
                      </v-col>
                    </v-row>

                  </v-card>
                </div>
              </template>
            </v-virtual-scroll>

          </v-col>
          <v-col class="d-flex justify-center" cols="6">
            <v-card class="card mx-0">

              <v-list->
                <v-list-item-title>
                  <h3 class="text-center mt-5 mx-8">
                    {{ convertTitle(this.ausgewählterBeitragTitel) }}
                  </h3>

                </v-list-item-title>

                <v-list-item class="text-center mt-2">

                  <v-virtual-scroll :height="420" :items="[this.ausgewählterBeitragText]">
                    <template v-slot:default="{ item }">
                      <p class="mx-10">{{ item }}</p>
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
      beiträge: [
        {
          "id": 1,
          "titel": "Stellungnahme der BG Werl zur Diskussion über Lärmbelastung bei Schützenfesten",
          "text": "SCHÜTZENFESTE - ERNEUT RECHTSUNSICHERHEIT BEI DER VERWALTUNG ?\n" +
              "\n" +
              " \n" +
              "\n" +
              "In der letzten Ratssitzung wurde die Verwaltung nach Einschränkungen der Lärmbelästigung durch Schützenfeste gefragt.\n" +
              "\n" +
              " \n" +
              "\n" +
              "Seitens der Stadt Werl wurde betont, dass nach Beschwerden durch Anlieger die gesetzlichen Vorgaben einzuhalten seien, nämlich 45 Dezibel nach 22 Uhr. Das ist eindeutig falsch! Uns liegt eine Stellungnahme eines führenden Verwaltungsrechtlers vor, mit dem auch die Stadt Werl gelegentlich arbeitet.\n" +
              "\n" +
              "Das Oberverwaltungsgericht Münster hat folgendes bestimmt: Erst ab 0.00 Uhr ist sicherzustellen, dass ein Pegel von 55 dB vor dem Wohnhaus der Anwohner nicht überschritten wird. Das bedeutet, der Verstärker muss so eingestellt werden, dass drei Meter vor den Lautsprechern maximal 80 dB erzeugt werden. Die musikalischen Darbietungen sind um 1.45 Uhr einzustellen und das Fest muss um 2.00 Uhr beendet werden.\n" +
              "\n" +
              "Diese Informationen kann man auch im Internet nachlesen. Warum informiert sich die Verwaltung hier nicht fundierter? Und auch der Sönneraner UWG Ratsherr und Schützenbruder Prünte hatte sich hier als Anfragender im Vorfeld offenbar nur unzureichend informiert, ansonsten hätte er jede Möglichkeit gehabt, dem Vortrag der Stadt direkt zu widersprechen.\n" +
              "\n" +
              " \n" +
              "\n" +
              "Wir haben wirklich Verständnis für die Bürger, die irgendwann zur Ruhe kommen möchten. Aber Schützenfest ist einmal pro Jahr und die oben beschriebenen Richtwerte sind vertretbar.",
          "datum": "01.06.2023"
        },
        {
          "id": 2,
          "titel": "Stellungnahme zum Umbesetzungsantrag der UWG-Fraktion",
          "text": "Die neue UWG-Fraktion im Werler Rat, bestehend aus den ehemaligen Ratsherren der BG Werl (May, Disselhoff u. Prünte) ist dadurch entstanden, dass die drei Ratsherren die Bürgergemeinschaft verlassen haben und ihre Ratsmandate dem Wählerwillen widersprechend nicht an die BG zurückgegeben, sondern zur UWG mitgenommen haben, obwohl sie nur über die Reserveliste der BG Werl überhaupt in den Stadtrat einziehen konnten. Dies war weder vom Wähler so vorgesehen noch ist es moralisch in Ordnung.\n" +
              "\n" +
              "Die erste Amtshandlung der neuen UWG-Fraktion bestand darin, einen Umbesetzungsantrag für den Planungs-, Bau- und Stadtentwicklungsausschuss zu stellen, um hiermit den sachkundigen Bürger Schmigowski aus dem Ausschuss entfernen zu können. Der sachkundige Bürger Schmigowski hat wiederholt geäußert, für eine sachlich orientierte parteiunabhängige Politik zu stehen. Eine Tatsache, die offenbar dem Willen der UWG-Fraktion im Wege stand, ihre de-facto-Koalition mit der CDU fortsetzen zu können, ohne stets der „Gefahr“ ausgesetzt zu sein, dass jemand aus der BG hier eben nicht einfach jederzeit blind folgt.\n" +
              "\n" +
              "Da dem sachkundigen Bürger Schmigowski seitens des Werler Rechtsrates in der Vergangenheit mit dem Hinweis er sei ja keine Fraktion, keine rechtlichen Beratungen erteilt wurden, wendete er sich an die Kommunalaufsicht beim Kreis Soest, nachdem er Kenntnis von dem Antrag erlangt hatte. Die Kommunalaufsicht prüfte auf seine Eingabe hin den Umbesetzungsantrag und stellte fest, dass dieser nicht den Vorgaben der Gemeindeordnung entsprach. Würde der Rat diesem Antrag zustimmen, so wäre der Beschluss rechtswidrig. Hier stellen sich direkt zwei Fragen: Hat der Bürgermeister als „Verwaltungsfachmann“ hier beim Zulassen des Antrags nicht gewusst, dass er hier einen nicht zulässigen Antrag auf die Tagesordnung der Ratssitzung setzt? Wir erinnern uns, wie der Bürgermeister beim ersten (offenbar auch schon rechtswidrigen) Antrag dieser Art öffentlich jemanden dafür kritisierte, dass er sein demokratisches Recht einer Nein-Stimme wahrgenommen hat. Die zweite sich stellende Frage ist, ob der langjährige Ratsherr und LWL-Abgeordnete May als Fraktionsvorsitzender der UWG hier auch überhaupt keine Ahnung von der Nichtzulässigkeit seines Antrages hatte. Wurde der Antrag gar nicht geprüft? Zu keiner Zeit? Von niemandem? Es wirft kein gutes Licht auf die Beteiligten, dass der sachkundige Bürger Schmigowski, der gegen seinen und gegen den Willen des Wählers ausgetauscht werden sollte, hier auf eigene Faust und mit – im Vergleich – Laienwissen ausgestattet, selbst die Initiative über die nächsthöhere Instanz ergreifen musste, um überhaupt zu erreichen, dass jemand diesen Antrag mal rechtlich fundiert hinterfragt.\n" +
              "\n" +
              "Nachdem der Kreis diese Arbeit jetzt für den Werler Bürgermeister erledigt hat, sollte man meinen, dass der Antrag von der Tagesordnung genommen wird. Bis jetzt ist das nicht geschehen. Binnen weniger als 48 Stunden bemühte man sich im Rathaus nun im Eiltempo, über die nach dem Kreis Soest folgende Instanz nach Mitteln und Wegen zu forschen, mit denen der Antrag doch aufrechterhalten werden oder so angepasst werden kann, dass trotzdem noch erreicht werden kann, den für die unabhängige BG agierenden sachkundigen Bürger Schmigowski auf schnellstmöglichem Wege aus dem Ausschuss herauszubekommen. Diese Tatkräftigkeit des Bürgermeisters wird die UWG-Fraktion sicher schwer begeistert haben. Zu keiner Zeit jedoch hat der Bürgermeister mal den Kontakt zum sachkundigen Bürger Schmigowski gesucht.  Wenn man nun die ganzen Vorgänge rund um die Umbesetzungsanträge und die Vorkommnisse in der Ratssitzung im Oktober summiert, so drängt sich hier der Gedanke an die gebotene Neutralität des Bürgermeisteramtes auf. Wir setzen voraus und gehen eigentlich davon aus, dass sich der Bürgermeister dieser Pflicht stets bewusst ist.\n" +
              "\n" +
              "Es wird für die Werlerinnen und Werler sehr interessant werden zu beobachten, ob sich die CDU diesem Treiben anschließt und beim Versuch, einen unliebsamen unabhängigen sachkundigen Bürger mit der Brechstange loszuwerden, mitmacht oder ob es sich dort durchsetzt, den kleinen „Koalitionspartner“ nach ihren Ausflügen auf rechtlich sehr dünnes Eis wieder einzufangen.\n" +
              "\n" +
              "Wir von der BG Werl jedenfalls ziehen unseren Hut und äußern unseren größten Respekt vor allen Ratsfrauen und Ratsherren, die wenn es nötig werden sollte, den Mut haben, sich in der kommenden Ratssitzung gegen dieses sehr bedenkliche Vorgehen der Umbesetzung zu stellen. Die drei Ratsherren May, Prünte und Disselhoff fordern wir hiermit zur Niederlegung ihrer Ratsmandate auf.",
          "datum": "05.06.2023"
        },
        {
          "id": 3,
          "titel": "BG unterstützt Fahrradschutzstreifen am Hellweg",
          "text": "Am 08.03. hat unser Vorsitzender Jens Schmigowski für die BG im Planungsausschuss für den Vorschlag der Verwaltung gestimmt, Fahrradschutzstreifen am Hellweg einzuführen.\n" +
              "Diese Entscheidung erfolgte nach genauer Abwägung aller Sachargumente, nach Gesprächen mit Fachleuten und vor allem im Einklang mit dem Positionspapier der BG Werl aus dem Jahr 2020.\n" +
              "Dieses sagt unter anderem:\n" +
              "\"Seit 2012 hat die BG einen Arbeitskreis „Förderung der Fahrradmobilität in Werl“ moderiert und geführt. Ergebnis ist eine Vielzahl von Fahrradweguntersuchungen und -optimierungen. Die Behinderungen (Wegesperren) auf vielen Wegen wurden zurückgeführt auf ein sinnvolles Maß, Fahrradstreifen wurden angelegt, Ampelschaltungen für den Radfahrer verbessert. Abstellmöglichkeiten in der Innenstadt, an den Bahnhöfen und an der Stadthalle wurden geschaffen. Das Fahren an den Bundesstraßen wurde sicherer gemacht. Nach einer vorliegenden Studie (Masterarbeit) gibt es noch eine Vielzahl von Stellen im Stadtgebiet, die verkehrstechnisch für den Radverkehr optimiert werden sollten. Die BG unterstützt das massiv und fordert dazu auf, mehr Geld in den Ausbau der Fahrradinfrastruktur zu geben. Da das Radfahren aber eine zukünftig deutlich höhere Bedeutung im Stadtbild haben sollte – nämlich in Bezug auf Klimaschutz, Gesundheit, Flächenverbrauch, greifen wir das Thema noch einmal für die Mittelfristplanung auf.\"\n" +
              "Die BG folgt damit ausdrücklich auch dem Wunsch der Mitgliederversammlung nach einer sachlich orientierten parteiunabhängigen Politik in Werl.",
          "datum": "10.06.2023"
        },
        {
          "id": 4,
          "titel": "Wie wollen Sie den ÖPNV verbessern?",
          "text": "Auch wir als BG-Werl beobachten eine Unzufriedenheit der Bürger mit dem ÖPNV und sehen ihn teilweise als ineffektiv an. Die Systeme Bus, Bahn und Fahrrad seien nicht genug aufeinander abgestimmt. Die BG-Werl fordert eine Analyse der gegenwärtigen Situation. Ziel muss es sein, durch eine Optimierung der Buslinien in Bezug auf Fahrtrichtung, Strecke und Auslastung insgesamt kürzere Fahrzeiten zu erreichen. Wir brauchen eine engere Taktung für wirklich nachgefragte Strecken. Eine weitere Möglichkeit wäre der langfristige Umstieg auf deutlich kleinere Busse oder ein Shuttlesystem, das auch bei aktuellem Bedarf spontan in Anspruch genommen werden kann. Außerdem fordern wir, dass die langfristige Planung des ÖPNV sich zum Ziel setzt, den Bürgern sein Angebot kostenfrei zur Verfügung zu stellen. Dies hat nicht nur eine soziale Komponente, sondern ist alleine schon aus umwelt- und klimapolitischer Sicht eine Grundvoraussetzung für eine sichere Zukunft der nächsten Generationen.",
          "datum": "11.06.2023"
        },
        {
          "id": 5,
          "titel": "Wie wollen Sie Radeln in Werl stärken?",
          "text": "\"WERL SATTELT UM AUF‘S RAD\"\n" +
              "Diesem Slogan hat sich die Bürgergemeinschaft Werl (BG Werl) verschrieben und setzt sich voll für eine nachhaltige Verbesserung der Fahrrad-Infrastruktur ein.\n" +
              "Wir fordern mehr und sichere Radwege, beleuchtete Straßen aus den Ortsteilen zu den Schulen, Fahrradstraßen, Abstellanlagen auch mit Lademöglichkeit für e-Bikes, sowie einen Arbeitskreis Rad unter Beteiligung von interessierten Bürgern, der Politik und der Verwaltung mit dem Ziel, 30% Radverkehr zu erreichen.\n" +
              "Damit klimaschädliche Emissionen reduziert werden, müssen die mit Benzin- oder Dieselkraftstoff in der Stadt zurückgelegten Kilometer gesenkt werden. Denn Radfahren ist klimafreundlich und radfahrende Menschen sind nachweislich gesünder. Wir müssen es unseren Bürgern leichter machen, das Auto stehen zu lassen und stattdessen das Fahrrad zu benutzen. Eine kostengünstige Lösung, um auch ein höherwertiges Rad zu fahren ist das Leasing über den Arbeitgeber. Hier muss mehr Aufklärungsarbeit bei Arbeitgebern und Arbeitnehmern erfolgen.",
          "datum": "11.06.2023"
        },
        {
          "id": 6,
          "titel": "Was wollen Sie für's Werler Klima tun?",
          "text": "Wir Menschen verbrauchen zu viel Energie, erzeugen ein Übermaß an klimaschädlichen Emissionen und tun nichts, die schädlichen Emissionen aus der Atmosphäre zu beseitigen. In der Folge läuft die Erde seit Jahrzehnten auf eine „Heißzeit“ zu. Eine Klimakatastrophe kann nur noch abgewendet werden, wenn möglichst viele Menschen daran mitwirken. Die BG-Werl bringt sich in den Kampf gegen eine weitere Erderwärmung lokal ein. Die Arbeit muss auf allen Ebenen geführt werden. Wir haben beantragt, Flächen in der Stadt aufzuforsten. Nur 4% der Flächen sind bewaldet, in anderen Städten bis zu 30%. Die Aufklärung der Bürger über das drohende Desaster muss verstärkt werden. Schon junge Menschen sollen an das Problem herangeführt werden, weshalb wir die Anlage eines Schülerwaldes fordern. Wir fordern die Rückgewinnung von Wärme aus Abwasser, die Gewinnung von Biogas aus Klärschlämmen, den Einsatz von Fernwärme. Verfahren zur technischen Eliminierung von schädlichen Klimagasen unterstützen wir. Wir fordern die Verbesserung von Rad- und Busverkehr. Mobilität kann nicht weiter durch mit Benzin und Diesel betriebene Autos stattfinden.",
          "datum": "11.06.2023"
        }
      ],

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
    convertTitle(string) {
      if (string.length > 70) {
        return string.substring(0, 70) + '...'
      }
      return string
    }
  },
  created() {
    this.$store.state.routername = this.name
    this.setErstenBeitrag()
  }
}
</script>

<style scoped>
.cardArtikelVorschau {
  min-height: 100px;
  width: 500px;
  background-color: rgba(245, 245, 220, 0.5);
}

.card {
  width: 90%;
  height: 100%;
  background-color: lightskyblue;
  box-shadow: 4px 6px 8px black;
  border-radius: 20px 20px 20px 20px;
}
</style>
