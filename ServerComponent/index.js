var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();
var config = require('./config/config.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://veduardoe:321321dwa@ds111913.mlab.com:11913/news')

app.get('/createCollection', function (req, res) {

	let New;

	// We verify if the Collection exists, otherwise we create new one.
	try {
	  New = mongoose.model('New');
	} catch (error) {
	  New = mongoose.model('New', config.newsModel);
	}

// I am assuming that Every Request we receive the recents posts
request('https://hn.algolia.com/api/v1/search_by_date?query=nodejs', function (error, response, body) {
	let data = JSON.parse(body);
	data.hits.forEach(function(element){
		let thisNew = new New(config.newsData(element));
		thisNew.save().then(() => console.log('Good'));
	})
});

res.send({'message': 'Datos Guardados Correctamente'});

});


app.get('/getNews', function (req, res) {
	try {
	  New = mongoose.model('New');
	} catch (error) {
	  New = mongoose.model('New', config.newsModel);
	}
	New.find().sort({created_at: 'desc'}).then((data) => {
		res.send(data);
	})
});


app.delete('/deleteNew/:id', function (req, res) {
	console.log(req.params.id)
	try {
	  New = mongoose.model('New');
	} catch (error) {
	  New = mongoose.model('New', config.newsModel);
	}
	New.deleteOne({_id: req.params.id}, function(err){});
	res.send({'message':'Registro Eliminado'});
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
