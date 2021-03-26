const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Testing File Change!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
