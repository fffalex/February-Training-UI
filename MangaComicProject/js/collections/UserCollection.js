define([
  'underscore',
  'backbone',
  'localstorage',
  'models/UserModel'
], function(_, Backbone, LocalStorage, UserModel){

  var UserCollection = Backbone.Collection.extend({
      
      model: UserModel,

      initialize : function(models, options) {},
      url : "data/usersData.json",
      //set Backbone localStorage. Map json data to localStorage
      localStorage: new Backbone.LocalStorage("userRepository"),
      
      holaMundo: function(){console.log("Hola Casa perro"+ this.first())}
      
  });

  return UserCollection;

});