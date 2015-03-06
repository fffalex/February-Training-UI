define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var UserModel = Backbone.Model.extend({
    defaults: {
            id: 0,
            name: "",
            pass: "",
            mail: "",
            fullname: "",
            isAdmin: false
        }
    });

    return UserModel;

});
