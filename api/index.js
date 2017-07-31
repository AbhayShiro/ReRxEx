'use strict';

/************************************
 * api/index.js
 * express server api which is accessible by any client
 * responsible to exeucte logics and
 * communication with database, aws services etc
 *
 * Note: routes must not have any business logic.
 * routes are just for invocation of request/response
 * ***********************************/

// load modules
import Express      from 'express';         
import multer       from 'multer';          // middleware to handle uploaded files in request obj

var limits = { fileSize: 100 * 1024 * 1024 } // bytes
var storage = multer.memoryStorage();       // in memory storage
var upload = multer({ limits: limits, storage: storage })

// routes
var router = Express.Router();

// simple get api for testing
router.get('/get', function (req, res) {
    res.json({ message: 'Welcome to ReRxEx API demo !' });
});

module.exports = router;