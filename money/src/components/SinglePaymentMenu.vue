<template>
  <div>
        <input placeholder="Value" v-model="value"  />
        <select v-model="category">
        <option v-for="(item,idx) in categories" :value="category" :key="idx">
        {{ item }}
        </option>
        </select>
        <input placeholder="Date" v-model="day" />
      <button @click="savePayment">Save new data</button> 

      <button @click="deletePaymentS">Delete this payment</button>
  </div>
</template>

<script>
import { mapMutations} from 'vuex'

export default {
    name: 'SinglePaymentMenu',
    props: {
        num: Number,
        categories: Array,
        category: String,
        date: String,
        sum: Number,
    },
    data () {
        return {
            value: +this.sum,
            categoryEdit: this.category,
            day: this.date,
            position: this.num,
        }
    },

    methods: {
        ...mapMutations({
            deletePayment: 'deletePayment',
            editPayment: 'editPayment',
        }),
        savePayment() {
            const dataNew = {
                position: this.num,
                data: {
                value: +this.value,
                category: this.categoryEdit,
                date: this.day,
                }
        }
            this.editPayment(dataNew)
            // console.log(dataNew)

        },
        deletePaymentS() {
            this.deletePayment(this.num)
        },
    },
}
</script>

<style>

</style>