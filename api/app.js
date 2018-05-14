var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

var routes = require('./routes/emotionRoute');

routes(app);
app.listen(port);

console.log('express app');
