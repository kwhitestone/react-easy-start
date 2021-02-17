var restify = require('restify');
var partition = require('./modules/index');
var server = restify.createServer();

const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['*'],  
})

server.pre(cors.preflight)
server.use(cors.actual)

server.listen(8889, function () {
  console.log('');
  console.log('');
  console.log('Mock Server is Started at 8889!!!');
  console.log('');
  console.log('');
});

partition(server);