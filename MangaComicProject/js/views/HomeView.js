define([
    'jquery',
    'underscore',
    'backbone',
    'globals',
    'text!templates/HomeTemplate.html'
], function ($, _, Backbone, globals, HomeTemplate) {

    var HomeView = Backbone.View.extend({
        el: $("#container"),
        template: HomeTemplate,
        initialize: function () {
        },
        render: function () {
            var compiledTemplate = _.template(this.template);
            this.$el.html(compiledTemplate);

        }

    });

    return HomeView;

});


