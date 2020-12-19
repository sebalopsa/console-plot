

module.exports = function(min,max,n){
let range = max - min
let random = ()=>Math.random()*range+min

return [...Array(n)].map(()=>random().toFixed())
}

