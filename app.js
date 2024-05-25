
const express = require('express')
const path = require('path')

const app = express()

//setup static and middleware
app.use(express.static('./public'))

//Simply dump them in public
//SSR
// app.get('/',(req,res) => {
//     res.sendFile(path.resolve(__dirname,'./practice app/index.html'))
// })

app.all('*',(req,res) => {
    res.status(404).send(`Resource not found!`)
})

app.listen(5000,() => {
    console.log('Server is listening on port: 5000');
})