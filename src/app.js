const express = require('express')
const server = express();

const hostname = '0.0.0.0';
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/apinodejs')
// moongoose.connect('mongodb://localhost:27017/apinodejs');  // Without docker

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

const formRoute = require('./api/routes/formRoute');
formRoute(server);

const adminRoute = require('./api/routes/adminRoute');
adminRoute(server);

const schoolRoute = require('./api/routes/schoolRoute');
schoolRoute(server);

server.listen(port, hostname);