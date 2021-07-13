<template>
  <div>
    <input placeholder="Category" v-model="newCategory" />
    <button @click="onSaveClick">Add new category!</button>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      newCategory: '',
    }
  },
  methods: {
    onSaveClick () {
      this.$emit('addNewCategory', this.newCategory)
    },
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
    input, select {
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