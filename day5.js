const fs = require('fs')
const inputText = fs.readFileSync('./src/day5.input.txt', 'utf8')

const moves = inputText.split('\r\n')

const initCargo = [
    [
        'G',
        'W',
        'L',
        'J',
        'B',
        'R',
        'T',
        'D',
    ],
    [
        'C',
        'W',
        'S',
    ],
    [
        'M',
        'T',
        'Z',
        'R',
    ],
    [
        'V',
        'P',
        'S',
        'H',
        'C',
        'T',
        'D',
    ],
    [
        'Z',
        'D',
        'L',
        'T',
        'P',
        'G',
    ],
    [
        'D',
        'C',
        'Q',
        'J',
        'Z',
        'R',
        'B',
        'F',
    ],
    [
        'R',
        'T',
        'F',
        'M',
        'J',
        'D',
        'B',
        'S',
    ],
    [
        'M',
        'V',
        'T',
        'B',
        'R',
        'H',
        'L',
    ],
    [
        'V',
        'S',
        'D',
        'P',
        'Q',
    ],
]

const initCargo9000 = JSON.parse(JSON.stringify(initCargo))

moves.map(move => {
    const splitFrom = move.split(' from ')
    const moveQty = parseInt(splitFrom[0].replaceAll('move ', ''))
    const moveFrom = parseInt(splitFrom[1].split(' ')[0])
    const moveTo = parseInt(splitFrom[1].split(' ')[2])
    
    let topPack = []
    for(let qty = 1; qty <= moveQty; qty++){
        let topCrate = initCargo[moveFrom-1].shift()
        topPack.push(topCrate)
        let topCrate9000 = initCargo9000[moveFrom-1].shift()
        
        initCargo9000[moveTo-1].unshift(topCrate9000)
    }
    
    topPack.reverse().map(topCrate => initCargo[moveTo-1].unshift(topCrate))
})

const readTopCrates = (arr) => {
    let textRes = ''
    arr.map(a => {
        textRes += a[0]
    })
    return textRes
}

console.log(`${readTopCrates(initCargo9000)} 👌`)
console.log(`${readTopCrates(initCargo)} 👌`)