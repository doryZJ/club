const Fly = require('flyio/dist/npm/wx');

const fly = new Fly();

fly.interceptors.request.use((request) => {
  request.baseURL = 'https://photo.jinwentech.cn';
  return request;
});

export default fly;
