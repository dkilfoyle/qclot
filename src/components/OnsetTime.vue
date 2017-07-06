<template lang="pug">
//- .card
//-   .card-title.bg-primary.text-white Estimated Stroke Onset Time

//-   .card-content
div
  .card(style="margin-bottom:10px", v-if="showElapsedTime")
    .card-content.bg-negative.text-white
      |Elapsed time since stroke onset: {{elapsedTime}}
  q-collapsible(label="Onset Time Criteria", icon="access_time", :opened="bStart", ref="onsetTimeCollapse")
    p It is critically important to correctly establish the time of symptom onset. An incorrect time of onset may endanger the patient. If the patient awoke with symptoms then time of onset should be assumed to be when they fell asleep prior to waking. If the patient cannot provide any history then time of onset should be when last seen or known to be well.
    p Use the widget below to set both the date and time of symptom onset. The initial value defaults to 18 hours prior to now.

    <q-inline-datetime v-model="onsetTime" type="datetime"></q-inline-datetime>

    p Elapsed time since stroke onset = {{elapsedTime}}

    .card(v-if="minsSinceOnset < (4.5*60)" style="margin-top:10px;")
      .card-content.passing
        p The patient is within 4.5h of symptom onset and is therefore potentially a candidate for IV thrombolysis with alteplase AND/OR clot retrieval. For thrombolysis indications refer to your hospital's local guidelines and procedures. If thrombolysis is indicated according to your local procedures it should be started as soon as possible and should be initiated prior to transfer for clot retrieval if both treatments are indicated. The remainder of this screening tool will refer specifically to clot retrieval.
        button.primary(@click="advance()")
          |Continue to patient criteria

    .card(v-if="minsSinceOnset >= (4.5*60) & minsSinceOnset < (6*60)" style="margin-top:10px;")
      .card-content.passing
        p The patient is between 4.5h and 6h after symptom onset. The patient is no longer a candidate for thrombolysis but may still be a candidate for clot retrieval. Continue with the screening process.
        .card(v-if="minsSinceOnset > 5*60" style="margin-bottom:10px;")
          .card-content.failing
            p WARNING: The patient is within <b>{{(6*60)-minsSinceOnset}} minutes</b> of the upper limit of the treatment window. The patient must complete the rest of the pathway AND arrive at Auckland Hospital within the next {{(6*60)-minsSinceOnset}}minutes in order to be treatable. If that is not feasible then do not continue with this pathway.
        button.primary(@click="advance()")
          |Continue to patient criteria

    .card(v-if="minsSinceOnset >= (6*60) & minsSinceOnset < (12*60)" style="margin-top:10px;")
      .card-content.passing
        p The patient is between 6h and 12h post symptom onset. The only remaining indication for clot retrieval in this time period is a <b>basilar occlusion</b>. Patients with ICA or MCA occlusion are now excluded.
        .card(v-if="minsSinceOnset > 11*60" style="margin-bottom:10px;")
          .card-content.failing
            p WARNING: The patient is within <b>{{(12*60)-minsSinceOnset}} minutes</b> of the upper limit of the treatment window for a basilar occlusion. The patient must complete the rest of the pathway AND arrive at Auckland Hospital within the next {{(12*60)-minsSinceOnset}} minutes in order to be treatable. If that is not feasible then do not continue with this pathway.
        button.primary(@click="advance()")
          |Continue to patient criteria

    .card(v-if="minsSinceOnset >= (12*60)" style="margin-top:10px;")
      .card-content.failing
        p The patient is more than 12h post onset and is therefore not suitable for clot retrieval.

</template>

<script>
import moment from 'moment'
import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      onsetTime: moment().subtract(18, 'hours').format(),
      showElapsedTime: false
    }
  },
  methods: {
    ...mapMutations(['setOnsetTimeStatus', 'setDuration', 'setStartStatus']),
    advance () {
      this.setOnsetTimeStatus(true)
      this.setDuration(this.minsSinceOnset)
      this.$refs.onsetTimeCollapse.close()
      this.showElapsedTime = true
    }
  },
  computed: {
    ...mapGetters(['bStart']),
    minsSinceOnset: function () {
      return (moment().diff(this.onsetTime, 'minutes'))
    },
    elapsedTime: function () {
      let hours = parseInt(Math.floor(this.minsSinceOnset / 60))
      let mins = parseInt(this.minsSinceOnset % 60)
      let dHours = (hours > 9 ? hours : '0' + hours)
      let dMins = (mins > 9 ? mins : '0' + mins)
      return (dHours + ':' + dMins)
    }
  },
  watch: {
    minsSinceOnset: function (val) {
      if (val > (12 * 60)) {
        this.setOnsetTimeTestStatus(false)
      }
    }
  }
}
</script>

<style lang="stylus">

</style>
