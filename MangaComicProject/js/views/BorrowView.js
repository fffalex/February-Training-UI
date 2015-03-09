define([
    'jquery',
    'underscore',
    'backbone',
    'globals',
    'text!templates/BorrowTemplate.html'
], function ($, _, Backbone, globals, BorrowTemplate) {
    var BorrowView = Backbone.View.extend({
        el: "#page",
        template: BorrowTemplate,
        initialize: function () {
        },
        render: function () {
            var collection = globals.session.get("user").borrowed;
            var compiledTemplate = _.template(this.template)({comics: collection});
            this.$el.html(compiledTemplate);
        }
    });
    return BorrowView;

});