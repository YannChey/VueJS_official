<template>
  <div class="suppliers">
    <SuppliersMap />
  </div>
</template>

<script>
// @ is an alias to /src
import SuppliersMap from '@/components/SuppliersMap.vue'

export default {
  name: 'HomeView',
  components: {
    SuppliersMap
  }
}
</script>