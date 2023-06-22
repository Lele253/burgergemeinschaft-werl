<template>
  <div>
    <v-card-title class="text-center pb-8">Beitrag Löschen</v-card-title>
    <v-row class="mx-auto" style="width: 95%">
      <v-col cols="11">Titel</v-col>
      <v-col cols="1">Löschen</v-col>
    </v-row>
    <v-row v-for="beitrag in beiträge" :key="beitrag"
           class="mx-auto my-1" style="border: black solid 2px;border-radius: 10px; width: 95%">
      <v-col cols="9">
        {{ beitrag.titel }}
      </v-col>
      <v-col class="py-0 pr-1 d-flex align-center justify-end">
        <Icon class="mr-10" icon="tabler:trash-x-filled" style="font-size: 30px; color: red; cursor: pointer"
              @click="löschen(beitrag.id)"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {Icon} from "@iconify/vue";

export default {
  name: "BeitragLöschenComponent",
  components: {Icon},

  data() {
    return {
      beiträge: this.$store.state.beiträge
    }
  },

  methods: {
    löschen(id) {
      this.$store.state.beiträge.splice(id - 1, 1)
    }
  }
}
</script>

<style scoped>

</style>