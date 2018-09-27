import fly from './config';

function sendMessage(query) {
  return fly.get('/api/prame', query);
}

export default sendMessage;
