const express = require('express')
const app = express()

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.status(200).send('Home Page')

})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.all('*',(req,res)=>{
    res.status(404).send('Error, Page not found')
})

app.listen(5000,(req,res)=>{

    console.log('server is running');
    console.log(req)
    console.log(res);
    
})