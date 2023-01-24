<template>
  <div ref="map" id="mapStyle"></div>
</template>

<script>
import L from "leaflet";

export default {
  name: "Map",
  props: {
    markers: {
      type: Array,
      default: () => [
        { id: 0, lat: 50.62507306341437, lng: 10.195312500000002 },
      ],
    },
  },
  data() {
    return {
      map: null,
      currentMarker: null,
    };
  },
  mounted() {
    this.map = L.map(this.$refs.map, {
      center: [49.05457, 8.52678],
      zoom: 7,
    });

    this.map.on("click", (e) => {
      console.log(e.latlng.lat, e.latlng.lng);
      this.$emit("clickMap", e.latlng);
      if (this.currentMarker === null) {
        this.currentMarker = L.marker(e.latlng);
        this.map.addLayer(this.currentMarker);
      } else {
        this.map.removeLayer(this.currentMarker);
        this.currentMarker = L.marker(e.latlng);
        this.map.addLayer(this.currentMarker);
      }
    });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 17,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    this.markers.forEach((entry) => {
      console.log(this.markers);
      var greenIcon = new L.Icon({
        iconUrl:
          "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
      const nm = L.marker([parseFloat(entry.lat), parseFloat(entry.lng)], {
        icon: greenIcon,
      }).addTo(this.map);
      nm.on(
        "click",
        () => this.$emit("selected-point", entry),
        nm.on("click", () => console.log(entry.id))
      );
    });
  },
};
</script>

<style scoped>
#mapStyle {
  height: 80vh;
  width: 100%;
}
</style>
