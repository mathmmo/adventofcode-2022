const fs = require('fs')
const inputText = fs.readFileSync('./src/day6.input.txt', 'utf8')

const checkSignal = (signal, type) => {
    let markerSize = 4
    if(type == 'message'){
        markerSize = 14
    }
    for(let i = 0; i < inputText.length; i++){
        const marker = inputText.slice(i, (i + markerSize)).split('')
        const checkDup = marker.filter((item, index) => marker.indexOf(item) != index)
        if(checkDup.length < 1){
            return i+markerSize
        }
    }
}

console.log(`${checkSignal(inputText, 'packet')} 👌`)
console.log(`${checkSignal(inputText, 'message')} 👌`)