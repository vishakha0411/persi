var express = require('express')
var app = express()
var fs = require('fs')
app.set('port', process.env.PORT || 3000)
app.use(express.json());

// Fill your code here

app.listen(app.get('port'))