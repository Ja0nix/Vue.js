import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },  
    addNewPaymentData (state, payload) {
      state.paymentsList.push(payload)
    },
    setCategories (state, payload) {
      state.categoryList = payload
    },
   
  },

  // commit - вызв мутации
  // daipatch - вызов эaction'a
  actions: {
    fetchCategories ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(['Food', 'Transport', 'Education', 'Entertainment', 'Sport'])
        }, 1000)
      })
        .then(res => {
          commit('setCategories', res)
        })
    },   
  },
  modules: {
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getFullPaymentsValue: state => state.paymentsList.reduce((res, cur) => res + cur.value, 0),
    getCategoryList: state => state.categoryList,
  }
})
