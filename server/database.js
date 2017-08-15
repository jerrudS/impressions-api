const knex = require('knex')({
  dialect: 'pg',
  connection: process.env.DATABASE_URL
})

function selectUsers() {
  return knex
    .select('*').from('users')
}

function selectReviews(columnValue) {
  return knex
    .select('*').from('reviews').where('user_id', columnValue)
}

function selectReviewRating(columnValue) {
  return knex('reviews').avg('rating').where('user_id', columnValue)
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
  selectReviewRating: selectReviewRating
}
