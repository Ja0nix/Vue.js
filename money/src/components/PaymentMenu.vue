<template>
  <div :class="$style.wrapper">
    <!-- <div :class="header">{{ settings.header }}</div> -->
    <!-- <div :class="wrapper">
    <div :class="header"></div> -->
    <div :class="content">
         <AddPaymentForm @addNewPayment="addNewPaymentD" :categories="categories" />
      <!-- <AuthForm v-if="settings.content === 'authform'" /> -->
    </div>
    <div :class="footer">
      <button @click="onCloseClick">Close</button>
    </div>
  </div>
</template>
 
<script>
import AddPaymentForm from './AddPaymentForm'
 
export default {
  components: {
    AddPaymentForm,
  },
  props: {
    settings: Object,
    categories: Array,
    data: Object,
  },
  methods: {
    onCloseClick () {
        this.$emit('close')
    },
    addNewPaymentD (data) {
        this.$emit('addNewPayment', data)
    }
  }
}
</script>

<style lang="scss" scoped module>
    .wrapper {
        position: absolute;
        background: #eee;
        top: 50px;
    }
</style>
 
