var http = require('http')

var PORT1 = 7000
var PORT2 = 7500

var server1 = http.createServer(function(req,res){
res.end("You're Awesome")
})
var server2 = http.createServer(function(req,res){
res.end('You Suck')
})
server1.listen(PORT1, function(){
  console.log("Server1 is listening at http://localhost:%s", PORT1);
});
server2.listen(PORT2, function(){
  console.log("Server2 is listening at http://localhost:%s", PORT2);
});