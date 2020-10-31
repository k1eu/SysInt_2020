const cookieSession = require('cookie-session');
const express = require('express')
const app = express()
const port = 3000

app.use(cookieSession({ secret: 'topsecret[]' }));
app.use(count);
app.use(visits)

function count(req, res,next) {
  req.session.count = req.session.count + 1
  next()
}
function visits(req, res,next) {
    req.session.test = req.session.test + 1
    next()
  }

app.get('/', (req, res) => {
    res.send("count: " + req.session.count)
})
app.get('/mw', (req, res) => {
    res.send("visits: " + req.session.test)
})

app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port)
})