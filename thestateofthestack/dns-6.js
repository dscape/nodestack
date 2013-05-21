var dnsd = require('dnsd')
var dtrace = require('dtrace-provider')

var provider = dtrace.createDTraceProvider("dnsd")
var probe = provider.addProbe("onrequest", "char *")
provider.enable()

dnsd.createServer(function handle(req, res) {
  provider.fire("onrequest", function(p) {})
  res.end('1.2.3.4')
}).listen(5354, '127.0.0.1')

console.log('Server running on 5354')

// dig @localhost -p 5354 foo.example A
