const s = 21500

console.log("o evento formal durou :"+ s +" segundos")

let minutos = (s/60)^0
let horas =(minutos/60)^0
let ss =(s%60)
let Sminutos = (minutos%60)

console.log("Foram exatamentes :"+horas+" horas, "+Sminutos+"minutos, "+ss+"segundos de evento")