<template>
  <div ref="map" style="width: 600px; height: 600px"></div>
</template>

<script>
import L from "leaflet";

export default {
  name: "Map",
  props: {
    markers: {
      type: Array,
      default: () => [{id: 0, lat: 50.62507306341437, lng: 10.195312500000002}]
    }
  },
  data() {
    return {
      map: null
    
    }
  },
  mounted() {
    this.map = L.map(this.$refs.map, {
      center: [this.markers[0].lat, this.markers[0].lng],
      zoom: 17
    })



    this.map.on('click', (e) => {
      console.log(e.latlng.lat, e.latlng.lng)
      this.$emit("clickMap", e.latlng)

  
    })



var mark;
var marko;


this.map.on('click', (e) => {

  marko = mark; 

  mark =  L.marker(e.latlng );

  this.map.addLayer(mark);

  console.log(mark)

  this.map.removeLayer(marko);



})


      
// var theMarker= new L.marker(e.latlng).addTo(this.map);
      
// if (theMarker != theMarker) {
//   this.map.removeLayer(theMarker);

// }

L.popup()

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.markers.forEach((entry) => {
      console.log(this.markers);
      const nm = L.marker([parseFloat(entry.lat) , parseFloat(entry.lng )]).addTo(this.map);
      nm.on('click', () => this. $emit('selected-point', entry),
      nm.on('click', () => console.log(entry.id))

      
    )
  })
  
}
}
</script>

<style scoped>

</style>