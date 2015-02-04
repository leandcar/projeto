//var http = require('http');
//var port = process.env.port || 1337;
//http.createServer(function (req, res) {
//    if (req.url == "/lua") {
//        res.writeHead(200, { 'Content-Type': 'text/plain' });
//        res.end('Hello World\n Lua');
//    } else { 
//        res.writeHead(200, { 'Content-Type': 'text/plain' });
//        res.end('Hello World\n Sem Lua');
//    }
//}).listen(port);


var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.port || 1337;
var app = express();
app.use(bodyParser());
app.get('/', function (request, response) {
    response.send("<b>Esta resposta foi gerada através das rotas!!sdaasdasdsadsdsadds</b>");
});
app.listen(port);

