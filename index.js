const express = require('express')
const app = express()

let persons = [
    {
      "name": "Martti Tienari",
      "phone": "040 - 000000",
      "id": 1
    },
    {
      "name": "Arto Järvinen",
      "phone": "040-123456",
      "id": 3
    },
    {
      "name": "Leidi Livia",
      "phone": "040 - 8747474",
      "id": 5
    }
  ]

  app.get('/', (req, res) => {
    res.send('<h1>Tervetuloa puhelinluetteloon!</h1>')
  })


  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })
  
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

