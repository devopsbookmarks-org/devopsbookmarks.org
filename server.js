var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var staticAsset = require('static-asset');
var data = require('./data');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

if (process.env.BASE_URL) {
	app.use(require('connect-redirecthost').redirectHost(process.env.BASE_URL));
}
app.use(require('morgan')('short'));
app.use(require('compression')());
app.use(require('errorhandler')());

app.use(staticAsset(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

app.get('/search.json', function(req, res) {
	res.json(data.tools.map(function(tool) {
		return {
			name: tool.name,
			description: tool.description,
			url: tool.url
		};
	}));
});

app.get('/', require('./routes/home'));
app.get('/:tags', require('./routes/tools'));

app.listen(port);
console.log('Listening on port ' + port);
