<template lang="pug">
  <q-layout>
    <div slot="header" class="toolbar">
      <q-toolbar-title :padding="0">
        North/Midlands Acute Stroke Clot Retrieval Screening Tool
      </q-toolbar-title>
    </div>

    <div class="layout-view">
      <div class="layout-padding">

        .card.bg-teal.text-white
          .card-title Info
          .card-content 
            p A screening tool to identify acute stroke patients potentially suitable for urgent transfer to Auckland Hospital for endovascular clot retrieval

        <onset-time></onset-time>

        <patient-criteria></patient-criteria>

        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import OnsetTime from './OnsetTime.vue'
import PatientCriteria from './PatientCriteria.vue'

export default {
  components: {
    OnsetTime,
    PatientCriteria
  },
  data () {
    return {

    }
  },
  methods: {
  },
  computed: {

  }
}
</script>

<style lang="stylus">

</style>
