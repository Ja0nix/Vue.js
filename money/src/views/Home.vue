<template>
  <div :class="[$style.wrapper]">
    <header>
      <div :class="[$style.title]">My personal costs</div>
    </header>
    <main>
      <button :class="[$style.newCost]" @click="show = !show">ADD NEW COST+</button>
      <AddPaymentForm @addNewPayment="addNewPaymentD" v-show="show" :categories="categoryList" />
      <PaymentsDisplay :items="paymentsList" />
    </main>
  </div>

</template>

<script>
import { mapMutations} from 'vuex'
// @ is an alias to /src
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'

export default {
  name: 'Home',
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  data () {
    return {
      // paymentsList: [],
      show: false,
    }
  },
  methods: {
     ...mapMutations({
      updatePaymentsListData:'setPaymentsListData',
      addNewPaymentData: 'addNewPaymentData',
     }),
     addNewPaymentD(value){
       this.addNewPaymentData(value)
     },
    fetchData () {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169,
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360,
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532,
        },
      ]
    },
    // addNewPayment (data) {
    //   this.paymentsList = [...this.paymentsList, data]
    // }

  },
  computed: {
    paymentsList(){
      return this.$store.getters.getPaymentsList
    },
    categoryList(){
      return this.$store.getters.getCategoryList
    }
  },
    created () {
      // this.paymentsList = this.fetchData()
      // this.$store.commit('setPaymentsListData', this.fetchData())
      this.updatePaymentsListData(this.fetchData())
      this.$store.dispatch('fetchCategories')
    },

  }
</script>

<style lang="scss" module>
  .wrapper {
    margin: 0 auto;
  }
  .title {
    font-size: 40px;
  }
  .newCost {
    background: linear-gradient(45deg, #49a09d, #5f2c82);
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    color: white;
    border: none;
    padding: 15px 20px;
    margin: 30px auto;
    font-size: 16px;
  }
</style>