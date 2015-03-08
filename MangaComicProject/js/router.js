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
    'views/PageBodyComicsView'

], function ($, _, Backbone, globals, LoginView, HomeView, HeaderView, NavbarView, PageBodyComicsView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'home': 'showStaticMain',
            // Default
            '*actions': 'defaultAction'
        }
    });

    var initialize = function () {

        var app_router = new AppRouter;
        app_router.on('route:showStaticMain', function () {
            if (!globals.session.isConnected()) {
                app_router.navigate('login', {trigger: true});
            } else {
//            var homeView = new HomeView;
//            homeView.render();
                //Create the new views with the data associated
                var headerView = new HeaderView;
                headerView.render();
                var navbarView = new NavbarView;
                navbarView.render();
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



        // Unlike the above, we don't call render on this view as it will handle
        // the render call internally after it loads data. Further more we load it
        // outside of an on-route function to have it loaded no matter which page is
        // loaded initially.
//    var footerView = new FooterView();

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
