define([
    'underscore',
    'backbone',
    'collections/comicCollection'
], function (_, Backbone, ComicCollection) {

    var UserModel = Backbone.Model.extend({
    defaults: {
            id: 0,
            name: "",
            pass: "",
            mail: "",
            fullname: "",
            isAdmin: false,
            photo: "",
            borrowed: ComicCollection
        }
    });

    return UserModel;

});
