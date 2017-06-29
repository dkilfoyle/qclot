<template lang="pug">
.card
  .card-title.bg-primary.text-white Patient Criteria
  .card-content

    .list
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

    //- .column.group
    //-   label(style="padding:50px")

        
    //-   label
    //-     q-checkbox(v-model="functional")
    //-     
    //-   label
    //-     q-checkbox(v-model="BSL")
    //-     |   
    //-   label
    //-     q-checkbox(v-model="hospital")
    //-     |   

</label>

</template>

<script>
export default {
  data () {
    return {
      age: false,
      functional: false,
      BSL: false,
      hospital: false
    }
  }
}
</script>

<style>
</style>
