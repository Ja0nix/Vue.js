<template>
  <div :class="[$style.wrapper]">
    <header>
      <div :class="[$style.title]">My personal costs</div>
    </header>
    <main>
      <a href="/add/payment/Food?value=200" :class="[$style.newCost]">Food 200</a> | 
      <a href="/add/payment/Transport?value=50" :class="[$style.newCost]">Transport 50</a> | 
      <a href="/add/payment/Entertainment?value=2000" :class="[$style.newCost]">Entertainment 2000</a>
      <br>
      <button :class="[$style.newCost]" @click="show = !show">ADD NEW COST+</button>
      <AddPaymentForm @addNewPayment="addNewPaymentD" v-show="show" :categories="categoryList" />
      <AddCategory @addNewCategory="addNewCat" v-show="show" />
      <PaymentsDisplay :items="paymentsList" />

      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> 
    </main>
  </div>

</template>

<script>
import { mapMutations} from 'vuex'
// @ is an alias to /src
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import AddCategory from '@/components/AddCategory.vue'

export default {
  name: 'AutoPayment',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    AddCategory
  },
  data () {
    return {
      // paymentsList: [],
      show: true,
    }
  },
  methods: {
     ...mapMutations({
      updatePaymentsListData:'setPaymentsListData',
      addNewPaymentData: 'addNewPaymentData',
      addNewCategoryData: 'addNewCategoryData',
     }),
     addNewPaymentD(value){
       this.addNewPaymentData(value)
     },
     addNewCat(value){
       this.addNewCategoryData(value)
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
    },
  },
  beforeMount(){
        this.addNewPaymentD()
    },
  created () {
      // this.paymentsList = this.fetchData()
      // this.$store.commit('setPaymentsListData', this.fetchData())
      // this.updatePaymentsListData(this.fetchData())
      this.$store.dispatch('fetchCategories')
      this.$store.dispatch('fetchPaymentsData')
    },

  }
</script>

<style lang="scss" module>
  .wrapper {
    margin: 0 auto;
  }
  .title {
    font-size: 40px;
    margin-bottom: 50px;
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