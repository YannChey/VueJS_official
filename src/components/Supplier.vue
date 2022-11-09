<template>
  <div>
    <h1>Fournisseur {{nameFactory}}</h1>
    <h3 :class="{red:!status,green:status}">A du stock ? {{status ? 'OK' : 'KO'}}</h3>
    <h5>Date de dernière relevé des stocks : {{transformDate}}</h5>
  </div>
</template>

<script>
import { format } from 'timeago.js';

export default {
  name: "Supplier-example",
  props : {
    nameFactory : String,
    status : Boolean,
    checkedAt : Date
  },
  computed : {
    transformDate : function(){
      return format(this.checkedAt)
    }
  },
}


</script>

<style scoped>

  .red{
    color:red;
  }
  .green{
    color:green;
  }

</style>