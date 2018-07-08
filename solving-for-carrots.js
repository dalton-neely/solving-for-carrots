const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let counter = 0
let max = 0
let carrots = ''

rl.on('line', input => {
    if(counter === 0){
        carrots = input.split(' ')[1]
        max = parseInt(input.split(' ')[0],10)
    }
    counter++
    if(counter === max){
        console.log(carrots)
        rl.close()
    }
})