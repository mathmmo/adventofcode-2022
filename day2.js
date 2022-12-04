const fs = require('fs')
const inputText = fs.readFileSync('./src/day2.input.txt', 'utf8')

const matches = inputText.split('\r\n')

//Part 1
const rules = {
    plays: [
        {
            myValue: 'X',
            draw: 'A',
            win: 'C',
            loss: 'B',
            point: 1,
            name: 'rock'
        },
        {
            myValue: 'Y',
            draw: 'B',
            win: 'A',
            loss: 'C',
            point: 2,
            name: 'paper'
        },
        {
            myValue: 'Z',
            draw: 'C',
            win: 'B',
            loss: 'A',
            point: 3,
            name: 'scissors'
        }
    ],
    scores: {
        win: 6,
        draw: 3,
        loss: 0
    }
}

let totalScore = 0

matches.map(game => {
    rules.plays.map(play => {
        const match = game.split(' ')
        if(play.myValue == match[1]){
            let matchRes = Object.keys(play).find(key => play[key] === match[0])
            let sum = rules.scores[matchRes] + play.point
            totalScore += sum
        }
    })
})

console.log(`${totalScore} 👌`)


//Part 2
const rules2 = {
    plays: [
        {
            value: 'A',
            draw: 'A',
            loss: 'C',
            win: 'B',
            point: 1,
            name: 'rock'
        },
        {
            value: 'B',
            draw: 'B',
            loss: 'A',
            win: 'C',
            point: 2,
            name: 'paper'
        },
        {
            value: 'C',
            draw: 'C',
            loss: 'B',
            win: 'A',
            point: 3,
            name: 'scissors'
        }
    ],
    scores: [
        {
            name: 'win',
            point: 6,
            value: 'Z'
        },
        {
            name: 'draw',
            point: 3,
            value: 'Y'
        },
        {
            name: 'loss',
            point: 0,
            value: 'X'
        }
    ]
}

let totalScore2 = 0

matches.map(game => {
    rules2.plays.map(play => {
        const match = game.split(' ')
        if(play.value == match[0]){
            let matchRes = rules2.scores.find(obj => obj.value == match[1])
            let myPoint = 0
            rules2.plays.map(p => {
                if(p.value == play[matchRes.name]){
                    myPoint = p.point
                }
            })
            let sum = myPoint + matchRes.point
            totalScore2 += sum
        }
    })
})

console.log(`${totalScore2} 👌`)