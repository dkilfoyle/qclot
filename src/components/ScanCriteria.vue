<template lang="pug">
q-collapsible(label="Scan Criteria", icon="scanner", :opened="bPatientCriteria", ref="scanCriteriaCollapse")
  p CTA (CT angiography) is a mandatory pre-requisite. If your hospital does not have CTA capability the patient should be transfered to your nearest CTA capable hospital.
  .list(style="margin-bottom: 20px")
    label.item
      .item-primary
        q-checkbox(v-model="nobleed")
      .item-content
        |Confirm CT shows no hemorrhage?
    .list-label
      |Select the most appropriate CTA finding
    label.item
      .item-primary
        q-radio(v-model="ctfinding", val="none")
      .item-content
        |No Occlusion
    label.item
      .item-primary
        q-radio(v-model="ctfinding", val="ICA")
      .item-content
        |ICA Occlusion
    label.item
      .item-primary
        q-radio(v-model="ctfinding", val="MCA")
      .item-content
        |M1 or proximal M2 MCA Occlusion
    label.item
      .item-primary
        q-radio(v-model="ctfinding", val="basilar")
      .item-content
        |Basilar Occlusion
    label.item
      .item-primary
        q-radio(v-model="ctfinding", val="other")
      .item-content
        |Other Occlusion

  mixin ctinstructions
    ol
      li Ask your radiologist to send the images immediately to Auckland PAX. The Auckland Neurologist/Neuroradiologist cannot make a treatment decision until the images have been received and viewed.
      li Discuss the patient with your consultant prior to contacting Auckland Hospital - specifically review diagnostic certainty, appropriateness of transfer with respect to baseline comorbidity and safety for transfer.
      li Call Auckland Hospital and ask to speak to the On-Call Neurologist. Do not ask for the On-Call Neuroradiologist. The person making the call should be at least registrar level and if not a SMO should have discussed the patient with their local relevant SMO prior to calling.
      li If the patient is still within 4.5h of onset they may be suitable for thrombolysis in addition to clot retrieval.

  .card.passing(v-if="isAnterior & iDuration < 360")
    .card-content
      |The patient is within 6h of symptom onset with an occluded anterior circulation artery. The patient may be a candidate for transfer to Auckland Hospital for urgent endovascular clot retreival. Please do the following immediately:
      +ctinstructions
      .list(style="margin-bottom: 20px")
        label.item
          .item-primary
            q-checkbox(v-model="neurologistaccepted")
          .item-content
            |Has the patient been accepted by the Auckland Hospital on-call neurologist for transfer?
      button.primary(@click="advance()", v-if="neurologistaccepted")
        |Continue to transfer instructions

  .card.passing(v-else-if="isPosterior & iDuration < 720")
    .card-content
      | The patient is within 12h of symptom onset with an occluded basilar artery. The patient may be a candidate for transfer to Auckland Hospital for urgent endovascular clot retreival. Please do the following immediately:
      +ctinstructions
      .list(style="margin-bottom: 20px")
        label.item
          .item-primary
            q-checkbox(v-model="neurologistaccepted")
          .item-content
            |Has the patient been accepted by the Auckland Hospital on-call neurologist for transfer?
      button.primary(@click="advance()", v-if="neurologistaccepted")
        |Continue to transfer instructions

  .card.failing(v-else)
    .card-content
      div(v-if="ctfinding==='other'")
        |You have selected 'other' occlusion. Only ICA, MCA and basilar occlusions are suitable for PSI. Isolated occlusions of ACA, PCA or single vertebral are usually not appropriate for PSI.
        hr
      |This combination of CT findings and/or timeframe do not meet clot retrieval criteria. If the scan shows no bleeding and the patient is still within 4.5h of symptom onset the patient may be suitable for thrombolysis - refer to local policy. Based on the responses given the patient is not suitable for transfer to Auckland Hospital and it is not necessary to discuss the case with the Auckland Hospital on-call neurologist. If uncertain discuss with your local senior physician.
      .card

</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      nobleed: true,
      ctfinding: 'No Occlusion',
      neurologistaccepted: false
    }
  },
  computed: {
    ...mapGetters(['bPatientCriteria', 'iDuration']),
    isAnterior: function () {
      return (this.nobleed & (this.ctfinding === 'ICA' | this.ctfinding === 'MCA'))
    },
    isPosterior: function () {
      return (this.nobleed & this.ctfinding === 'basilar')
    }
  },
  methods: {
    ...mapMutations(['setScanCriteriaStatus']),
    advance () {
      this.setScanCriteriaStatus(true)
      this.$refs.scanCriteriaCollapse.close()
    }
  }
}
</script>

<style>
</style>
