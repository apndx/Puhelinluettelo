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
  
  app.get('/info', (req, res) => {

    const info = {
      luettelossa: persons.length,
      date : new Date()
    }

    res.send(info)

  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id )
    if (person) {
      Person
      .findById(request.params.id)
      .then(person => {
        response.json(formatPerson(person))
      })
    } else {
      response.status(404).end()
    }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
  })

  app.post('/api/persons', (request, response) => {
    const body = request.body
    const names = persons.map(person => person.name)
    console.log('pyynnön data', request.body)
    console.log('nimilista', names)
    if (body.name === undefined || body.phone === undefined) {
      return response.status(400).json({error: 'name or phone number missing'})
    } else if (names.includes(body.name)){
      return response.status(400).json({error: 'name already exists'})
    } else {
      const person = new Person( {
        name: body.name,
        phone: body.phone,
        id: getRandomInt(1000000)
    })
      persons = persons.concat(person)

      person 
        .save()
        .then(savedPerson => {
          response.json(formatPerson(savedPerson))
        })
    }
  })

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

