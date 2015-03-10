define([
    'jquery',
    'underscore',
    'backbone',
    'globals',
    'text!templates/SearchTemplate.html'
], function ($, _, Backbone, globals, SearchTemplate) {
    var SearchView = Backbone.View.extend({
        el: "#message",
        template: SearchTemplate,
        initialize: function () {
        },
        render: function (tittleString) {
            var wanted = globals.comicRepository.findWhere({tittle: tittleString});
            var compiledTemplate = _.template(this.template)({wanted: wanted});
            this.$el.html(compiledTemplate);
            
            $(function () {
                $("[data-toggle='tooltip']").tooltip();
            });
        }
    });
    return SearchView;
});