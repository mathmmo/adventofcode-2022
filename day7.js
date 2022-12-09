const fs = require('fs')
const inputText = fs.readFileSync('./src/day7.input.txt', 'utf8')

const commandLines = inputText.split('\r\n')

// const commandLines = [
//     '$ cd root',
//     '$ ls',
//     'dir a',
//     '14848514 b.txt',
//     '8504156 c.dat',
//     'dir d',
//     '$ cd a',
//     '$ ls',
//     'dir e',
//     '29116 f',
//     '2557 g',
//     '62596 h.lst',
//     '$ cd e',
//     '$ ls',
//     '584 i',
//     '$ cd ..',
//     '$ cd ..',
//     '$ cd d',
//     '$ ls',
//     '4060174 j',
//     '8033020 d.log',
//     '5626152 d.ext',
//     '7214296 k',
// ]

let index = 0

const fyleSystem = [{
    name: 'root',
    type: 'dir',
    content: [],
    size: 0,
    parent: '',
    level: index
}]

let currentDir = 'root'
let currentPath = 'root-0'
commandLines.map(cmdLine => {
    const path = currentPath.split('/')
    const parent = path[path.length-1]
    const lineInfo = cmdLine.split(' ')
    let lineType = lineInfo[0] == '$' ? 'command' : lineInfo[0] == 'dir' ? 'dir' : 'file'
    
    if(lineType == 'command'){
        if(lineInfo[1] == 'cd'){
            if(lineInfo[2] == '..'){
                if(currentDir != 'root'){
                    index--
                    currentDir = path.pop()
                    currentPath = path.join('/')
                }
            } else {
                currentDir = lineInfo[2]
                if(currentDir != 'root'){
                    index++
                    currentPath += `/${lineInfo[2]}-${index}`
                }
            }
        }
    } else {
        let size = 0
        if(lineType == 'file'){
            for(p of path){
                let name = p.split('-')[0]
                let lvl = p.split('-')[1]
                // console.log(path)
                size = parseInt(lineInfo[0])
                fyleSystem.find(current => {
                    // console.log(current)
                    if(current.name == name && current.level == lvl){
                        current.size += size
                    }
                })
            }
        }
        if(fyleSystem.find(dir => dir.name !== lineInfo)){
            let currentIndex = parseInt(parent.split('-')[1])
            fyleSystem.push({
                name: lineInfo[1],
                type: lineType,
                content: [],
                size: size,
                parent: parent,
                level: currentIndex + 1
            })
        }
    }
})

let sum = {
    value: 0,
    directories: []
}
for(f of fyleSystem){
    if(f.type == 'dir' && f.size <= 100000){
        sum.value += f.size
        sum.directories.push(f.name)
    }
}
// console.log(currentPath)
// console.log(fyleSystem)

console.log(sum)