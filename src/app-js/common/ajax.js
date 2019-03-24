import axios from 'axios';


axios.defaults.baseURL = '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default function(setup = {}) {

  let success  = response => { console.log(response); };
  let callback = setup.success || success;
  let data = new Set(['POST', 'PUT']);

  let config = {};
  config.url = (setup.action) ? setup.action : window.location.href;
  config.method = (setup.method) ? setup.method : 'GET';
  config.responseType = (setup.type) ? setup.type : 'json';

  if ( data.has(config.method.toUpperCase()) ) {
    config.data = setup.data;
  } else {
    config.params = setup.data;
  }

  axios(config).then(response => {
    callback(response.data);
  }).catch(error => {
    console.log(error);
  });

}
