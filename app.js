const express = require('express')
const app = express()
const PORT = 3000
const routes = require('./routes/index.js')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/', routes)

app.listen(PORT,()=>{
  console.log(`listen on ${PORT}`)
})