const express = require('express')
const path = require('path')
const app = express()
const port = 3304

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



