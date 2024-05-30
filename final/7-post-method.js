const express = require("express");
const app = express()
const {people} = require('./data.js')

//static
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended : false}))

app.get('/api/people',(req,res) => {
    res.status(200).json({success:true, data:people})
})

app.post('/login',(req,res) => {
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    else{
        return res.status(401).send('Please give credentials')
    }
})

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
