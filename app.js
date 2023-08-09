const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000

app.use('/api/users', require('./routes/user'))

app.get('/', (req, res) => {
  res.send('App works')
})

app.listen(port, () => console.log(`App listening on port ${port}`))
