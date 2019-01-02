const mongoose = require('mongoose')

const url = 'mongodb://user:pass@ds145484.mlab.com:45484/luuriluettelo'

mongoose.connect(url)

const Person = mongoose.model('Person', {
  name: String,
  phone: String
})

module.exports = Person