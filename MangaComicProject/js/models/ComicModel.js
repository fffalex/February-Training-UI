define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var ComicModel = Backbone.Model.extend({
    defaults: {
            id: 0,
            tittle: "",
            description: "",
            genre: "",
            characters: "",
            qualification: "",
            img: "",
            status: "",
        }
    });

    return UserModel;

});
