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

    <p name="showErr" v-if="showErr" class="body-1">All fields are required</p>
  </v-container>
</template>
 
<script>
export default {
  props: ['categories'],
  data () {
    return {
      value: this.$route.query.value,
      category: this.$route.params.category,
      date: '',
      showErr: false,
    }
  },
  computed: {
    getCurrentDate () {
      const today = new Date();
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },
  },
  methods: {
    onSaveClick () {
      const data = {
        value: +this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
      }
      if ((this.value != undefined) && (this.category != undefined)) {
        this.$emit('addNewPayment', data)
      } else {
        this.showErr = true
      }
    },
  },
  created() {
    this.date = this.getCurrentDate
  },
}
</script>