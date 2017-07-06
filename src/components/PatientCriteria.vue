<template lang="pug">
//- .card
//-   .card-title.bg-primary.text-white Patient Criteria
//-   .card-content

q-collapsible(label="Patient Criteria", icon="person", :opened="bOnsetTime", ref="patientCriteriaCollapse")
  .list(style="margin-bottom: 20px")
    label.item
      .item-primary
        q-checkbox(v-model="age")
      .item-content
        |Is the patient >= 15y old?
    label.item
      .item-primary
        q-checkbox(v-model="functional")
      .item-content
        |Is the baseline functional level at least semi-independent?
    label.item
      .item-primary
        q-checkbox(v-model="BSL")
      .item-content
        |Is the BSL between 4-17 mmol/L
    label.item
      .item-primary
        q-checkbox(v-model="hospital")
      .item-content
        |Is the patient currently in a Midlands or Northern hospital?

  .card.passing(v-if="bPassAll")
    .card-content
      |Stroke onset time and patient criteria are met. The patient may be a candidate for clot retrieval depending on the CT findings. Now:
      ul
        li Order an immediate CT brain + CTA of neck and brain.
        li Ensure the patient has been assessed by the most appropriate local senior available doctor relevant to your hospital. This should be on-call medical registrar or physician, or local on-call neurologist.
      button.primary(@click="advance()")
        |Continue to patient criteria


  .card.failing(v-if="bPassAll==false")
    .card-content
      |The patient must meet all of the above criteria. Current responses in this section indicate the patient does not meet screening criteria for clot retrieval. The patient may still be suitable for thrombolysis and you should refer to your local thrombolysis guidelines.

</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      age: false,
      functional: false,
      BSL: false,
      hospital: false
    }
  },
  computed: {
    ...mapGetters(['bOnsetTime']),
    bPassAll: function () {
      return (this.age & this.functional & this.BSL & this.hospital)
    }
  },
  methods: {
    ...mapMutations(['setPatientCriteriaStatus']),
    advance () {
      this.setPatientCriteriaStatus(true)
      this.$refs.patientCriteriaCollapse.close()
    }
  }
}
</script>

<style>
</style>
