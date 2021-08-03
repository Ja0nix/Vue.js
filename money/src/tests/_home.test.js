import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Home from '../views/Home'

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
    }
    getters = {
      getPaymentsList: jest.fn(),
      getCategoryList: jest.fn(),
    }
    store = new Vuex.Store({
      actions,
      getters
    })
    modal = {
        show: jest.fn(),
        mocks: {
          // [Vue warn]: Error in created hook: "TypeError: Cannot read property 'EventBus' of undefined"
            $EventBus: {
                $emit() {},
                $on() {}
            },
        }
    }
  })

  // проверка наличия кнопки в разметке  
  it('имеет кнопку', () => {
    const wrapper = shallowMount(Home, { store, localVue, modal })
    expect(wrapper.find('button')).toEqual({"selector": "button"})
})

})