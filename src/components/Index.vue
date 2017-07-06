<template lang="pug">
  <q-layout>
    <div slot="header" class="toolbar">
      <q-toolbar-title :padding="0">
        |North/Midlands Acute Stroke Clot Retrieval Screening Tool
      </q-toolbar-title>
    </div>

    <div class="layout-view">
      <div class="layout-padding">

        .card.bg-teal.text-white
          //- .card-title Info
          .card-content 
            p This is a screening tool to identify acute stroke patients potentially suitable for urgent transfer to Auckland Hospital for Percutaneous Stroke Intervention (PSI) aka Clot Retrieval. Click the button below to start a patient assessment.
            p NOTE: This version is still in development. Please report any necessary changes to Dean Kilfoyle.
            p 
              button.secondary(@click="doStart()")
                |Start

        onset-time
        patient-criteria
        scan-criteria
        transfer-instructions

      </div>
    </div>
  </q-layout>
</template>

<script>
import OnsetTime from './OnsetTime.vue'
import PatientCriteria from './PatientCriteria.vue'
import ScanCriteria from './ScanCriteria.vue'
import TransferInstructions from './TransferInstructions.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    OnsetTime,
    PatientCriteria,
    ScanCriteria,
    TransferInstructions
  },
  data () {
    return {

    }
  },
  methods: {
    ...mapActions(['doStart'])
  }
}
</script>

<style lang="stylus">
@import '~src/themes/app.mat.styl'
.passing {
  background-color: $green-2
}
.failing {
  background-color: $amber-2
}
.item-link {
  background-color: $dark
  color: white
}
.q-collapsible .item-primary {
  color: white
}
.q-collapsible .item-secondary {
  color: white
}

</style>
