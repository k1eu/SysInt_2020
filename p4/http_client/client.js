const axios = require('axios')
axios.defaults.headers.common["Content-Type"] = 'application/json';

const client = axios.create({
  baseURL: 'http://localhost:3000/',
  responseType: 'json'
});
// GET
client.get('/home', {
  params: {
    foo: 'bar'
  }
}).then(res => {
  console.log(res['data'])
}).catch(res => {
  console.log('ooops')
})
// POST
client.post('/', {
  id: '1',
  name: 'Flinstone'
})
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});
// DELETE
client.delete('/delete', { data: { id: "1" }, headers: { "Authorization": "***" } })
.then(function (response){
  console.log('delete req sent')
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});
// PUT
client.put('/put', {
  id: '2',
  name: 'Fred'
})
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});
// PATCH
client.patch('/patch', {
  id: '5',
})
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});