const CF = 2000

console.log("o custo de Fabrica eh :"+CF)

let imposto = (CF/100)*45
let CD = (CF/100)*28
let CC = (CF+CD+imposto)

console.log("28% do destribuidor seria :"+CD)
console.log("45% de Impostos seria :"+ imposto)
console.log("Logo o custo pra comprar este carro seria :"+CC+"$ Reais")