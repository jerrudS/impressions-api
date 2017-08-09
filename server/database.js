const knex = require('knex')({
  dialect: 'pg',
  connection: 'postgres://localhost:5432/impressions'
})

function selectUsers() {
  return knex
    .select('*').from('users')
}

module.exports = {
  selectUsers: selectUsers
}
