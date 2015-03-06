define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var ComicModel = Backbone.Model.extend({
    defaults: {
            id: 0,
            name: "",
            genre: "",
            characters: "",
            qualification: "",  
        }
    });

    return UserModel;

});
