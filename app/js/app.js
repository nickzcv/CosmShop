var app = app || {};

$(function() {
	var products = [
		{ title: 'JavaScript: The Good Parts',
			author: 'Douglas Crockford',
			releaseDate: '2008',
			keywords: 'JavaScript Programming' }
	];

	new app.LibraryView(products);
});