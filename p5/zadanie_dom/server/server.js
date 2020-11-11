const express = require('express')
const app = express()
const port = 3000
const token = "TOKEN"

// REDIRECT 302 FOUND
app.get('/', (req, res, next) => {
  console.log("Podlaczony client, redirectuje na access")
  res.redirect(302,'/access')
  next()
})

app.get('/access', (req, res, next) => {
    console.log("Przekierowanie pomyślne.. wysyłanie odpowiedzi klientowi")
    res.send('Przekierowano na access')
    next()
})

// ERROR FOR AXIOS

app.get('/error', function(req, res) {
  console.log('Client podłaczony i wystąpił błąd.. wysyłanie errora clientowi')
  userToken = req.get('x-express-token')
  if (userToken == token) {
    console.log('zgadza sie token\n')
    res.send('token sie zgadza')
  } else {
    res.status(401).send('Wrong Token. Can\'t authorize')
  }
  
})

app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port)
})

// REDIRECT ON TOKEN

