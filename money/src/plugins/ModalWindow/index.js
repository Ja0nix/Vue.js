export default {
    install (Vue) {
      if (this.installed) {
        return
      }
   
      this.installed = true
   
      Vue.prototype.$modal = {
        // создаем новый экземпляр Vue
        // который будет выступать в роли паттерна EventBus
        EventBus: new Vue(),
   
        show (name, settings) {
          // сообщаем, что наступило событие shown
          // вместе с событием передаем параметры из аргументов функции
          this.EventBus.$emit('show', { name, ...settings})
        },
   
        hide () {
          // сообщаем, что наступило событие hide
          this.EventBus.$emit('hide')
        }
      }
    }
  }
   
  