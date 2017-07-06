<template lang="pug">
q-collapsible(label="Transfer Instructions", icon="airplanemode_active", :opened="bScanCriteria", ref="transferInstructionsCollapse")
  .card
    .card-content.bg-primary.text-white
        ol
            li Call for an urgent helicopter transfer to Auckland Hospital. Instruct the transfer team to take the patient to Auckland Hospital resus where they will be briefly assessed prior to direct transfer to angiography suite.
            li Provide patient/family this information sheet explaining the procedure. Click <a href="./statics/patientinformation.pdf" download>HERE</a> to download.
            li Obtain consent if patient able or NOK available. Do not delay transfer if NOK is not immediately available. Click HERE to download form (TODO)
            li If suitable for thrombolysis this should be initiated pre-transfer. The patient can be transferred with the infusion still running if necessary. Usual blood pressure parameters will need to be maintained.
        p Pathway complete
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['bScanCriteria'])
  }
}
</script>

<style>
</style>
