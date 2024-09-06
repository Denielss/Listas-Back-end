const x1 = 3
const y1 = 6
const x2 = 9
const y2 = 12

console.log("x1:"+x1)
console.log("y1:"+y1)
console.log("x2:"+x2)
console.log("y2:"+y2)

let rel1 = (x2-x1)**2
let rel2 = (y2-y1)**2
let rel3 = Math.sqrt(rel1+rel2)

console.log("A Distancia entre eles:"+rel3)
