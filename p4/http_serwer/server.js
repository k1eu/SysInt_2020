const express = require('express')

// 1-1000 systemowe | 80 https | 443 https | 22 ssh

const app = express()
const port = 3000
const host = 'localhost'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://${host}:${port}`)
})