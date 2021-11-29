let ResultsBubble = document.querySelector("#Results-Bubble")
let InputOne = document.querySelector("#Input-One")
let InputTwo = document.querySelector("#Input-Two")
let AddButton = document.querySelector("#Add-Button")
let SubtractButton = document.querySelector("#Subtract-Button")
let MultiplyButton = document.querySelector("#Multiply-Button")
let DivideButton = document.querySelector("#Divide-Button")

AddButton.addEventListener("click", function() {
ResultsBubble.innerHTML = Number(InputOne.value) + Number(InputTwo.value)
})

SubtractButton.addEventListener("click", function() {
    ResultsBubble.innerHTML = Number(InputOne.value) - Number(InputTwo.value)
})

MultiplyButton.addEventListener("click", function() {
    ResultsBubble.innerHTML = Number(InputOne.value) * Number(InputTwo.value)})

DivideButton.addEventListener("click", function() {
    ResultsBubble.innerHTML = Number(InputOne.value) / Number(InputTwo.value)
})