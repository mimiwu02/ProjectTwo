var express    = require('express');
var cors       = require('cors');
var fs         = require('fs');
var bodyParser = require('body-parser');
var mongodb    = require('mongodb');
var request    = require('request')
var app        = express();
var colors     = require('colors');

/* let's add the ability ajax to our server from anywhere! */
app.use(cors());

/* extended:true = put it in an obj */
app.use(bodyParser.urlencoded({extended: true}));
