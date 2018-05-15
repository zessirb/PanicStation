var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

var routes = require('./routes/emotionRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);
app.listen(port);

console.log('express app');
