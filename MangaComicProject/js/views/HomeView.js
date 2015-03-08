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
            var collection = globals.comicRepository;
            

            //var compiledTemplate = _.template( this.template)({name: "Robert"});
            var compiledTemplate = _.template(this.template)({comics: collection.models});
//            var compiledTemplate = _.template(this.template)([{tittle: "naruto shipudden", description:"Its a fucking comic"},
//            {tittle: "naruto shipudden 22", description:"Its a fucking comic 2222"}]);
            this.$el.html(compiledTemplate);

        }

    });

    return HomeView;

});


