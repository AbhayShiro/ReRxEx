// 'use strict';

/*************************************
 * server/main.js
 * key file to create server instance
 * 1. sets handlebar as template engine
 * 2. handles all routes and match with react routes,
 * renders the matching component and push html markup to handlebar template
 * 3. listening express server on specified port
 * *************************************/

// load modules
import Express      from 'express';
import colors from 'colors';
import path         from 'path';
import exphbs       from 'express-handlebars';
import bodyParser   from 'body-parser';
import NotFoundPage from './../app/component/errorpages/NotFoundPage';
import reactRouter  from './../server/route-middleware';
import compression  from 'compression';
import expressApi from './../api';
import dotenv from 'dotenv';
import webpack from 'webpack';
import config from '../webpack.config';
import http from 'http';

dotenv.config();

console.log(path.join(__dirname, '..', "public").bgYellow);

// initialize our express app
const app = new Express();

const compiler = webpack(config);

app.set('port', (process.env.PORT || 3000));

// static assets
app.use(Express.static(path.join(__dirname, '..', "public")));
// app.use("/static", Express.static(path.join(__dirname, '..', "public")));


app.use(compression());

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set view path
app.set('views', path.join(__dirname, '../app/views'));
app.engine('handlebars', exphbs());
// setup handlebars for templating
app.set('view engine', 'handlebars');

// express middleware
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  hot: true,
  historyApiFallback: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


// server api routes 
app.use('/api', expressApi);

// universal routing and rendering
app.use(reactRouter);

let server = http.createServer(app);
console.log('Server is listening'.blue);
server.listen(3500);

module.exports = app;