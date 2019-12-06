import axios from 'axios';
import qs from 'qs';

const isData = data => data && _.size(data);
const resError = e => Promise.reject(e);

const instance = axios.create({
  baseURL: '../ajax/',
  method: 'post',
  transformRequest(data) {
    if (isData(data)) {
      return qs.stringify(data);
    }
  },
});

instance.interceptors.request.use((config) => {
  if (config.method === 'get' && isData(config.data)) {
    config.params = _.assign((config.params || {}), config.data);
  }

  return config;
}, resError);

instance.interceptors.response.use(({ data }) => data, resError);

export default (...args) => {
  const fn = (_.isFunction(_.last(args))) ? args.pop() : _.noop();
  axios.all(_.map(args, req => instance(req))).then(axios.spread((...res) => fn(...res)));
};
