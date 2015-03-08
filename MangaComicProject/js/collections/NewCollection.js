define([
  'underscore',
  'backbone',
  'localstorage',
  'models/NewModel'
], function(_, Backbone, LocalStorage, NewModel){

  var UserCollection = Backbone.Collection.extend({
      
      model: NewModel,

      initialize : function(models, options) {},
      url : "data/newData.json",
      //set Backbone localStorage. Map json data to localStorage
      localStorage: new Backbone.LocalStorage("newRepository"),
      
  });

  return UserCollection;

});

