<template>
  <div>
    <HeaderComponent/>
    <div style="background-color: #e3dede; height: 100vh " class="pa-5">
      <v-row>
        <v-col cols="12">
          <v-card class="pa-5">
            <div class="col-xs-12 col-lg-9">

              <h4>Impressum</h4>

              <p>
                Die Bürgergemeinschaft Werl e.V. ist ein beim Amtsgericht Arnsberg unter der Vereinsnummer VR 90294 eingetragener, gemeinnütziger Verein, der sich mit seinen Mitgliedern allein dem Wohl der Stadt Werl und ihrer Bürgerinnen und Bürger verpflichtet fühlt. Er wird vertreten durch den Vorstand des Vereins.<br>
                Redaktion und inhaltliche Verantwortung im Sinne des Presserechts und des §10 MDStV / §6 TDG liegen beim Vorsitzenden<br><br>

                Jens Schmigowski<br>
                Kapuzinerring 30<br>
                59457 Werl<br>
                Telefon <a href="tel:02922-8820732">02922-8820732</a><br><br>

                Die aufgeführten Inhalte werden mit großer Sorgfalt zusammengestellt und geprüft. Die Redaktion übernimmt aber keine Gewähr für die Vollständigkeit, Richtigkeit, Aktualität oder Qualität der Dokumente. Links zu Webseiten Dritter auf die direkt oder indirekt verwiesen wird, werden als Serviceleistung angeboten. Für die Inhalte, zu denen verlinkt wird, sind die Anbieter der jeweiligen Webseiten selbst verantwortlich. Die Redaktion hat keinen Einfluss auf Inhalt oder Gestaltung der verlinkten Seiten. Sie übernimmt für Inhalt und Gestaltung dieser Seiten keine Haftung. Alle Angaben können ohne vorherige Ankündigung verändert, ergänzt, gelöscht oder eingestellt werden. Alle genannten Namen, Bezeichnungen oder Logos sind eingetragene Warenzeichen und Eigentum der jeweiligen Rechteinhaber.<br><br>

                <i>Fotos für "Kommunalwahl 2020" von <a href="https://www.der-photoshop.de/" target="_blank">Andreas Stegmann (Der Photoshop)</a>.</i>
              </p>
            </div>

          </v-card>
        </v-col>
      </v-row>

    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  name: "ImpressumView",
  components: {
    HeaderComponent
  }
}
</script>

<style scoped>

</style>
