const express = require('express');
const app = express();
const helmet = require('helmet');
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({action: 'deny'}));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
const timeInSeconds = 90 * 24 * 60 * 60
app.use(helmet.hsts({maxAge: timeInSeconds, force: true}));
app.use(helmet.dnsPrefetchControl());
app.use(helmet.noCache());








































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
 console.log('Useful programmer info security app started on port ${PORT}')
});
