import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import PaymentsDisplay from '../components/PaymentsDisplay'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Компонент PaymentsDisplay', () => {

    let getters
    let store
    let modal

    beforeEach(() => {
        getters = {
            getFullPaymentsValue: jest.fn()
        }
        store = new Vuex.Store({
            getters
        })
        modal = {
            show: jest.fn()
        }
    })
    

    it('имеет таблицу в стуктуре с заданными данными', () => {
        const wrapper = shallowMount(PaymentsDisplay, { store, localVue, modal, 
            propsData: {
                    items: [
                        { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
                        { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
                    ]
                }
        })
        //проверка отрисовке таблицы в dom
        expect(wrapper.find('table')).toEqual({"selector": "table"})
        //проверка получения массива значений
        expect(wrapper.vm.items).toEqual([{"category": "Food", "date": "20.03.2020", "id": 1, "value": 169}, {"category": "Navigation", "date": "21.03.2020", "id": 2, "value": 50}]);
        // наличие элементов item в разметке
        expect(wrapper.find('.item').exists()).toBe(true)
    })

})
