var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Probando el Desarrollo');
});


const port = process.env.PORT || 3000;


const mongoose = require('mongoose');
mongoose.connect('mongodb://mojmachs:231193j@ds143678.mlab.com:43678/heroku_83f133dc');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));



app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});