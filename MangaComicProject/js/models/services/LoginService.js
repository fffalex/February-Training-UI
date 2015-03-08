define([
    'underscore',
    'backbone',
    'globals'
], function (_, Backbone, globals) {
    var LoginService = Backbone.Model.extend({
    defaults: {},
    performLogin: function(name, pass){
        var user = globals.userRepository.findWhere({name: name, pass: pass});
        if (user != undefined){
            globals.session.connect(user);
            return true;
        }
    },
    performLogout: function(){
         globals.session.disconnect();
    }
});
    return LoginService;
});