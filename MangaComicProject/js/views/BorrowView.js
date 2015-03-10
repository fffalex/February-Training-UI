define([
    'jquery',
    'underscore',
    'backbone',
    'globals',
    'text!templates/BorrowTemplate.html'
], function ($, _, Backbone, globals, BorrowTemplate) {
    var BorrowView = Backbone.View.extend({
        el: "#page",
        template: BorrowTemplate,
        initialize: function () {
        },
        events: {
            "click #comment1": "comment1",
            "click #comment2": "comment2",
        },
        
        //SUPER HARCODED CAN BE A FUNCTION =)
        comment1: function(){
            var value = $("#textarea1").val();
            $("#textarea1").replaceWith("<p>"+value+"</p>");
            $("#comment1").hide();
        },
         comment2: function(){
            var value = $("#textarea2").val();
            $("#textarea2").replaceWith('<span>'+value+'</span><p><small><a href="http://cdni.wired.co.uk/1920x1280/k_n/Like.jpg">Like</a> - <a href="https://www.facebook.com/">Share</a></small></p>');
            $("#comment2").hide();
        },
        //END HARCODED ZONE
        
        render: function () {
            var collection = globals.session.get("user").borrowed;
            var userphoto = globals.session.get('user').photo;
            
            var compiledTemplate = _.template(this.template)({comics: collection, user: userphoto });
            this.$el.html(compiledTemplate);
            
            $(function () {
                $("[data-toggle='tooltip']").tooltip();
            });
        }
        
    });
    return BorrowView;

});