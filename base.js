let Add = document.querySelector("#Add")
let Subtract = document.querySelector("#Subtract")
let Multiply = document.querySelector("#Multiply")
let Divide = document.querySelector("#Divide")
let ResultNumber =  document.querySelector("#Result-Number")
let NumberOne = document.querySelector("#Number-One")
let NumberTwo = document.querySelector("#Number-Two")

Add.addEventListener("click", function(){
    ResultNumber.innerHTML = (Number(NumberOne.value)) + (Number(NumberTwo.value))
})

Subtract.addEventListener("click", function(){
    ResultNumber.innerHTML = (Number(NumberOne.value)) - (Number(NumberTwo.value))
})

Multiply.addEventListener("click", function(){
    ResultNumber.innerHTML = (Number(NumberOne.value)) * (Number(NumberTwo.value))
})

Divide.addEventListener("click", function(){
    ResultNumber.innerHTML = (Number(NumberOne.value)) / (Number(NumberTwo.value))
})