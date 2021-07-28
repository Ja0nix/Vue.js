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
      <button :class="[$style.newCost]" @click="showPaymentForm">ADD NEW COST+</button>

      <AddCategory @addNewCategory="addNewCat" v-show="show" />
      <PaymentsDisplay :items="paymentsList" />
      <PaymentMenu @addNewPayment="addNewPaymentD" :categories="categoryList" v-if="showModalName" :settings="settings"/>

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
// import AddPaymentForm from '@/components/AddPaymentForm.vue'
import AddCategory from '@/components/AddCategory.vue'
import PaymentMenu from '@/components/PaymentMenu.vue'

export default {
  name: 'Home',
  components: {
    PaymentsDisplay,
    // AddPaymentForm,
    AddCategory,
    PaymentMenu
  },
  data () {
    return {
      // paymentsList: [],
      showModalName: '',
      settings: {}
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
    onShown(settings) {
      this.showModalName = settings.name
      this.settings = settings
    },
    onHide() {
      this.showModalName = ''
      this.settings = {}
    },
    showPaymentForm() {
      this.$modal.show('add', {name: 'add', header: 'Add new cost'})
    },

  },
  computed: {
    paymentsList(){
      return this.$store.getters.getPaymentsList
    },
    categoryList(){
      return this.$store.getters.getCategoryList
    },
  },
  created () {
      // this.paymentsList = this.fetchData()
      // this.$store.commit('setPaymentsListData', this.fetchData())
      // this.updatePaymentsListData(this.fetchData())
      this.$store.dispatch('fetchCategories')
      this.$store.dispatch('fetchPaymentsData')
      this.$modal.EventBus.$on('show', this.onShown)
      this.$modal.EventBus.$on('hide', this.onHide)
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