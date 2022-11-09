<template>
  <div style="height: 80vh">
    <LMap :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>
      <LMarker v-for="supplier in suppliers" :key="supplier.id"
               :lat-lng="[supplier.latitude, supplier.longitude]"></LMarker>
    </LMap>
  </div>
</template>

<script>

import {LMap, LTileLayer, LMarker} from "vue2-leaflet";
import axios from "axios";

navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.latitude)
  console.log(position.coords.longitude)
})

export default {
  name: "MapMap",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 6,
      center: [46.5322, 2.9482],
      bounds: null,
      // suppliers : [
      //   {
      //     id : 1,
      //     latitude : 45.2,
      //     longitude : 5.74
      //   },
      //   {
      //     id : 2,
      //     latitude : 45.33,
      //     longitude : 5.6
      //   },
      // ]
      suppliers: [],
      loading: false,
      error: null
    };
  },
mounted()
{
  axios
      .get("https://heroku-campus-suppliers.herokuapp.com/api/suppliers")
      .then(response => {
        this.suppliers = response.data.data
      })
}
}
;


</script>

<style scoped>

</style>