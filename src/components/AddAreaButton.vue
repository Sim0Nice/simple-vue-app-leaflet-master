<template>
    <div class="text-center">
      <v-btn
        color="error"
        @click="overlay = !overlay"
      >
        Füge einen Pilzspot hinzu
      </v-btn>
      <div class="overlayMap">
  
      <v-overlay v-model="overlay">


      </v-overlay>
    </div>
    </div>
  </template>
  <script>

  
   
   export default {
    name: "AddAreaButton",
      data: () => ({
        overlay: false,
      }),
  
      watch: {
        overlay (val) {
          val && setTimeout(() => {
            this.overlay = false
          }, 2000)
        },
      },
    }
  </script>