const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const fruits = require("./src/fruits/fruits.json")

app.get('/fruits', function(req, res) {
    return res.json(fruits)
})

app.listen(port, function(){
    console.log('Server running...')
})