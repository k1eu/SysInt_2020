const express = require('express')
const app = express()
const port = 3000
const host = 'localhost'
app.use(express.json())
user_id = {}
 

app.get('/home', (req, res) => {
  console.log('---Get Done---')
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  let request = req.body
  var temp = JSON.stringify(request)
  user_id = JSON.parse(temp)
  console.log('---Post Done---')
  console.log(user_id)
  res.json(user_id)
})

app.delete('/delete', (req, res) => {
  let request = req.body.id
  var temp = JSON.stringify(request)
//  var temp2 =JSON.parse(temp)
  delete user_id['id']
  console.log('---Del Done---')
  console.log(temp)
  console.log(user_id)
  res.json(req.body)
})

app.put('/put', (req, res) => {
  let request = req.body
  var temp = JSON.stringify(request)
  user_id = JSON.parse(temp)
  console.log('---Put Done---')
  console.log(user_id)
  res.json(user_id)
})

app.patch('/patch', (req, res) => {
  let request = req.body
  var temp = JSON.stringify(request)
  user_id['id'] = JSON.parse(temp).id
  console.log('---Patch Done---')
  console.log(user_id)
  res.json(user_id)
})
app.listen(port, () => {
  console.log(`Example app listening at http://${host}:${port}`)
})