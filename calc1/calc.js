class Calculator{
        constructor(prevOperator, currentOperator){
                this.prevOperator=prevOperator
                this.currentOperator=currentOperator
                this.clear()
}


clear(){
        this.prevOperand=''
        this.currentOperand=''
        this.operation=undefined
}

delete(){
        this.currentOperand=this.currentOperand.toString().slice(0,-1)

}

appendNumber(number){
        if (number==='.' && this.currentOperand.includes('.')) return
        this.currentOperand=this.currentOperand.toString() + number.toString()
        
}

chooseOperation(operation){
   if(this.currentOperand==='') return
   if(this.prevOperand!==''){
           this.compute()
   }
   this.operation =operation
   this.prevOperand =this.currentOperand
   this.currentOperand=''
}

compute(){
let computation;
const prev = parseFloat(this.prevOperand)
const current = parseFloat(this.currentOperand)
if(isNaN(prev)|| isNaN(current)) return
switch(this.operation){
      case '+':
        computation= prev + current
        break
      case '-':
         computation= prev - current
         break
      case '*':
         computation= prev * current
         break 
      case '/':
         computation= prev/current
        break   
      default:
        return
} 
      this.currentOperand=computation
      this.operation=undefined
      this.prevOperand=''
}
getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits=parseFloat(stringNumber.split('.')[0])

        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay 
        if (isNaN(integerDigits)){
                integerDisplay = ''
        }else{
                integerDisplay=integerDigits.toLocaleString('en',{
                        maximumFractionDigits:0 })
        }
        if(decimalDigits != null){
                return `${integerDisplay}.${decimalDigits}`
        }else{
                return integerDisplay
        }
}

updateDisplay(){
   this.currentOperator.innerText=this.currentOperand
   this.getDisplayNumber(this.currentOperand)
   if(this.operation!=null){
           this.prevOperator.innerText=
           `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`
   }else{
           this.prevOperator.innerText=''
   }

}
}


let numberBtns = document.querySelectorAll('.number')
let operationsBtns = document.querySelectorAll('.operation')
let clearBtn = document.querySelector('.clear-btn')
let equalsBtn = document.querySelector('.result')
let deleteBtn = document.querySelector('.delete-btn')
let prevOperator = document.querySelector('.prev-operand')
let currentOperator = document.querySelector('.current-operand')


let calculator =new Calculator(prevOperator,currentOperator)

numberBtns.forEach(button=>{
        button.addEventListener('click', ()=>{
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
        })
})


operationsBtns.forEach(button=>{
        button.addEventListener('click', ()=>{
                calculator.chooseOperation(button.innerText)
                calculator.updateDisplay()
        })
})

equalsBtn.addEventListener('click', button=>{
        calculator.compute()
        calculator.updateDisplay()
})
clearBtn.addEventListener('click', button=>{
        calculator.clear()
        calculator.updateDisplay()
})
deleteBtn.addEventListener('click', button=>{
        calculator.delete()
        calculator.updateDisplay()
})