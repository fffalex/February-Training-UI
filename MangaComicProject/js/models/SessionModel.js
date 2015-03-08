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
        },
        disconnect: function(){
            this.set("connected", false);
            this.set("user", new UserModel);
        },
        getUserData: function(){
            //Devuelvo datos interesantes para la session
            var user = this.get("user");
            var role;
            if(user.isAdmin)
                role = "Administrator";
            else
                role= "Basic User";
            return {
                fullname: user.fullname,
                mail: user.mail,
                isAdmin: role
            }
        }
    });

    return SessionModel;

});