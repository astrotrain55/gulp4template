import axios from 'axios';
import URLSearchParams from '@ungap/url-search-params';
import _ from 'libs/lodash';


axios.defaults.baseURL = '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function toFormData(data) {
  const formData = new URLSearchParams();

  _.each(data, (item, key) => {
    formData.append(key, item);
  });

  return formData;
}

export default function (setup = {}) {
  const success = (response) => { console.log(response); };
  const callback = setup.success || success;
  const data = new Set(['POST', 'PUT']);

  const config = {};
  config.url = (setup.action) ? setup.action : window.location.href;
  config.method = (setup.method) ? setup.method : 'GET';

  if (data.has(_.toUpper(config.method))) {
    config.data = toFormData(setup.data);
  } else {
    config.params = setup.data;
  }

  axios(config).then((response) => {
    callback(response.data);
  }).catch((error) => {
    console.log(error);
  });
}
