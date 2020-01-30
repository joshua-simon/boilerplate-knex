const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)



function getInstruments(db=connection) {
  return db('instruments').select('image','id')
}

function getNameAndBlurb(id, db=connection) {
  return db('instruments').where('id', id).first()
}

function editBlurb(id, updatedBlurb) {
  return db('instruments')
  .update({blurb:updatedBlurb}).where('id', id)
}

module.exports = {
  getInstruments,
  getNameAndBlurb,
  editBlurb
}
