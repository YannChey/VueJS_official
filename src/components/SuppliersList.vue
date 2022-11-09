<template>
  <div class="suppliers">
      <Supplier class="element" v-for="supplier in suppliers" :key=supplier.id :name-factory="supplier.name"
                :status="supplier.status" :checkedAt="supplier.checkedAt"></Supplier>
  </div>
</template>

<script>

import Supplier from "@/components/Supplier";
import axios from "axios";

export default {
  name: "SuppliersList",
  components: {
    Supplier
  },
  props: {
    msg: String
  },
  data: function () {
    return {
      // suppliers: [
      //   {
      //     id: 1,
      //     nameSupplier: 'VladlaSpiruline',
      //     status: false,
      //     checkedAt: new Date()
      //   },
      //   {
      //     id: 2,
      //     nameSupplier: 'YvandelaSpiruline',
      //     status: true,
      //     checkedAt: new Date()
      //   },
      // ],
      suppliers : [],
        loading : false,
        error : null
    }
  },
  mounted() {
    axios
        .get("https://heroku-campus-suppliers.herokuapp.com/api/suppliers")
        .then(response => {
          this.suppliers = response.data.data
        })
  }
}
</script>

<style scoped>


.element {
  border: 1px solid black;
  margin : 10px;

}
</style>