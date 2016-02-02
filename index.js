var http = require('http'), url = require('url');
var fs = require('fs')

var PORT = 8080;

var handleRequest = function (req, res) {
  console.log('req.url', req.url);
  var url_parts = url.parse(req.url);
  switch (url_parts.pathname) {
    case '/':
      display_root(req, res);
      break;
    case '/favfood':
      display_favfood(req, res);
      break;
    case '/favmovie':
      display_favmovie(req, res);
      break;
    case '/favframeworks':
      display_favframeworks(req, res);
      break;
    default:
      display_404(req, res);
      break;
  }

}

var display_root = function(req, res) {
  fs.readFile('./home.html', function (err, html) {
    if (err) {
        throw err; 
    }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
  }); 

}

var display_favfood = function(req, res) {
  fs.readFile('./favfood.html', function (err, html) {
    if (err) {
        throw err; 
    }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
  });

}
var display_favmovie = function(req, res) {
  fs.readFile('./favmovie.html', function (err, html) {
    if (err) {
        throw err; 
    }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
  });

}
var display_favframeworks = function(req, res) {
  fs.readFile('./favframeworks.html', function (err, html) {
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