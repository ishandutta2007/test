var keystone = require('keystone');
var requirejs = require('requirejs');
// var ace = requireJS('bower_components/ace/lib/ace/ace');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	locals.section = 'editor';
	locals.page.title = 'Editor IDE';
	locals.requirejs = requirejs;
	locals.scrip = "AAPL";
	
	view.render('site/editor');
	
}
