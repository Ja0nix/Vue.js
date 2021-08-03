import {  mount } from '@vue/test-utils'
import AddCategory from '../components/AddCategory'

describe('Компонент AddCategory', () => {
    // Монтируем компонент и получаем wrapper
    const wrapper = mount(AddCategory)

    // проверка наличия кнопки в разметке
    it('имеет кнопку', () => {
      expect(wrapper.find('button')).toEqual({"selector": "button"})
    })

    it('Категория по умолчанию равно нулю', () => {
      expect(wrapper.vm.newCategory).toBe('')
    })

    it('проверка передачи новой категории при сохранении', () => {
      expect(wrapper.vm.newCategory).toBe('')
      const input = wrapper.find('input')
      input.element.value = 'Test'
      wrapper.vm.$emit('onSaveClick', input.element.value)
      // проверка, что с событием были переданы определённые данные
      expect(wrapper.emitted().onSaveClick[0]).toEqual(['Test'])
    })


    it('нет скрытых элементов', () => {
      expect(wrapper.html()).toEqual(expect.not.stringContaining('showEr'));
      expect(wrapper.html()).toEqual(expect.not.stringContaining('showCat'));
    })

    it('нажатие на кнопку отображает сообщение об ошибке при отсутствии данных в инпуте', () => {
      expect(wrapper.vm.showEr).toBe(false)

      const button = wrapper.find('button')
      button.trigger('click')
      
      expect(wrapper.vm.showEr).toBe(true)
    })

    it('заполнение формы coхраняет название категории', () => {
      
      const input = wrapper.find('input')
      input.element.value = 'TestCategoryName'
      input.trigger('input')

      expect(wrapper.vm.newCategory).toBe('TestCategoryName')
    })

    it('название категории выводится в p', async () => {
      
      await wrapper.setProps({ newCat: 'TestCategoryName' })
      await wrapper.setData({ showCat: true })

      expect(wrapper.text()).toContain('TestCategoryName')
    })
    
  })
