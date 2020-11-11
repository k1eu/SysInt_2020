const axios = require('axios')
const app = axios
const client = axios.create({
  baseURL: 'http://localhost:3000/',
  responseType: 'json'
});
token = 'TOKEN2'



// MAIN EXPRESSJS 
client.get('/')
.then(res => {
  console.log('-------------------------REDIRECT')
  console.log(`${res.status} - ${res.statusText} \nData sent: ${res.data}`)
}).catch(res => {
  console.log('ooops')
})

// ERROR HANDLING
client.get('/error', {headers:{
  'x-express-token' : token
}})
.then(res => {
  console.log(res)
}).catch(err => {
  console.log('---------------------ERROR HANDLING')
  console.log(`${err}\nData sent: ${err.response.data}\nError Status: ${err.response.status}`)

})

// REDIRECT ON TOKEN