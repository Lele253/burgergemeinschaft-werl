<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 100vh; position: fixed; width: 100vw ;">
      <div
          style=" background-color: rgba(255,255,255,0.21);height: 100%; width: 100%; overflow-y: scroll; padding-bottom: 100px; padding-top:20px ">
        <div v-if="!$store.state.mobile" style="height: 10%; width: 100vw"/>
        <v-row class="d-flex justify-center ml-1" style="overflow-y: scroll">
          <v-col class="d-flex justify-center" cols="12" md="4">
            <v-card class="card">
              <h2 v-if="!$store.state.mobile" class="text-center mt-10">Ich will mitmachen!</h2>
              <h2 v-if="$store.state.mobile" class="text-center mt-4">Ich will mitmachen!</h2>

              <p class="text-center mt-5 mx-10"> Finden Sie sich in unseren Zielen wieder? Dann werden Sie Mitglied
                in
                der
                Bürgergemeinschaft Werl e.V.
                und
                gestalten Sie aktiv das Leben in unserer Stadt Werl mit...
              </p>
              <v-img v-if="!$store.state.mobile" :src="bild" class="mt-5" height="150"/>
              <v-img v-if="$store.state.mobile" :src="bild" class="mt-5" height="80"/>

              <h4 class="text-center mt-8 mb-5 mx-10">
                Füllen Sie dafür einfach das Formular aus und wir kontaktieren Sie zeitnah.
              </h4>
            </v-card>
          </v-col>
          <v-col class="d-flex justify-center" cols="12" md="6">
            <v-card class="card mx-0">
              <v-form class="mt-10 mx-10 d-flex justify-center" @submit="abschicken">
                <v-row style="width: 100%">
                  <v-col class="py-0" cols="6">
                    <v-text-field
                        v-model="vorname"
                        :rules="rules"
                        label="Vorname"
                        variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col class="py-0" cols="6">
                    <v-text-field
                        v-model="nachname"
                        :rules="rules"
                        label="Nachname"
                        variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <v-text-field
                        v-model="email"
                        :rules="rules"
                        label="Email Adresse"
                        type="mail"
                        variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <v-text-field
                        v-model="handynummer"
                        :rules="rules"
                        label="Handynummer"
                        variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col class="py-0 pb-0" cols="6">
                    <v-text-field
                        v-model="plz"
                        :rules="rules"
                        label="PLZ"
                        variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col class="py-0" cols="6">
                    <v-text-field
                        v-model="ort"
                        :rules="rules"
                        label="Ort"
                        variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <v-text-field
                        v-model="adresse"
                        :rules="rules"
                        label="Straße, Hausnummer"
                        variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-flex justify-center mb-3 pt-0" cols="12">
                    <v-btn v-if="!ausgefüllt" style="color: grey; background-color: rgba(128,128,128,0.18)">
                      Abschicken
                    </v-btn>
                    <v-btn
                        v-if="ausgefüllt"
                        style="color: white; background-color: #2F53A7"
                        width="150"
                        @click="abschicken">Abschicken
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <v-row justify="center">
        <v-dialog
            v-model="dialog"
            style="color: #2F53A7;"
            transition="dialog-bottom-transition"
            width="500">
          <v-card class="d-flex align-center" style="background-color: #2F53A7; height: 225px">
            <v-card-title class="text-h5 text-white text-center">
              Vielen Dank für Ihren Mitgliedsantrag
            </v-card-title>
            <v-card-text class="text-center text-white mx-10">
              Ihr Mitgliedsantrag ist bei uns eingegangen. Wir bedanken uns herzlich dafür und werden uns so schnell
              wie
              möglich bei Ihnen
              melden.
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn
                  color="white"
                  style="background-color: #2F53A7"
                  variant="outlined"
                  @click="dialog = false">
                Okay
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

    </v-img>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import axios from "axios";

export default {
  data() {
    return {
      name: "Mitglied werden",
      background: require('../assets/mitglied werden.jpeg'),
      bild: require('../assets/dokumentIcon.png'),

      dialog: false,

      vorname: null,
      nachname: '',
      email: '',
      handynummer: null,
      ort: '',
      plz: '',
      adresse: '',
      rules: [
        value => {
          if (value) return true

          return 'Bitte füllen Sie alle Felder aus'
        },
      ],
    }
  },
  methods: {
    async abschicken() {
      try {
        await axios.post('/bewerbung', {
          vorname: this.vorname,
          nachname: this.nachname,
          email: this.email,
          nummer: this.handynummer,
          plz: this.plz,
          ort: this.ort,
          straße: this.adresse,
          bearbeitet: false
        })
        this.clear()
      } catch (e) {
        alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie Bitte den Administrator.")
      }
    },
    clear() {
      this.vorname = null
      this.nachname = null
      this.email = null
      this.handynummer = null
      this.ort = null
      this.plz = null
      this.adresse = null
      this.dialog = true
    }
  },

  computed: {
    ausgefüllt: function () {
      return (this.vorname != '' && this.nachname != '' && this.email != '' && this.handynummer != '' && this.plz != '' && this.ort != '' && this.adresse != '')
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
  width: 90%;
  height: 100%;
  background-color: rgba(217, 214, 214, 0.85);
  box-shadow: 4px 6px 8px black;
  border-radius: 20px 20px 20px 20px;
}

.v-row {
  width: 100%;
}
</style>
