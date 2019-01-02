const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.connect(url)

const Person = mongoose.model('Person', {
  name: String,
  phone: String
})

module.exports = Person