define([
  'underscore',
  'backbone',
  'localstorage',
  'models/UserModel'
], function(_, Backbone, LocalStorage, ComicModel){

  var UserCollection = Backbone.Collection.extend({
      
      model: ComicModel,

      initialize : function(models, options) {},
      url : "data/comicsData.json",
      //set Backbone localStorage. Map json data to localStorage
      localStorage: new Backbone.LocalStorage("comicRepository"),
      
  });

  return UserCollection;

});

