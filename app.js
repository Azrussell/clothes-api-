var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clothesRouter = require('./routes/clothes');
var coatsRouter = require('./routes/coats');
var shoesRouter = require('./routes/shoes');

var app = express();

//set the port to 3000. the number is arbitrary
const port=3000

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/coats', coatsRouter);
app.use('/shoes', shoesRouter);
app.use('/clothes', clothesRouter);

//add checking for 404
app.get('*',(req,res)=>{
    res.send(`404: Nothing here!`);
});

//need to start the server
app.listen(port,()=>console.log(`running at: ${port}`));

module.exports = app;
