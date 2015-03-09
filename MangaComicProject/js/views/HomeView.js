define([
    'jquery',
    'underscore',
    'backbone',
    'globals',
    'text!templates/HomeTemplate.html',
    'views/HeaderView',
    'views/NavbarView',
    'views/SidebarView',
], function ($, _, Backbone, globals, HomeTemplate, HeaderView, NavbarView,SidebarView) {

    var HomeView = Backbone.View.extend({
        el: $("#container"),
        template: HomeTemplate,
        initialize: function () {
            this.listenTo(globals.session, 'change', this.checkSession);
        },
        checkSession: function(){
           if(globals.session.isConnected())
           this.render();
        },
        render: function () {
            this.$el.html(this.template);
          
            //Render static html when logged
            var headerView = new HeaderView;
            headerView.render();
            var navbarView = new NavbarView;
            navbarView.render();
            var sidebarView = new SidebarView;
            sidebarView.render();   
        }
    });

    return HomeView;

});


