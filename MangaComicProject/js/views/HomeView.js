define([
  'jquery',
  'underscore',
  'backbone',
  'globals',
  'text!templates/HomeTemplate.html'
], function($, _, Backbone, globals,HomeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#container"),
    template: HomeTemplate,
    initialize: function() {},
    // Se asignan eventos a los botones anterior y siguiente para permitir visualizar libros
   
    render: function(){
    var user1 = globals.userRepository.first().toJSON();
    

      //var compiledTemplate = _.template( this.template)({name: "Robert"});
      var compiledTemplate = _.template( this.template)(user1);
      this.$el.html(compiledTemplate);
    }

  });

  return HomeView;
  
});


