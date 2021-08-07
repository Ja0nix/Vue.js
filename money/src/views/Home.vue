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
        <v-btn to="/add/payment/Food?value=200" color="light-green darken-3" dark flat class="my-2" depressed>Food 200</v-btn>
        <v-btn to="/add/payment/Transport?value=50" color="light-green darken-3" dark flat class="my-2" depressed>Transport 50</v-btn>
        <v-btn to="/add/payment/Entertainment?value=2000" color="light-green darken-3" dark flat class="my-2" depressed>Entertainment 2000</v-btn>
    </v-row>

    <v-divider></v-divider>

    <v-row no-gutters class="my-6">
      <v-col cols="6" align="left">
        <v-dialog
          v-model="dialog"
          width="fit-content"
        >
        <template v-slot:activator="{ on }">
          <v-btn
            color="amber darken-1"
            dark
            depressed
            v-on="on"
          >
            ADD NEW COST+
          </v-btn>
        </template>

        <v-card class="px-6">
          <AddPaymentForm @addNewPayment="addNewPaymentD" :categories="categoryList"/>
        </v-card>
      </v-dialog>

      </v-col>

      <v-col cols="6" align="right">
        <v-dialog
          v-model="show"
          width="fit-content"
        >
        <template v-slot:activator="{ on }">
          <v-btn
            color="amber darken-1"
            dark
            depressed
            v-on="on"
          >
            ADD NEW CATEGORY+
          </v-btn>
        </template>

        <v-card class="px-6">
          <AddCategory @addNewCategory="addNewCat" />
        </v-card>
      </v-dialog>

      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row no-gutters class="my-6">
      <v-col cols="6">
      <PaymentsDisplay :items="paymentsList" />
      </v-col>

      <v-col cols="6">
        Место для диаграммы "расходы по категориям"
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import { mapMutations} from 'vuex'
// @ is an alias to /src
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import AddCategory from '../components/AddCategory.vue'
// import PaymentMenu from '../components/PaymentMenu.vue'

export default {
  name: 'Home',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    AddCategory,
    // PaymentMenu
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