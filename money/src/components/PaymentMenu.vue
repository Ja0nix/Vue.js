<template>
  <div :class="$style.wrapper">
    <div :class="header">{{ settings.header }}</div>
    <!-- <div :class="wrapper">
    <div :class="header"></div> -->
    <div :class="content">
      <!-- <component :is="settings.name" /> -->
         <AddPaymentForm @addNewPayment="addNewPaymentD" :categories="categories" v-if="settings.name === 'AddPaymentForm'"/>
         <SinglePaymentMenu  v-if="settings.name === 'SinglePaymentMenu'" :num="settings.costNumber" />
      <!-- <AuthForm v-if="settings.content === 'authform'" /> -->
    </div>
    <div :class="footer">
      <button @click="onCloseClick">Close</button>
    </div>
  </div>
</template>
 
<script>
import AddPaymentForm from './AddPaymentForm'
import SinglePaymentMenu from './SinglePaymentMenu'
 
export default {
  components: {
    AddPaymentForm,
    SinglePaymentMenu,
  },
  props: {
    settings: {
      type: Object,
    },
    categories: Array,
    data: Object,
  },
  methods: {
    onCloseClick () {
        // this.$emit('close')
        this.$modal.hide()
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
            margin: auto;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: fit-content;
            height: fit-content;
            padding: 20px;
    }
</style>
 
