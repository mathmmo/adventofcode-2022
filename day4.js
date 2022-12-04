const fs = require('fs')
const inputText = fs.readFileSync('./src/day4.input.txt', 'utf8')

const schedules = inputText.split('\r\n')

let reconPairCount = 0
let overlapCount = 0
schedules.map(schedule => {
    const elf1 = schedule.split(',')[0].split('-')
    const elf2 = schedule.split(',')[1].split('-')
    if((parseInt(elf1[0]) <= parseInt(elf2[0]) && parseInt(elf1[1]) >= parseInt(elf2[1])) || (parseInt(elf2[0]) <= parseInt(elf1[0]) && parseInt(elf2[1]) >= parseInt(elf1[1])))
        reconPairCount++
    
    const elf1Sec = []
    const elf2Sec = []
    for(let e1 = parseInt(elf1[0]); e1 <= parseInt(elf1[1]); e1++){
        elf1Sec.push(e1)
    }
    for(let e2 = parseInt(elf2[0]); e2 <= parseInt(elf2[1]); e2++){
        elf2Sec.push(e2)
    }
    const overlapSec = elf1Sec.filter(sec => elf2Sec.includes(sec))

    if(overlapSec.length > 0)
        overlapCount++

})

console.log(`${reconPairCount} 👌`)
console.log(`${overlapCount} 👌`)