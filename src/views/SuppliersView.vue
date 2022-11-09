<template>
  <div class="suppliers">
    <SuppliersList />
  </div>
</template>

<script>
// @ is an alias to /src
import SuppliersList from '@/components/SuppliersList.vue'

export default {
  name: 'HomeView',
  components: {
    SuppliersList
  }
}
</script>
