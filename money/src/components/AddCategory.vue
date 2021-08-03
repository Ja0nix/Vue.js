<template>
  <div name="addcategoryform">
    <input placeholder="Category" v-model="newCategory" @input="onType"/>
    <button @click="onSaveClick">Add new category!</button>
    <p name="showCat" v-if="showCat">New category {{ newCat }} successfully added!</p>
    <p name="showEr" v-if="showEr">Type category name!</p>
  </div>
</template>
 
<script>
export default {
  name: 'AddCategory',
  props: {
    newCat: String
  },
  data () {
    return {
      newCategory: '',
      showCat: false,
      showEr: false,
    }
  },
  methods: {
    onSaveClick () {
      if(this.newCategory != '') {
        this.showCat = true;
        this.newCat = this.newCategory;
        this.$emit('addNewCategory', this.newCategory);
      } else {
        this.showEr = true;
      }
    },
    onType () {
      this.showCat = false
      this.showEr = false
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