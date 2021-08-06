<template>
  <v-container>
    <v-row no-gutters class="my-6">
      <v-col align="left">
        <h1>My personal costs</h1>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row no-gutters justify="space-between" class="my-6">
        <h2>Quick add:</h2>
        <v-btn to="/add/payment/Food?value=200" color="light-green darken-3" dark flat>Food 200</v-btn>
        <v-btn to="/add/payment/Transport?value=50" color="light-green darken-3" dark flat>Transport 50</v-btn>
        <v-btn to="/add/payment/Entertainment?value=2000" color="light-green darken-3" dark flat>Entertainment 2000</v-btn>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col-12>
        <v-dialog
          v-model="dialog"
          width="500"
        >
        <template v-slot:activator="{ on }">
          <v-btn
            color="red lighten-2"
            dark
            v-on="on"
          >
            ADD NEW COST+
          </v-btn>
        </template>

        <v-card>
          <PaymentMenu @addNewPayment="addNewPaymentD" :categories="categoryList" :settings="settings"/>
        </v-card>
      </v-dialog>

      </v-col-12>
    </v-row>
      <main>
        
        <button :class="[$style.newCost]" @click="showPaymentForm">ADD NEW COST+</button>
        <button :class="[$style.newCost]" @click="show = !show">ADD NEW CATEGORY+</button>

        <AddCategory @addNewCategory="addNewCat" v-show="show" />
        <PaymentsDisplay :items="paymentsList" />
        <transition name="modalWindow" >
          <PaymentMenu @addNewPayment="addNewPaymentD" :categories="categoryList" v-if="showModalName" :settings="settings"/>
        </transition>
      </main>
  </v-container>
</template>

<script>
import { mapMutations} from 'vuex'
// @ is an alias to /src
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
// import AddPaymentForm from '@/components/AddPaymentForm.vue'
import AddCategory from '../components/AddCategory.vue'
import PaymentMenu from '../components/PaymentMenu.vue'

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
      settings: {},
      show: false,
      dialog: false,
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
       this.dialog = false
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
      this.$modal.show('add', {name: 'AddPaymentForm', header: 'Add new cost'})
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
<style lang="scss">
.modalWindow-enter-active, .modalWindow-leave-active {
  transition: opacity 0.5s;
}
.modalWindow-enter, .modalWindow-leave-to {
  opacity: 0;
}
</style>