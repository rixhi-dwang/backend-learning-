//console.log("Hello, World!");
require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT 

app.get('/', (req, res)=> {
    res.send("welcome to my first express app")
})

app.get('/home', (req, res) => {
    res.send("welcome to home page")
})

app.get('/abt', (req, res) => {
    res.send('<h1>welcome to about page</h1>')
})

app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + port)
})
