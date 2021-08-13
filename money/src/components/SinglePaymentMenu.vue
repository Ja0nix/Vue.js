<template>
  <v-container>
    <v-text-field
      label="Value"
      v-model="value"
      required
    ></v-text-field>

    <v-select
      :items = categories
      v-model="category"
      label="Category"
      required
    ></v-select>

    <v-text-field
      label="Date"
      v-model="date"
    ></v-text-field>

    <v-btn
      color="light-green darken-3"
      dark
      depressed
      @click="onSaveClick"
      class="mb-6"
    >
      Save!
    </v-btn>

        <input placeholder="Value" v-model="value"  />
        <select v-model="category">
        <option v-for="(item,idx) in categories" :value="category" :key="idx">
        {{ item }}
        </option>
        </select>
        <input placeholder="Date" v-model="day" />
      <button @click="savePayment">Save new data</button> 

      <button @click="deletePaymentS">Delete this payment</button>
  </v-container>
</template>

<script>
import { mapMutations} from 'vuex'

export default {
    name: 'SinglePaymentMenu',
    props: {
        num: Number,
        categories: Array,
        date: String,
        sum: Number,
    },
    data () {
        return {
            value: +this.sum,
            category: this.category,
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
                category: this.category,
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