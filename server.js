var app = require('express').createServer();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(process.env.PORT);