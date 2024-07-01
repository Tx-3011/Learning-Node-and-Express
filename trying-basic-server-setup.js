const http = require('http')
const{readFileSync, writeFileSync} = require('fs')

const index = readFileSync("./index.html")

const server = new http.createServer((req,res)=>{


    console.log("user on server")
    res.writeHead(200, {'content-type':'text/html'})
    res.write(index)
    res.end()

}) 

server.listen(5000)