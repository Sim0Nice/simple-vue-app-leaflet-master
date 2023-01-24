<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent>
        <template v-slot:activator="{ props }">
          <v-btn id="button" color="white" v-bind="props">
            Neuer Pilz-Spot
          </v-btn>
        </template>

        <v-card>
          <v-card-title>
            <span class="text-h5">Beschreibe deinen Fund</span>
          </v-card-title>
          <v-textarea
            class="textf"
            id="inputName"
            label="Bennene diesen Ort"
            v-model="name"
            size="100%"
          ></v-textarea>
          <v-textarea
            class="textf"
            id="inputDescription"
            label="Beschreibung"
            v-model="description"
            size="100%"
          >
          </v-textarea>
          <v-autocomplete
            class="textf"
            :items="[
              'Steinpilz',
              'Pfifferling',
              'Herbsttrompete',
              'Schoftintling',
              'Krause Gluke',
              'Speise Morchel',
              'Birken-Rotkappe',
            ]"
            id="inputType"
            label="Welche Pilze hast du gefunden?"
            v-model="type"
          ></v-autocomplete>

          <v-rating
            id="inputRating"
            v-model="rating"
            background-color="black"
            color="#ffcc00"
          ></v-rating>

          <v-card-actions id="cardsend">
            <v-spacer></v-spacer>

            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
              Close
            </v-btn>

            <v-btn color="blue-darken-1" variant="text" @click="addEntry">
              Add
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AddEntry",
  data: function () {
    return {
      name: "",
      lat: 0,
      lng: 0,
      description: "",
      type: "",
      rating: 0,
      dialog: false,
    };
  },
  methods: {
    addEntry: function () {
      if (this.name.length > 0) {
        this.$emit("entryAdded", {
          name: this.name,
          lat: this.lat,
          lng: this.lng,
          description: this.description,
          type: this.type,
          rating: this.rating,
        });
        this.name = "";
        (this.lat = 0),
          (this.lng = 0),
          (this.description = ""),
          (this.type = ""),
          (this.rating = 0);
        this.dialog = false;
      }
    },
  },
};
</script>


<style scoped>
div {
  display: flex;
  align-items: center;
}
</style>
