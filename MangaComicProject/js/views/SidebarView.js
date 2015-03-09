define([
    'jquery',
    'underscore',
    'backbone',
    'globals',
    'text!templates/SidebarTemplate.html'
], function ($, _, Backbone, globals, SidebarTemplate) {
    var SidebarView = Backbone.View.extend({
        el: "#sidebar",
        template: SidebarTemplate,
        initialize: function () {
        },
        render: function () {
            var collection = globals.comicRepository;

            var compiledTemplate = _.template(this.template)({comics: collection.models});
            this.$el.html(compiledTemplate);
        }
    });

    return SidebarView;

});