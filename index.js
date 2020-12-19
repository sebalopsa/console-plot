var _=require('lodash')
var gen = require('./gen.js')

function plot(sample,char){
sample = sample.map(e=>Number(e))
let min = Number(_.min(sample))
let max = Number(_.max(sample))
let sampleRange = max - min
let range = sampleRange/10
const interval =(i)=>[min+(i-1)*range,min+i*range]
const inRange = (i,val)=>val>=interval(i)[0] && val<interval(i)[1]
console.log("min: ",min)
console.log("max: ",max)
for (let i=10;i>0;i--){
//console.log(interval(i))
//console.log(sample[0])
//console.log(inRange(i,sample[0]))
//console.log((min+(i-1)*range), (min+i*range))
console.log("|",sample.map(
     e=>inRange(i,e)?(char||"*"):" "
).join(' '))
}
console.log(" ",sample.map(()=>"_").join(" "))
}

module.exports = {gen,plot}
