<template>
  <div id="header">
    <div id="hoverImage">
      <h1>Finde die besten Pilz-Sammelstellen</h1>
      <v-btn
        id="startButton"
        color="white"
        onclick="window.location.href='/#mapColumn';"
      >
        Zur Karte
      </v-btn>
    </div>
    <div class="overlay"></div>
  </div>
  <h2 id="ü1">Bevor du losziehst ...</h2>
  <div id="hinweise">
    <div class="hinweis" id="info1">
      <h4>Artenkenntnis</h4>
      <p>
        Beim Sammeln für Speisezwecke ist darauf zu achten, nur Exemplare von
        dir bekannten Pilzarten zu verwenden, die du anhand aller wichtigen
        Merkmale zweifelsfrei bestimmt hast.
      </p>
    </div>
    <div class="hinweis" id="info2">
      <h4>Giftige Doppelgänger</h4>
      <p>
        In verschiedenen Gegenden können unterschiedliche Pilzarten vorkommen,
        die einander sehr ähneln. Speisepilze, die du aus deiner Heimat gut
        kennst, können in anderen Gegenden giftige Doppelgänger besitzen.
      </p>
    </div>
    <div class="hinweis" id="info3">
      <h4>Spezielle Zubereitung</h4>
      <p>
        Bitte beachte auch, dass die meisten Wildpilze roh giftig oder
        unbekömmlich sind und manche Arten nur nach spezieller Zubereitung ohne
        Gefahr verzehrt werden können.
      </p>
    </div>
    <div class="hinweis" id="info4">
      <h4>Verderblichkeit</h4>
      <p>
        Pilze sind leicht verderbliche Lebensmittel. Alte oder von Schimmel
        befallene Pilze können gesundheitsschädlich sein.
      </p>
    </div>
    <div class="hinweis" id="info5">
      <h4>Schneiden statt Reißen</h4>
      <p>
        Rupfen Sie Fruchtkörper – insbesondere Ihnen bekannte Arten – möglichst
        nicht mit den Händen aus dem Waldboden.
      </p>
    </div>
    <div class="hinweis" id="info6">
      <h4>Übertreibe es nicht!</h4>
      <p>
        Sammeln Sie nur so viele Pilze, wie Sie kurz­fristig brauchen. Lassen
        Sie besonders kleine Exemplare stehen. Nur wenn genügend Pilze bis zur
        Sporen­bildung reifen, bleibt die Art erhalten.
      </p>
    </div>
  </div>

  <div id="infoColumn">
    <div v-if="currentPin == null">
      <h2>Klicke auf einen Pin, um mehr über diesen Ort zu erfahren!</h2>
    </div>

    <div v-if="currentPin !== null">
      <InfoEntry
        id="infoEntry"
        :entry="currentPin"
        @entryEdited="editEntry"
        @entryRemoved="removeEntry"
      ></InfoEntry>
    </div>
  </div>

  <div id="mapColumn">
    <div id="body">
      <div v-if="isReady">
        <div id="mapd">
          <Map
            :key="updateKey"
            :markers="listOfEntries"
            @clickMap="onMapClick"
            @selected-point="selectMarker"
          />

          <AddEntry
            v-if="lat !== 0"
            id="addEntry"
            @entryAdded="addEntry"
          ></AddEntry>
          <v-card v-if="lat == 0"
            ><p>Um einen neuen Pin zu erstellen klicke auf die Karte</p></v-card
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddEntry from "./components/AddEntry.vue";
import InfoEntry from "./components/InfoEntry.vue";
import axios from "axios";
import Map from "@/components/Map.vue";

import { v4 as uuidV4 } from "uuid";

export default {
  name: "App",
  components: {
    Map,
    // MglPopup,
    AddEntry,
    InfoEntry,
  },
  data: function () {
    return {
      isReady: false,
      token:
        "pk.eyJ1IjoicGlsemJlcmVpY2giLCJhIjoiY2xjdXh1aXNmMHppczNxcDRraWMxOG96ZyJ9.I3MlSpeqM_TWCUNfkl7rmg",
      listOfEntries: [],
      mapStyle: "mapbox://styles/pilzbereich/clcuy5q5g001u16ql2k6aqb3c",
      updateKey: "",
      currentPin: null,
      currentObject: null,
      lat: 0,
      lng: 0,
      markers: [],
    };
  },
  methods: {
    selectMarker: function (e) {
      (this.currentPin = e), console.log("das ist e" + e);
    },
    selectObject: function (e) {
      (this.currentObject = e), console.log(e);
    },

    addEntry: function (e) {
      axios
        .post("http://" + window.location.hostname + ":8080/entries/", {
          name: e.name,
          lat: this.lat,
          lng: this.lng,
          description: e.description,
          type: e.type,
          rating: e.rating,
        })
        .then((response) => {
          this.listOfEntries = response.data;
          this.updateKey = uuidV4();
        });
    },

    onMapClick: function (e) {
      (this.lat = e.lat), (this.lng = e.lng);
    },
  },
  
  async mounted() {
    await axios
      .get("http://" + window.location.hostname + ":8080/entries/")
      .then((response) => {
        this.listOfEntries = response.data;
      });
    this.isReady = true;
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap");
</style>
