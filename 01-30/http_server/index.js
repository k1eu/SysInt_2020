const express = require('express')
const bodyParser = require('body-parser')
const vhost = require('vhost')
const http = require('http')
const app = express()
const port = 3000

const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const app1Server = 'http://localhost:3001'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(vhost('ext.example.com', (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.end('hello from ext!')
}))

app.use(vhost('app1.example.com', (req, res) => {
     res.setHeader('Content-Type', 'text/plain')
     res.setHeader('Custom-Header', 'APP-1')
     apiProxy.web(req, res, {
       target: app1Server
     })
   }))

var httpServer = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Custom-Header', 'WSIZ-H')
  res.end('hello from the int!')
})

app.use(vhost('int.example.com', (req, res) => {
  httpServer.emit('request', req, res)
}))

app.get('/', (req, res) => {
  res.send('Hey!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})