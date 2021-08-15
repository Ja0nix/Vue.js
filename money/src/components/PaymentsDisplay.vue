<template>
  <v-container>

      <v-data-table
    :headers="headers"
    :items="items"
    class="elevation-1"
  >
    <template v-slot:item.value="{ item }">
      <v-chip
        :color="getColor(item.value)"
        dark
      >
        {{ item.value }}
      </v-chip>
    </template>
    <template v-slot:item.edit="{ item }">
        <v-dialog
          v-model="editMenu"
          width="fit-content"
          :retain-focus="false"
        >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="amber darken-1"
            dark
            depressed
            @click="showPaymentMenu((item.id - 1), item.value, item.category, item.date)"
            v-on="on"
            v-bind="attrs"
          >
            Edit
          </v-btn>
        </template>

        <v-card class="px-6">
          <v-card-title>
            <span class="text-h5">Edit</span>
          </v-card-title>
          <v-card-text>
            <SinglePaymentMenu :categories="categories" :num="num" :sum="sum" :category="category" :date="date" v-on:close="editMenu = false"/>
          </v-card-text>
          <v-btn
            color="amber darken-1"
            dark
            depressed
            @click="editMenu = false"
            class="mb-6"
          >
            Close
          </v-btn>
        </v-card>
      </v-dialog>

    </template>
  </v-data-table>

  </v-container>
</template>
 
<script>
import { mapMutations} from 'vuex'
import SinglePaymentMenu from './SinglePaymentMenu'

export default {
   name: 'PaymentsDisplay',
   components: {
    SinglePaymentMenu,
  },
   data() {
       return {
           headers: [
          { text: '#', value: 'id' },
          { text: 'date', value: 'date' },
          { text: 'category', value: 'category' },
          { text: 'value', value: 'value' },
          { text: 'edit', value: 'edit', sortable: false },
        ],
        editMenu: false,
        num: Number,
        category: String,
        date: String,
        sum: Number,
       }
   },
   props: {
        items: {
            type: Array,
            default: () => ([]),
        },
        categories: Array,
    },
    computed: {
        getFPV(){
            return this.$store.getters.getFullPaymentsValue
        },
    },
    methods: {
        ...mapMutations({
            deletePayment: 'deletePayment',
            editPayment: 'editPayment',
        }),
        showPaymentMenu (num, sum, category, date) {
            console.log(num, sum, category, date)
            this.num = num
            this.category = category
            this.date = date
            this.sum = sum
        },
        openPaymentMenuWithData (num, sum, category, date) {
            console.log(num, sum, category, date)
            this.$modal.show('add', {header: 'Edit my cost', name: 'SinglePaymentMenu', costNumber: num, costSum: sum, costCategory: category, costDate: date, })
        },
        getColor (value) {
            if (value > 400) return 'red'
            else if (value > 200) return 'orange'
            else return 'green'
        },

    }
 }
</script>
 
<style lang="scss" scoped module>
    table {
        background: linear-gradient(45deg, #49a09d, #5f2c82);
        border-collapse: collapse;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(0,0,0,0.1);
        margin: 30px auto;
        font-size: 16px;
    }

    th,
    td {
        padding: 15px;
        background-color: rgba(255,255,255,0.2);
        color: #fff;
    }

    th {
        text-align: left;
    }

    thead {
        th {
            background-color: #55608f;
        }
    }

    tbody {
        tr {
            &:hover {
                background-color: rgba(255,255,255,0.3);
            }
        }
        td {
            position: relative;
            &:hover {
                &:before {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: -9999px;
                    bottom: -9999px;
                    background-color: rgba(255,255,255,0.2);
                    z-index: -1;
                }
            }
        }
    }
</style>