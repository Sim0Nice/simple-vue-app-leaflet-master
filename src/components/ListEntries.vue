<template>
  <div>
    <v-card id="pinInfo">
      <h2>{{ entry.name }}</h2>

      <h3 id="fonter">Beschreibung</h3>
      <span class="name"> {{ entry.description }}</span>

      <h3 id="fonter">Pilzart</h3>
      <span class="name"> {{ entry.type }}</span>

      <h3 id="fonter">Rating des Erstellers</h3>
      <v-rating
        v-model="entry.rating"
        readonly
        background-color="black"
        color="#ffcc00"
      ></v-rating>
    </v-card>

    <FungiDescription id="FungiDescription" :type="entry.type">
    </FungiDescription>
  </div>
</template>

<script>
import FungiDescription from "./FungiDescription.vue";

export default {
  name: "ListEntries",
  props: ["entry", "index"],
  data: function () {
    return {
      isEditable: false,
      avgRating: null,
      newRating: null,
      dialog: false,
    };
  },
  methods: {
    calcAverage: function () {
      var total = 0,
        length = this.entry.rating.length;

      for (var i = 0; i < length; i++) {
        total += parseFloat(rating[i]);
      }

      avgRating = total / length;
    },
  },
  components: {
    FungiDescription,
  },
};
</script>

<style scoped>
div {
  align-items: center;
}
#name,
#input {
  width: 300px;
  text-align: left;
}

#pinInfo {
  width: 100%;
}
</style>
