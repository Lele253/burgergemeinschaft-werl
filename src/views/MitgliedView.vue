<template>
  <div>
    <HeaderComponent/>
    <v-img :src="background" cover style="height: 81vh">
      <div class="d-flex align-center"
           style="background-color: rgba(255,255,255,0.21);height: 100%; width: 100%">
        <v-row class="d-flex justify-center mt-n15">
          <v-col class="d-flex justify-center" cols="4">
            <v-card class="card">
              <h2 class="text-center mt-10">Ich will mitmachen!</h2>
              <p class="text-center mt-5 mx-10"> Finden Sie sich in unseren Zielen wieder? Dann werden Sie Mitglied
                in
                der
                Bürgergemeinschaft Werl e.V.
                und
                gestalten Sie aktiv das Leben in unserer Stadt Werl mit...
              </p>
              <v-img :src="bild" class="mt-5" height="150"/>
              <h4 class="text-center mt-8 mt-t mx-10">
                Füllen Sie dafür einfach das Formular aus und wir kontaktieren Sie zeitnah.
              </h4>
            </v-card>
          </v-col>
          <v-col class="d-flex justify-center" cols="6">
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
                        label="Adresse"
                        variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-flex justify-center mb-3 pt-0" cols="12">
                    <v-btn v-if="ausgefüllt" type="submit" width="150">Abschicken</v-btn>
                    <v-btn v-if="!ausgefüllt" style="color: gray; background: rgba(128,128,128,0.11)"
                           width="150">Abschicken
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
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
      name: "Mitglied werden",
      background: require('../assets/mitglied werden.jpeg'),
      bild: require('../assets/dokumentIcon.png'),
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
    abschicken() {
      console.log('Funktion kommt noch')
    },
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
  background-color: rgba(255, 255, 255, 0.91);
  box-shadow: 4px 6px 8px black;
  border-radius: 20px 20px 20px 20px;
}
</style>
