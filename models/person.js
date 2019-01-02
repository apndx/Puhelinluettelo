const mongoose = require('mongoose')

/// HUOM!!! tämä pois kun gittiin
const url = 'mongodb://apndx:2WjUpPZjmTCYAc4@ds145484.mlab.com:45484/luuriluettelo'

mongoose.connect(url)

const Person = mongoose.model('Person', {
  name: String,
  phone: String
})

module.exports = Person