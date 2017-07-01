<template lang="pug">
q-collapsible(label="Scan Criteria", icon="scanner", :opened="bPatientCriteria")
  p Hello There
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['bPatientCriteria'])
  }
}
</script>

<style>
</style>
