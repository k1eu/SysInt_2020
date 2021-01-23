const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const app1Server = 'http://localhost:3001'
const app2Server = 'http://localhost:3002'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    console.log(req.url)
    res.send('Hey!')
})

app.all("/app1*", function(req, res) {
    console.log('proxing to app1Server')
    console.log(req.path)
    apiProxy.web(req, res, {
      target: app1Server
    })
  })

app.all("/app2*", function(req, res) {
    console.log('proxing to app1Server')
    console.log(req.path)
    apiProxy.web(req, res, {
      target: app2Server
    })
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})