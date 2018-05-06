const app = require('./config/server');
const global = require('../src/config/global');

// starting the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
