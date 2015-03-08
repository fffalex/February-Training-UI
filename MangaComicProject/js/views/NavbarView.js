define([
    'jquery',
    'underscore',
    'backbone',
    'globals',
    'text!templates/NavbarTemplate.html',
    'models/Services/LoginService'
], function ($, _, Backbone, globals, NavbarTemplate, LoginService) {
    var NavbarView = Backbone.View.extend({
        el: $("#navbar"),
        template: NavbarTemplate,
        initialize: function () {
        },
        events: {
            "click #logout": "logout",
            "click #news": "newsPage",
            "click #genres": "showGenres"
        },
        showGenres: function(){
             location.hash = 'genres';
        },
        newsPage: function(){
            location.hash = 'news';
        },
        logout:function(){
            var loginService = new LoginService;
            loginService.performLogout();
            location.hash = 'login';
        },
        
        render: function () {
            
            var userData = globals.session.getUserData();
            
            var compiledTemplate = _.template(this.template)(userData);
            this.$el.html(compiledTemplate);
        }
    });
    return NavbarView;

});