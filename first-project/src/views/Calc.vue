<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Calculator/>
  </div>
</template>

<script>
// @ is an alias to /src
import Calculator from '@/components/Calculator.vue'

export default {
  name: 'Calc',
  components: {
    Calculator
  }
}
</script>
