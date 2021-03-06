// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'globals',
    'views/LoginView',
    'views/HomeView',
    'views/HeaderView',
    'views/NavbarView',
    'views/PageBodyComicsView',
    'views/SidebarView',
    'views/NewsView',
    'views/GenreView',
    'views/BorrowView',
    'views/LoanView',
    'views/SearchView'

], function ($, _, Backbone, globals, LoginView, HomeView, HeaderView, NavbarView,
        PageBodyComicsView, SidebarView, NewsView, GenreView, BorrowView,LoanView,SearchView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'home': 'showStaticMain',
            'news': 'showNewsPage',
            'genres': 'showGenres',
            'borrow': 'showBorrows',
            'loan' : 'showLoan',
            'viewcomic/:id': 'showComic',
            // Default
            '*actions': 'defaultAction'
        }
    });

    var initialize = function () {
        //CREATE NEW ROUTER
        var app_router = new AppRouter;
         app_router.on('route:showComic', function (id) {
            if (!globals.session.isConnected()) {
                app_router.navigate('login', {trigger: true});
            } else {     
                var searchView = new SearchView;
                searchView.render(id);
            }
        });
        
        app_router.on('route:showBorrows', function () {
            if (!globals.session.isConnected()) {
                app_router.navigate('login', {trigger: true});
            } else {
                var borrowView = new BorrowView;
                borrowView.render();
            }
        });
        
        app_router.on('route:showLoan', function () {
            if (!globals.session.isConnected()) {
                app_router.navigate('login', {trigger: true});
            } else {

                var loanView = new LoanView;
                loanView.render();
            }
        });

        app_router.on('route:showNewsPage', function () {
            if (!globals.session.isConnected()) {
                app_router.navigate('login', {trigger: true});
            } else {
                

                var newsView = new NewsView;
                newsView.render();
            }
        });

        app_router.on('route:showGenres', function () {
            if (!globals.session.isConnected()) {
                app_router.navigate('login', {trigger: true});
            } else {

                var genreView = new GenreView;
                genreView.render();
            }
        });


        app_router.on('route:showStaticMain', function () {
            if (!globals.session.isConnected()) {
                app_router.navigate('login', {trigger: true});
            } else { 

                var pageBodyComicsView = new PageBodyComicsView;
                pageBodyComicsView.render();
            }
        });

        app_router.on('route:defaultAction', function (actions) {
            if (!globals.session.isConnected()) {
                var loginView = new LoginView;
                loginView.render();
            } else {

                app_router.navigate('home', {trigger: true});
            }
        });
        
        //STATIC IN ALL PAGES
        var homeView = new HomeView;
        homeView.checkSession();
    
        Backbone.history.start();
        

    };
    return {
        initialize: initialize
    };
});
