import fly from 'flyio/dist/npm/wx';

fly.interceptors.request.use((request) => {
  request.baseURL = 'http://photo.jinwentech.cn';
  console.warn('request', request);
  return request;
});

export default fly;
