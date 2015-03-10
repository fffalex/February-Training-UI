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
            var wanted;
            if(parseInt(tittleString) == tittleString)
            {
                wanted = globals.comicRepository.findWhere({id: parseInt(tittleString)});
            }else{           
                var tittleCap = toTitleCase(tittleString);
                wanted = globals.comicRepository.findWhere({tittle: tittleCap});
            }
            
            var compiledTemplate = _.template(this.template)({wanted: wanted});
            this.$el.html(compiledTemplate);

            $(function () {
                $("[data-toggle='tooltip']").tooltip();
            });

            function toTitleCase(str)
            {
                return str.replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
            }
        }
    });
    return SearchView;
});