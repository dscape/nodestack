var dnsd = require('dnsd')
var d = require('dtrace-provider')

dnsd.createServer(function handle(req, res) {
  res.end('1.2.3.4')
}).listen(5354, '127.0.0.1')

console.log('Server running on 5354')

// dig @localhost -p 5354 foo.example A
