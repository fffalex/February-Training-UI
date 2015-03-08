define([
    'jquery',
    'underscore',
    'backbone',
    'globals',
    'text!templates/GenreTemplate.html'
], function ($, _, Backbone, globals, GenreTemplate) {
    var GenreView = Backbone.View.extend({
        el: $("#page"),
        template: GenreTemplate,
        initialize: function () {
        },
        render: function () {
            var collection = globals.comicRepository;
            var compiledTemplate = _.template(this.template)({comics: collection.models});
            this.$el.html(compiledTemplate);
        }
    });

    return GenreView;

});