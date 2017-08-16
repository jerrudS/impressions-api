const knex = require('knex')({
  dialect: 'pg',
  connection: process.env.DATABASE_URL
})

function selectUsers(user) {
  return knex
    .select('*').from('users')
}

function insertUser(firstname, lastname, username, hashedpassword, email) {
  return knex
    .insert({ firstname, lastname, username, hashedpassword, email })
    .into('users')
    .returning('*')
}

function findUser(username) {
  return knex('users')
    .where('username', username)
}

function selectReviews(columnValue) {
  return knex
    .select('*').from('reviews').where('userId', columnValue)
}

function selectReviewRating(columnValue) {
  return knex('reviews').avg('rating').where('userId', columnValue)
}

function insertReview(review) {
  return knex
    .insert(review)
    .into('reviews')
    .returning('*')
}

module.exports = {
  selectUsers: selectUsers,
  selectReviews: selectReviews,
  insertReview: insertReview,
  selectReviewRating: selectReviewRating,
  insertUser: insertUser,
  findUser: findUser
}
