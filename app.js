const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const TodoModel = require('./model/todoScheme')
const { request, response } = require('express')
const router = require('./router')
require('dotenv').config()

const DataBaseuri ='mongodb+srv://admin:admin@cluster0.ucps76e.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', true)

mongoose.connect(DataBaseuri)
  .then((res) => {
    console.log('DataBase Connected!')
  })
  .catch((err) => {
    console.log('DataBase Not Connected!')
  })

const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
// all Routes
app.use(router)

app.listen(PORT, console.log(`Server Is Running On https://localhost:${PORT}`))
