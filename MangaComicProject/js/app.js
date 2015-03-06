// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router',
  'globals',
  'collections/UserCollection',
  'models/SessionModel'
], function($, _, Backbone, Router, globals, UserCollection, SessionModel){
  var initialize = function(){
//    
//    globals.userRepository = new UserCollection;
//    globals.userRepository.fetch({async:false});
//    globals.session = new SessionModel;
    
    var needJSON=false;

    
    //set new method (JSON to LOCALSTORAGE)
    Backbone.Collection.prototype.save=function(success){
      if(this.localStorage){
        //clear records, make save it keys!
        this.localStorage.records=[];
        //save each model...
        _(this.models).each(function(item){
          item.save();
        });
      }
    }

    globals.userRepository = new UserCollection;
    needJSON=(localStorage.getItem("userRepository") === null);
    globals.userRepository.fetch({async:false,ajaxSync:needJSON});
    if(needJSON)globals.userRepository.save();
    
    globals.session = new SessionModel;
    globals.session.fetch({async:false});
   
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});
