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

        <v-card class="px-6" align="center">
          <AddCategory @addNewCategory="addNewCat" />
          <v-btn
            color="amber darken-1"
            dark
            depressed
            @click="show = false"
            class="mb-6"
          >
            Close
          </v-btn>
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

export default {
  name: 'Home',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    AddCategory,
  },
  data () {
    return {
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
      this.$store.dispatch('fetchCategories')
      this.$store.dispatch('fetchPaymentsData')
    },

  }
</script>