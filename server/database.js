const knex = require('knex')({
  dialect: 'pg',
  connection: 'postgres://localhost:5432/impressions'
})

function selectUsers() {
  return knex
    .select('*').from('users')
}

function selectReviews(columnValue) {
  return knex
    .select('*').from('reviews').where('user_id', columnValue)
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
  insertReview: insertReview
}
