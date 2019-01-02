const mongoose = require('mongoose')

// korvaa url oman tietokantasi urlilla
const url = 'mongodb://<dbuser>:<dbpassword>@ds145484.mlab.com:45484/luuriluettelo'

mongoose.connect(url)

//define schema
const personSchema = new mongoose.Schema({
    name: String,
    phone:String
 })
 
const Person = mongoose.model('Person', personSchema);
 
const name = process.argv[2]
const phone = process.argv[3]
const person = new Person({
  name: name,
  phone: phone
})

if (name !== undefined && phone !== undefined) {
  person
  .save()
  .then(response => {
    console.log('lisätään henkilö', person.name, 'numero', person.phone, 'luetteloon')
    mongoose.connection.close()
  })
} else {
  Person
  .find({})
  .then(result => {
  result.forEach(person=> {
      console.log(person.name, person.phone)
  })
  mongoose.connection.close()
  })
}
