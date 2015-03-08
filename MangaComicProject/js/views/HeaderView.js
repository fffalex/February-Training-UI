define([
    'jquery',
    'underscore',
    'backbone',
    'globals',
    'text!templates/HeaderTemplate.html',
], function ($, _, Backbone, globals, HeaderTemplate) {

    var HeaderView = Backbone.View.extend({
        el: $("#header"),
        template: HeaderTemplate,
        initialize: function () {
        },
        render: function () {
            var collection = globals.newRepository;
            //mapeo cada modelo de la collectioin a un array
            var array = [];
            _.each(collection.models, function(model){ 
                array.push(model);
            });
            //envio el array para acceder por indices
            var compiledTemplate = _.template(this.template)({newlist: array});
            this.$el.html(compiledTemplate);
        }
    });
    return HeaderView;
});


