import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import ModalWindow from '../plugins/ModalWindow/index'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

describe('Home.vue', () => {
  let actions
  let getters
  let store
  let modal

  beforeEach(() => {
    actions = {
      setPaymentsListData: jest.fn(),
      addNewCategoryData: jest.fn(),
      addNewPaymentData: jest.fn(),
      fetchCategories: jest.fn(),
      fetchPaymentsData: jest.fn(),
      // fetchPaymentsData: () => [
      //   { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
      //   { "id": 2, "date": "21.03.2020", "category": "Transport", "value": 50 }
      // ],
      // fetchCategories: () => ['Food', 'Transport'],
    }
    getters = {
      getPaymentsList: () => [
        { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
        { "id": 2, "date": "21.03.2020", "category": "Transport", "value": 50 }
      ],
      getCategoryList: () => ['Food', 'Transport'],
      // getPaymentsList: jest.fn(),
      // getCategoryList: jest.fn(),
    }
    store = new Vuex.Store({
      actions,
      getters
    })
    modal = {
        mocks: {
            $EventBus: {
                $emit() {},
                $on() {}
            },
            paymentsList: () => [
              { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
              { "id": 2, "date": "21.03.2020", "category": "Transport", "value": 50 }
            ],
            categoryList: () => ['Food', 'Transport'],
        }
    }
  })

  // проверка наличия кнопки в разметке
  it('имеет кнопку', () => {
    const wrapper = shallowMount(Home, ModalWindow, { store, localVue, modal})
    expect(wrapper.find('button')).toEqual({"selector": "button"})
  })
  
})