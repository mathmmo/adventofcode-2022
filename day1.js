const fs = require('fs')
const inputText = fs.readFileSync('./src/day1.input.txt', 'utf8')

const bags = inputText.split('\r\n\r\n')
const elfBags = []
for(let items of bags){
    elfBags.push(items.split('\r\n'))
}

let sortedElfBags = []
for(let elfBag of elfBags){
    let sum = 0
    for(let calorie of elfBag){
        sum = sum + parseInt(calorie)
    }
    sortedElfBags.push(sum)
}
sortedElfBags.sort((b,a) => a - b)

console.log('------------------------------👌')
console.log(sortedElfBags[0])
console.log(sortedElfBags[1])
console.log(sortedElfBags[2])
console.log(sortedElfBags[0]+sortedElfBags[1]+sortedElfBags[2])