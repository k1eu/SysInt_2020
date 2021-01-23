const axios = require('axios')
axios.defaults.headers.common["Content-Type"] = 'application/json';

const client = axios.create({
	baseURL: 'http://8549e266a05d.ngrok.io', // wstawiac nowy adres z ngrok

  responseType: 'json'
});
// GET
client.get('/home', {headers:{
    'x-express-token': 'TokeN'
}
}).then(res => {
  console.log(res['data'])
}).catch(res => {
  console.log('ooops')
})
