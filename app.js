// // // const os = require('os')

// // // //info about user
// // // const user = os.userInfo()
// // // // console.log(user)

// // // //method returns the system uptime on seconds
// // // //console.log(`The system uptime is ${os.uptime} seconds`)

// // // const currentOS =
// // // {
// // //     name: os.type(),
// // //     release: os.release(),
// // //     totalMem: os.totalmem,
// // //     freeMem: os.freemem()
// // // }

// // // for(key in currentOS)
// // //     console.log(`The OS ${key} is ${currentOS[key]}`)

// // // const path = require('path')

// // // console.log(path.sep)

// // // const filepath = path.join('./content', 'subfolder', 'text.txt')
// // // // console.log(filepath)

// // // const base = path.basename(filepath)
// // // // console.log(base)

// // // const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text')
// // // console.log(absolute)

// // require('./fsasync')

// // const http = require('http')

// // const server = http.createServer((req,res) => {

// //     if(req.url === '/')
// //         return res.end("Welcome to home page")
// //     if(req.url === '/about')
// //         return res.end("Here is our short history")

// //     return res.end(
    
// //         `<html>
// //         <h>Oops</h>
// //         <p>We cant seem to find the page that  you are looking for</p>
// //         <a href="/">Back Home</a>
// //         </html>
// //         `
// //     )
    
// // })

// // server.listen(5000)

// const _ = require("lodash")

// const items = [1, [2, [3, [4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems)
// console.log("Hello World")

// const http = require('http') 

// const server = http.createServer((req, res) =>
// {
//     console.log('request event')
//     res.end("Hello World")
// })

// server.listen(5000, () =>
// {
//     console.log('Server listening on port 5000...')
// })


// const http = require('http')

// const server = http.createServer((req, res) =>
// {
//     if(req.url === '/')
//        return res.end("Home Page")
//     if(req.url === '/about'){
//         return res.end("About")
//     }
//     else
//         return res.end("Error Page")

// })

// server.listen(5000, () =>
// {
//     console.log("Server is listening on port 5000...")
// })

const {readFile} = require('fs')

const path = './content/first.txt'

const getText = (path) =>
{
    return new Promise ((resolve, reject) => {
        readFile(path, 'utf-8', (err, res) =>
        {
            if(err)
                reject(err)
            else
                resolve(res)
        }) 
    })
}

getText(path)
    .then(res => console.log(res))
    .catch((err) => console.log(err))
