const express = require('express')
const app = express()
const port = 3001
const list = require('./list')
const getFactsVigentes = require('./funcaoGetFactsVigentes')

app.get('/', (req, res) => {
  res.send(getFactsVigentes(list.facts, list.schema));
})

app.listen(port, () => {
  console.log(`Ouvindo na porta ${port}!`)
})
