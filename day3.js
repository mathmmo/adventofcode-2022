const fs = require('fs')
const inputText = fs.readFileSync('./src/day3.input.txt', 'utf8')

const ruckSacks = inputText.split('\r\n')

const items = 'abcdefghijklmnopqrstuvwxyz'
const itemPriority = items + items.toUpperCase()
//Part 1
let dupItemCount = 0
ruckSacks.map(sack => {
    let dupItem
    const compOne = sack.slice(0, (sack.length / 2)).split('')
    const compTwo = sack.slice((sack.length / 2), sack.length).split('')
    compOne.map(itemOne => {
        compTwo.map(itemTwo => {
            if(itemOne == itemTwo)
                dupItem = itemOne
        })
    })
    dupItemCount += itemPriority.indexOf(dupItem) + 1    
})
console.log(`${dupItemCount} 👌`)

//Part 2
let groupSacks = []
let groupElfs = []
let groupCount = 0
ruckSacks.map(sack => {
    if(groupCount >= 2){
        groupCount = 0
    }

    groupElfs.push(sack)
    groupCount++

    if(groupElfs.length == 3){
        groupSacks.push(groupElfs)
        groupElfs = []
    }
})

let badgesSum = 0
groupSacks.map(group => {
    let groupBedge
    let items = group[0].split('')
    for(let item of items){
        if(group[1].indexOf(item) > -1){
            if(group[2].indexOf(item) > -1){
                groupBedge = item
            }
        }
    }
    badgesSum += itemPriority.indexOf(groupBedge) + 1
})

console.log(`${badgesSum} 👌`)