const knex = require('knex')({
  dialect: 'pg',
  connection: 'postgres://localhost:5432/impressions'
})

function selectUsers() {
  return knex
    .select('*').from('users')
}

function selectReviews() {
  return knex
    .select('*').from('reviews')
}

function insertReview(rating, review) {
  return knex
    .insert(rating, review)
    .into('reviews')
    .returning('*')
}

module.exports = {
  selectUsers: selectUsers,
  selectReviews: selectReviews,
  insertReview: insertReview
}
