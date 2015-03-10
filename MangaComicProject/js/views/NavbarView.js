define([
    'jquery',
    'underscore',
    'backbone',
    'globals',
    'text!templates/NavbarTemplate.html',
    'models/Services/LoginService',
    'views/SearchView'
], function ($, _, Backbone, globals, NavbarTemplate, LoginService,SearchView) {
    var NavbarView = Backbone.View.extend({
        el: "#navbar",
        template: NavbarTemplate,
        initialize: function () {
        },
        events: {
            "click #logout": "logout",
            "click #editions": "editions",
            "click #news": "newsPage",
            "click #genres": "genresPage",
            "click #borrow": "borrowPage",
            "click #loans" : "loanPage",
            "click #search": "search"
        },
        search: function(){
            var value = $("#text-search").val();
            var searchView = new SearchView;
            searchView.render(value);
        },
        loanPage: function(){
            location.hash = 'loan';
        },
        editions: function(){
             location.hash = 'home';
        },
        borrowPage: function(){
             location.hash = 'borrow';
        },
        genresPage: function(){
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