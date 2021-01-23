const express = require('express')
const app = express()
const port = 3000
const token = 'TokeN'
const expressip = require('express-ip');
app.use(expressip().getIpInfoMiddleware);


app.use(function (req, res, next) {
  console.log(token)
  const userToken = req.get('x-express-token')
  const ip = req.ipInfo
  console.log(ip)
  // usunalem moje ip zeby ddosow nie bylo :p
  if (userToken == token && ip.ip == 'xxx.xxx.xxx.xxx') {
    res.send(ip)
  } else {
    res.json({error: 'Ooops...'})
  }
})

app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port)
})
