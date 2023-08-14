const express = require('express')
const path = require('path')
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

//production vs development
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve()
  app.use(express.static(path.join(__dirname, '../client/dist')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('App works')
  })
}

app.use(notFound, errorHandler)

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
