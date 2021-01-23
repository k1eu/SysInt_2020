const express = require('express')
const bodyParser = require('body-parser')
var jwt = require('jsonwebtoken')
const app = express()
const port = 3000
const JWT_PASSWORD = 's'

const redis = require('redis')
const redisUrl = "SG-wsiz-41060.servers.mongodirector.com"

const dbClient = redis.createClient({
    host: redisUrl,
    port: 6379,
    password: '9phirg4GRcV0KHWfTGuFrKA8KJEmQfUU'
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/generate', (req, res) => {
    token = jwt.sign({
      data: 'myusername',
      lorem: {test: 'ipsum'}
    }, JWT_PASSWORD, { expiresIn: 60 * 60 })
  
  
    res.send({ token })
  })

app.post('/signup', (req,res) => {
    username = req.body.username
    password = req.body.password
    dbClient.set('user_${username}', password)

    res.send({info: 'created'})
})

app.post('/signin', (req,res) => {
    username = req.body.username
    password = req.body.password

    dbClient.get('user_${username}', (err,reply) => {
        if (reply === password) {
            token = jwt.sign({
                username: '${username}',
                password: '${password}'
              }, JWT_PASSWORD, { expiresIn: 60 * 60 })
              res.send(token)
        }
        else {
            res.send('doesnt work')
        }
    })
})

app.use((req, res, next) => {
    if( req.hasOwnProperty('headers') && req.headers.hasOwnProperty('wsiz') ) {
      try {
        req.user = jwt.verify(req.headers['wsiz'], JWT_PASSWORD)
      } catch(err) {
        return res.status(401).json({
          error: {
            msg: 'OOoops! Wrong token?'
          }
        })
      }
    } else {
      return res.status(401).json({
        error: {
          msg: 'OOoops! Add token please!'
        }
      })
    }
    next()
  })

  app.get('/after', (req, res) => {
    res.send('Hello World After Token!!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})