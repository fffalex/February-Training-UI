define([
    'jquery',
    'underscore',
    'backbone',
    'globals',
    'text!templates/LoginTemplate.html',
    'models/Services/LoginService',
], function ($, _, Backbone, globals, LoginTemplate, LoginService) {

    var LoginView = Backbone.View.extend({
        el: $("#container"),
        template: LoginTemplate,
        initialize: function () {
        },
        // Se asignan eventos a los botones anterior y siguiente para permitir visualizar libros
        events: {
            "click #login-btn": "login",
        },
        login: function () {
            var loginService = new LoginService;
            var name = $("#name").val();
            var pass = $("#pass").val();
            if (name.length == 0 || pass.length == 0) {
                showModal("Some field are empty");
            }
            else if (name.length < 4 || pass.length < 4) {
                showModal("Username or Password must be 5 character or more");
            }
            else if (name.length > 3 && pass.length > 3) {
                //Uso el service de logueo para que encuentre los datos en repositorio de users
                if (loginService.performLogin(name, pass)) {
                    location.hash = 'home';
                } else {
                    showModal("Username or password incorrect");
                }
            }

        },
        render: function () {
            var compiledTemplate = _.template(this.template)({name: "Robert"});
            var compiledTemplate = _.template(this.template);
            this.$el.html(this.template);
        },
    });

    return LoginView;

});

//FUNCTION USING BOOSTRAP TO SHOW MODALS
function showModal(textToShow) {
    $('#modal-message').text(textToShow);
    $('#modal').modal('show');
}


