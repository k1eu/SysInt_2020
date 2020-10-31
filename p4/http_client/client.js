const axios = require('axios')
axios.defaults.headers.common["Content-Type"] = 'application/json';

const client = axios.create({
  baseURL: 'http://localhost:3000/',
  responseType: 'json'
});

client.get('/', {
  params: {
    foo: 'bar'
  }
}).then(res => {
  console.log(res['data'])
}).catch(res => {
  console.log('ooops')
})