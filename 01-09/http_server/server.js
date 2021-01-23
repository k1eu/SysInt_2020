const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const redis = require('redis')

// bard const redisUrl = "SG-wsizsi-41057.servers.mongodirector.com"
const redisUrl = "SG-wsiz-41060.servers.mongodirector.com"

tempUser = {
	id: 1,
	username: 'tk'
};

const dbClient = redis.createClient({
  host: redisUrl,
  port: 6379,
  // bard password: 'Nk0XsYSMLx9XzXypD6cWk6JHjTRmxoN4'
  password: '9phirg4GRcV0KHWfTGuFrKA8KJEmQfUU'
});

dbClient.on('error',console.log)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const token = 'secret'

dbClient.set('users','tempUser')
dbClient.hmset('tk_frameworks', {
    'javascript': 'nodejs',
    'framework': 'express'
});

app.get('/redis',(req,res)=> {
    dbClient.get('tk_framework', (err,reply) =>{
        console.log(reply)
        res.send(reply)
    })
    
})



app.post('/users',(req,res)=> {
    dbClient.get('users')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})