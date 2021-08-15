<template>
  <v-container>
    <v-text-field
      label="Value"
      v-model="value"
      required
    ></v-text-field>

    <v-select
      :items = categories
      v-model="categoryNew"
      label="Category"
      required
    ></v-select>

    <v-text-field
      label="Date"
      v-model="date"
    ></v-text-field>
    <v-divider></v-divider>
    <v-btn
      color="light-green darken-3"
      dark
      depressed
      @click="savePayment"
      v-on:click="$emit('close')"
      class="mb-6"
    >
      Save!
    </v-btn>
    <v-divider></v-divider>
    <v-btn
      color="light-green darken-1"
      dark
      depressed
      @click="deletePaymentS"
      v-on:click="$emit('close')"
      class="mb-6"
    >
      Delete Payment!
    </v-btn>

  </v-container>
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
            categoryNew: this.category,
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
                category: this.categoryNew,
                date: this.day,
                }
        }
            this.editPayment(dataNew)
            console.log(dataNew)

        },
        deletePaymentS() {
            this.deletePayment(this.num)
        },
    },
}
</script>