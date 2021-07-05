<template>
  <div class="about">
    <h1>Calculator</h1>
    <div class="display">
       <input v-model="operand1"/>
       <input v-model="operand2"/>
       = {{result}}
    </div>
    <div class="keyboard">
        <button v-on:click="result = operand1 + operand2">+</button>  
        <button v-on:click="result = operand1 - operand2">-</button>  
        <button @click="result = operand1 / operand2">/</button>  
        <button @click="result = operand1 * operand2">*</button>  
        <button @click="result = Math.pow(operand1, operand2)">В степень</button>  
        <button @click="result = Math.floor(operand1/operand2)">Целочисленное деление</button>  
    </div>
    <div>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">Отобразить экранную клавиатуру</label>
      <div class="cart-block" v-show="checked">туту ррарра
        
      </div>
    </div>
  </div>
</template>

<script>
 export default {
   name: 'Calculator',
   data(){
       return {
           operand1: 0,
           operand2: 0,
           result: 0,
           checked: false,
       }
   }
 }
</script>