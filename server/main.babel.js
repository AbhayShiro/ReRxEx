'use strict';

/**************************************
 * babel-register: require hook will bind itself to node’s require
 * and automatically compile main.js at runtime 
 ************************************/

const http = require('http');

require('babel-register');
require('dotenv').config();     // set env variables
var app = require('./../server/main.js'); // initiate server

// let server = http.createServer(app);
// console.log('Server is listening'.blue);
// server.listen(3500);

app.listen(process.env.PORT || 3500);