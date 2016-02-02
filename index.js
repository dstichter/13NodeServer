var http = require('http'), url = require('url');
var fs = require('fs')

var PORT = 8080;

var handleRequest = function (req, res) {
  console.log('req.url', req.url);
  var url_parts = url.parse(req.url);
  switch (url_parts.pathname) {
    case '/':
      display(req, res, "/");
      break;
    case '/favfood':
      display(req, res,'/favfood');
      break;
    case '/favmovie':
      display(req, res,'/favmovie');
      break;
    case '/favframeworks':
      display(req, res,'/favframeworks');
      break;
    default:
      display_404(req, res);
      break;
  }

}
var display = function(req, res, url) {
  fs.readFile('.'+url+".html", function (err, html) {
    if (err) {
        throw err; 
    }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
  });

}

var display_404 = function(req, res) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write("<h1>Not found</h1>");
  res.end("This is not the page you are looking for");
}


var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT);
});