define([
    'jquery',
    'underscore',
    'backbone',
    'globals',
    'text!templates/NewsTemplate.html',
], function ($, _, Backbone, globals, NewsTemplate) {

    var NewsView = Backbone.View.extend({
        el: "#page",
        template: NewsTemplate,
        initialize: function () {
        },
         events: {
            "click #lucy": "showModal",
        },
        showModal: function(){       
            $('#modal-char').modal('show');
        },
        render: function () {
            var collection = globals.newRepository;
            var compiledTemplate = _.template(this.template)({newlist: collection.models});
            this.$el.html(compiledTemplate);
        }
    });
    return NewsView;
});
