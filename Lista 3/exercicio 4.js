const DIASDEVIDA = 6500

console.log("a pessoa tem :"+DIASDEVIDA+" dias de vida")

let anos =(DIASDEVIDA/365)^0
let Sanos =(DIASDEVIDA%365)
let meses =(Sanos/30)^0
let dias =(Sanos%30)

console.log("ou Exatamnete:"+anos+" anos, "+meses+"meses e "+dias+"dias de vida")
