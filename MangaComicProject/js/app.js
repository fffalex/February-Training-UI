// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router',
  'globals',
  'collections/UserCollection',
  'models/SessionModel',
  'collections/ComicCollection',
  'collections/NewCollection'
], function($, _, Backbone, Router, globals, UserCollection, SessionModel, ComicCollection,NewCollection){
  var initialize = function(){    
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
    
    globals.comicRepository = new ComicCollection;
    needJSON=(localStorage.getItem("comicRepository") === null);
    globals.comicRepository.fetch({async:false,ajaxSync:needJSON});
    if(needJSON)globals.comicRepository.save();
    
    globals.newRepository = new NewCollection;
    needJSON=(localStorage.getItem("newRepository") === null);
    globals.newRepository.fetch({async:false,ajaxSync:needJSON});
    if(needJSON)globals.newRepository.save();
    
    globals.session = new SessionModel;
    globals.session.fetch({async:false});
   
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});
