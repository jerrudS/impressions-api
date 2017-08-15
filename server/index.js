const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { selectReviewRating, selectUsers, selectReviews, insertReview } = require('./database')

app.use(bodyParser.json())

app.get('/users', (req, res) => {
  selectUsers()
    .then(data => {
      (res.send(data))
    })
})

app.get('/reviews', (req, res) => {
  const userId = req.query.id
  Promise.all([
    selectReviewRating(userId),
    selectReviews(userId)
  ])
  .then(data => {
    (res.send(data))
  })
})

app.post('/reviews', (req, res) => {
  const review = req.body

  insertReview(review)
    .then(data => {
      res.status(201).json(data)
    })
})

app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT)
})
