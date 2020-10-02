const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000
const routes = require('./routes/index.js')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use('/', routes)

app.listen(PORT,() => {
  console.log(`listen on ${PORT}`)
})