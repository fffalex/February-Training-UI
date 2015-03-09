define([
    'jquery',
    'underscore',
    'backbone',
    'globals',
    'text!templates/PageBodyComicsTemplate.html'
], function ($, _, Backbone, globals, PageBodyComicsTemplate) {
    var PageBodyComicsView = Backbone.View.extend({
        el: "#page",
        template: PageBodyComicsTemplate,
        initialize: function () {
        },
        render: function () {
            var collection = globals.comicRepository;

            var compiledTemplate = _.template(this.template)({comics: collection.models});
            this.$el.html(compiledTemplate);
            
            $(function () {
                $("[data-toggle='tooltip']").tooltip();
            });
        }
    });

    return PageBodyComicsView;

});