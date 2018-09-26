const Fly = require('flyio/dist/npm/wx');

const fly = new Fly();

function sendMessage(query) {
  return fly.get('/api/prame', query);
}

export default sendMessage;
