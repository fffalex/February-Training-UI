define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var NewModel = Backbone.Model.extend({
    defaults: {
            id: 0,
            tittle: "",
            description: "",
            summary: "",
            img: "",
        }
    });

    return NewModel;

});