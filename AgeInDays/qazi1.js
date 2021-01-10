// challenge 1:your age in days

const daysAge = document.getElementById
function ageInDays(){
var birthYear = prompt("In which year were you born?")
var days= (2020- birthYear)*365
var h1= document.createElement('h1')
var textAnswer = document.createTextNode('You are '+ days + ' '+ 'days old.')
h1.setAttribute('id', 'days')
h1.appendChild(textAnswer)
document.getElementById('the-result').appendChild(h1)
}
function reset(){
    document.getElementById('days').remove()
}
























// function yrtodays(years,months){
// result= (years*365) + (months*30)
// console.log(result)
// }
// yrtodays(21,2)