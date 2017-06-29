<template lang="pug">
.card
  .card-title.bg-primary.text-white Estimated Stroke Onset Time

  .card-content
    p It is critically important to correctly establish the time of symptom onset. An incorrect time of onset may endanger the patient. If the patient awoke with symptoms then time of onset should be assumed to be when they fell asleep prior to waking. If the patient cannot provide any history then time of onset should be when last seen or known to be well.

    <q-inline-datetime v-model="onsetTime" type="datetime"></q-inline-datetime>

    p Elapsed minutes since stroke onset: {{minsSinceOnset}}

    .card(v-if="minsSinceOnset < (4.5*60)" style="margin-top:10px;")
      .card-content.bg-teal
        p The patient is within 4.5h of symptom onset and is therefore potentially a candidate for IV thrombolysis with alteplase AND/OR clot retrieval. For thrombolysis indications refer to your hospital's local guidelines and procedures. If thrombolysis is indicated according to your local procedures it should be started as soon as possible and should be initiated prior to transfer for clot retrieval if both treatments are indicated. The remainder of this screening tool will refer specifically to clot retrieval.
    
    .card(v-if="minsSinceOnset >= (4.5*60) & minsSinceOnset < (6*60)" style="margin-top:10px;")
      .card-content.bg-teal
        p The patient is between 4.5h and 6h after symptom onset. The patient is no longer a candidate for thrombolysis but may still be a candidate for clot retrieval. Continue with the screening process.

    .card(v-if="minsSinceOnset >= (6*60) & minsSinceOnset < (12*60)" style="margin-top:10px;")
      .card-content.bg-teal
        p The patient is between 6h and 12h post symptom onset. The only remaining indication for clot retrieval in this time period is a basilar occlusion. Patients with carotid or MCA occlusion are now excluded.

    .card(v-if="minsSinceOnset >= (12*60)" style="margin-top:10px;")
      .card-content.bg-teal
        p The patient is more than 12h post onset and is no longer suitable for clot retrieval.

</template>

<script>

import moment from 'moment'

export default {
  data () {
    return {
      onsetTime: moment().format()
    }
  },
  computed: {
    minsSinceOnset: function () {
      console.log(moment())
      console.log(this.onsetTime)
      return (moment().diff(this.onsetTime, 'minutes'))
    }
  }
}
</script>

<style>

</style>
