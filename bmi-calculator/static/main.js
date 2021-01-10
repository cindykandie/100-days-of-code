const weight = document.querySelector('.UIweight')
const height = document.querySelector('.UIheight')
const BMI = document.querySelector('.bmi-result')
const healthMessage = document.querySelector('.health-message')


function getBMI(){
    let theBmi = weight.value/height.value
    console.log(theBmi)
}
