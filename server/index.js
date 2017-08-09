const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { selectUsers } = require('./database')

app.use(bodyParser.json())

app.get('/users', (req, res) => {
  selectUsers()
    .then(data => {
      (res.send(data))
    })
})

app.listen(3006, () => {
  console.log('Listening on port 3006')
})
