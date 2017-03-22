var express = require('express');
var app = express();
var user = require('./routes/user');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// var myMiddleWare = function(req, res, next){
//   console.log(req.url);
//   next();
// };
//
// app.use(myMiddleWare);
app.use('/', express.static('public'));

// app.get('/', function(req, res){
//   res.send('Hello World');
// });

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/user', user);





// app.get('/user/:id',function(req, res){
//   res.send('Received a GET request, param: ' + req.params.id);
// });
//
// app.post('/user', function(req, res){
//   res.json({success:true});
// });
//
// app.put('/user', function(req, res){
//   res.status(400).json({message:'Hey, you, BadRequest!'});
// });
//
// app.delete('/user', function(req, res){
//   res.send('Received a DELETE request');
// });



app.listen(3000, function(){
  console.log('Example App listening on port 3000');
});
