const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { selectUsers, selectReviews, insertReview } = require('./database')

app.use(bodyParser.json())

app.get('/users', (req, res) => {
  selectUsers()
    .then(data => {
      (res.send(data))
    })
})

app.get('/reviews', (req, res) => {
  selectReviews()
    .then(data => {
      (res.send(data))
    })
})

app.post('/reviews', (req, res) => {
  const { rating, review } = req.body

  insertReview(rating, review)
    .then(data => {
      res.status(201).json(data)
    })
})

app.listen(3007, () => {
  console.log('Listening on port 3007')
})
