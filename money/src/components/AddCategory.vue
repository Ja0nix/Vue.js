<template>
<v-container>
    <v-text-field
      v-model="newCategory"
      label="New Catgory"
      filled
      shaped
      @input="onType"
      :rules="rules"
    ></v-text-field>


    <v-btn
      color="amber darken-1"
      dark
      depressed
      @click="onSaveClick"
      class="mb-6"
    >
      Add new category!
    </v-btn>

    <p name="showCat" v-if="showCat" class="body-1">New category {{ newCategory }} successfully added!</p>

  </v-container>
</template>
 
<script>
export default {
  name: 'AddCategory',
  data () {
    return {
      newCategory: '',
      showCat: false,
      rules: [
        value => !!value || 'Type category name!',
      ],
    }
  },
  methods: {
    onSaveClick () {
      if(this.newCategory != '') {
        this.showCat = true;
        this.$emit('addNewCategory', this.newCategory);
      } 
    },
    onType () {
      this.showCat = false
    },
  }
}
</script>