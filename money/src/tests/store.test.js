import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeV from '../store/index'
import { cloneDeep } from 'lodash'

test('test', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  // тут возникает ошибка при запуске:
  // TypeError: Cannot convert a Symbol value to a string
  // не полнимаю, что с ней можно сделать....
  const store = new Vuex.Store(cloneDeep(storeV))
  expect(store.state.paymentsList).toBe([])
})

