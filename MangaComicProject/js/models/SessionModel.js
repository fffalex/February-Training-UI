define([
    'underscore',
    'backbone',
    'localstorage',
    'models/UserModel',
], function (_, Backbone, LocalStorage, UserModel) {

    var SessionModel = Backbone.Model.extend({
        defaults: {
            id: 0,
            user: UserModel,
            connected: false,
        },
        localStorage: new Backbone.LocalStorage("sessionData"),
        url: "data/session.json",
        isConnected: function(){
            return this.get("connected");
        },
        connect: function(user){
            this.set("user", user);
            this.set("connected", true);
            this.save();
        }
    });

    return SessionModel;

});