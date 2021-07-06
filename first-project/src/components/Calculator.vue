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
      <div class="cart-block" v-show="checked">
        <button v-for="number in numbers" v-bind:key="number" @click="numValue = number, selectedOperand()">{{number}}</button>
        <button @click="selectedOperandDelete()">Удалить последний символ</button>
        <br>
        <input type="radio" id="one" value="operand1" v-model="picked">
        <label for="one">operand1</label>
        <br>
        <input type="radio" id="two" value="operand2" v-model="picked">
        <label for="two">operand2</label>
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
           picked: 0,
           numValue: 0,
           operand01: [],
           operand02: [],
           numbers: [0,1,2,3,4,5,6,7,8,9],
       }
   },
   methods: {
     selectedOperand() {
       if(this.picked === "operand1") {
         this.operand01.push(this.numValue);
         this.operand1 = +this.operand01.join('');
       }
       if(this.picked === "operand2") {
         this.operand02.push(this.numValue);
         this.operand2 = +this.operand02.join('')
       }
     },
     selectedOperandDelete() {
       if(this.picked === "operand1") {
         this.operand01.splice(-1,1);
         this.operand1 = +this.operand01.join('');
       }
       if(this.picked === "operand2") {
         this.operand02.splice(-1,1);
         this.operand2 = +this.operand02.join('');
       }
     }
   }
 }
</script>