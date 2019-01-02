const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('build'))

let persons = [
    {
      "name": "Martti Tienari",
      "phone": "040 - 000000",
      "id": 1
    },
    {
      "name": "Arto Järvinen",
      "phone": "040-123456",
      "id": 2
    },
    {
      "name": "Leidi Livia",
      "phone": "040 - 8747474",
      "id": 3
    }
  ]

  const formatPerson = (person) => {
    return {
      name: person.name,
      phone: person.phone,
      id: person._id
    }
  }

 

  app.get('/', (req, res) => {
    res.send('<h1>Tervetuloa puhelinluetteloon!</h1>')
  })


  app.get('/api/persons', (req, res) => {
    Person
      .find({})
      .then(persons => {
        res.json(persons.map(formatPerson))
      })
  })
  
  const getInfo = (personsData) => {

    return {
      luettelossa: personsData.length,
      date : new Date()
    }
  }


  app.get('/info', (req, res) => {

    Person
    .find({})
    .then(persons => {
      if (persons) {
        res.json(getInfo(persons))
      } else {}
      response.status(404).end()
    })
    .catch(error => {
      response.status(400).end()
    })
  })

  app.get('/api/persons/:id', (request, response) => {
      Person
      .findById(request.params.id)
      .then(person => {
        if (person) {
          response.json(formatPerson(person))
        } else {
          response.status(404).end()
        }
      })
      .catch(error => {
        console.log(error)
        response.status(404).send({ error: 'malformatted id' })
      })
  })

  app.delete('/api/persons/:id', (request, response) => {
    Person
      .findByIdAndRemove(request.params.id)
      .then(result => {
        response.status(204).end()
      })
      .catch(error => {
        response.status(400).send({ error: 'malformatted id' })
      })
  })

  app.post('/api/persons', (request, response) => {
    const body = request.body
    //const names = persons.map(person => person.name)
    //console.log('nimilista', names)
    console.log('pyynnön data', request.body)
    console.log('lisättävä nimi', body.name)
    if (body.name === undefined || body.phone === undefined) {
      return response.status(400).json({error: 'name or phone number missing'})
    } else {

      Person
        .findOne({name: body.name})
        .then(result => {
          if (result === null ) {
            const person = new Person( {
              name: body.name,
              phone: body.phone
              //id: getRandomInt(1000000)
            })

            persons = persons.concat(person)

            person 
              .save()
              .then(savedPerson => {
                response.json(formatPerson(savedPerson))
              })
          } else {
            return response.status(400).json({error: 'a same name cannot be added again'})
          }
        })
    }
  })

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  app.put('/api/persons/:id', (request, response) => {
    const body = request.body

    const person = {
      name: body.name,
      phone: body.phone,
    }

    Person  
    .findByIdAndUpdate(request.params.id, person, { new: true } )
    .then(updatedPerson => {
      response.json(formatPerson(updatedPerson))
    })
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'malformatted id' })
    })
  })


  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

