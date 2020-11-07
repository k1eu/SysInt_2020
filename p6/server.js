const express = require('express')
const app = express()
const port = 3000
const token = 'TokeN'
const tokenProcess = process.env.TOKEN

const expressip = require('express-ip');
app.use(expressip().getIpInfoMiddleware);


app.use(function (req, res, next) {
  console.log(token)
  const userToken = req.get('x-express-token')
  if (userToken == tokenProcess) {
    next()
  } else {
    res.json({error: 'Ooops...'})
  }
})

app.get('/ping', (req, res) => {
  res.json({
    headers: req.headers,
    userAgent: req.get('user-agent'),
    token: req.get('x-express-token'),
    ipInfo: req.ipInfo
  })
})

app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port)
})