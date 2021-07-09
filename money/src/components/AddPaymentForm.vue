<template>
  <div>
    <input placeholder="Value" v-model="value" />
    <input placeholder="Category" v-model="category" />
    <input placeholder="Date" v-model="date" />
    <button @click="onSaveClick">Save!</button>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      value: '',
      category: '',
      date: '',
    }
  },
  computed: {
    getCurrentDate () {
      const today = new Date();
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },
  methods: {
    onSaveClick () {
      const data = {
        value: +this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
      }
      this.$emit('addNewPayment', data)
    }
  }

}
</script>
 
<style lang="scss" scoped module>
    button {
        background: linear-gradient(45deg, #49a09d, #5f2c82);
        box-shadow: 0 0 20px rgba(0,0,0,0.1);
        color: white;
        font-size: 16px;
        border: none;
        padding: 15px 20px;
        margin: 30px auto;
    }
    input {
        background: linear-gradient(45deg, #438f8d31, #602c822c);
        box-shadow: 0 0 20px rgba(0,0,0,0.1);
        color: black;
        font-weight: bold;
        font-size: 16px;
        border: none;
        padding: 15px 20px;
        margin: 30px auto;
    }
</style>