var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
        coverImage: 'assets/placeholder.png',
        title: 'No title',
        author: 'Unknown',
        releaseDate: 'Unknown',
        keywords: 'None'
    }
});