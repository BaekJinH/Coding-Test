const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const result = Number(line) % 2 ? 'odd' : 'even'
    console.log(line, 'is', result)
})