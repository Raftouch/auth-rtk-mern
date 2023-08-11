const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const { notFound, errorHandler } = require('./middleware/error')
const port = process.env.PORT || 3000
const db = process.env.MONGO_DB

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use('/api/users', require('./routes/user'))
app.use(notFound, errorHandler)

app.get('/', (req, res) => {
  res.send('App works')
})

const start = async () => {
  try {
    await mongoose.connect(db)
    app.listen(port, () => console.log(`App listening on port ${port}`))
    console.log('Connected to DB')
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

start()
