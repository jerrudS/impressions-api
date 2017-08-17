require('dotenv/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { selectReviewRating, selectUsers, selectReviews, insertReview, insertUser, findUser } = require('./database')
const bcrypt = require('bcrypt')
const expressJWT = require('express-jwt')
const jwt = require('jsonwebtoken')

app.use(bodyParser.json())

app.post('/users', (req, res) => {
  const { firstname, lastname, username, password, email } = req.body
  const hashedpassword = bcrypt.hashSync(password, 10)

  insertUser(firstname, lastname, username, hashedpassword, email)
    .then(data => {
      res.status(201).json(data)
    })
})

app.post('/login', (req, res) => {
  const { username, password } = req.body
  if (!username) {
    return res.status(400).send({ error: 'No User Name Given' })
  }
  else if (!password) {
    return res.status(400).send({ error: 'No Password Given' })
  }
  else {
    findUser(username)
      .then(user => {
        if (!user.length) {
          return res.status(404).send({ error: 'User Name Does Not Exist' })
        }
        if (!bcrypt.compareSync(password, user[0].hashedpassword)) {
          return res.status(401).send({ error: 'Incorrect Password' })
        }
        const myToken = jwt.sign({ username }, process.env.JWT_SECRET)
        res.status(200).send({ myToken })
      })
  }
})

app.use(expressJWT({
  secret: process.env.JWT_SECRET
}))

app.use((err, req, res, next) => {
  if (err) {
    console.log(err)
  }
})

app.get('/users', (req, res) => {
  selectUsers()
    .then(data => {
      (res.send(data))
    })
})

app.get('/reviews', (req, res) => {
  const userid = req.query.id
  Promise.all([
    selectReviewRating(userid),
    selectReviews(userid)
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
