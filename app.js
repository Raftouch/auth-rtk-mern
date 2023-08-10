const express = require('express')
const app = express()
require('dotenv').config()
const { notFound, errorHandler } = require('./middleware/error')
const port = process.env.PORT || 3000

app.use('/api/users', require('./routes/user'))
app.use(notFound, errorHandler)

app.get('/', (req, res) => {
  res.send('App works')
})

app.listen(port, () => console.log(`App listening on port ${port}`))
