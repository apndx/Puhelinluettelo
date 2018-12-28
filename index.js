const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

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


  app.get('/', (req, res) => {
    res.send('<h1>Tervetuloa puhelinluetteloon!</h1>')
  })


  app.get('/api/persons', (req, res) => {
    res.json(persons)
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
      response.json(person)
    } else {
      response.status(404).end()
    }
  })


  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

