<template>
  <div>
      <button>Save new data</button> 

      <button @click="deletePaymentS">Delete this payment</button>
  </div>
</template>

<script>
import { mapMutations} from 'vuex'

export default {
    name: 'SinglePaymentMenu',
    props: {
        num: Number,
    },

    methods: {
        ...mapMutations({
            deletePayment: 'deletePayment',
        }),
        savePayment() {

        },
        deletePaymentS() {
            this.deletePayment(this.num)
        },
    },
}
</script>

<style>

</style>