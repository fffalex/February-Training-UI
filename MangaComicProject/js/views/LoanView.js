define([
    'jquery',
    'underscore',
    'backbone',
    'globals',
    'text!templates/LoanTemplate.html'
], function ($, _, Backbone, globals, LoanTemplate) {
    var LoanView = Backbone.View.extend({
        el: "#page",
        template: LoanTemplate,
        initialize: function () {
        },
        events:{
           "click #request-comic" : "modalRequest"
        },
        modalRequest: function(){
             $('#request-modal').modal('show');
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

    return LoanView;

});