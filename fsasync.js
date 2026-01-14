const {readFile, writeFile} = require('fs')

console.log("start")
readFile('./content/first.txt','utf8', (err, res) => {
    if(err){
        console.log(err)
        return
    }
    
    const first = res;
    readFile('./content/second.txt', 'utf8', (err, res) =>
    {
        if(err){
        console.log(err)
        return
        }

        const second = res;
        writeFile('./content/result-async.txt',
            `here is the reult: ${first} ${second}\n`,
            {flag : 'a'},
        (err, res) => {
            if(err){
            console.log(err)
            return
            }

            console.log("done with this task")
        })
    })
    }
) 
console.log("start next task")

module.exports = readFile