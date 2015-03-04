
//var json = require('../data/users.json');
require(['json!users.json'], function(data){
  console.log(data);
})
//console.log(json);
localStorage["user1"] = "asdasd";
localStorage["admin"] = "admin";

 function readUserFromJson() {
            $.getJSON("../data/users.json", function(user) {
                $.each(user["name"], function(primo) {
                    
                });
            });
        }

$(function(){
    var name = $("#name");
    name.keyup(checkLength(name));
    
    var pass = $("#pass");
    pass.keyup(checkLength(pass));
    
    var loginFieldValidation = $("#login-btn");
    loginFieldValidation.click(function (){ 
        if (name.val().length == 0 || pass.val().length == 0){
            showModal("Some field are empty");
        }
        else  if (name.val().length < 4 || pass.val().length < 4){
            showModal("Username or Password must be 5 character or more")
        }
        else if (name.val().length > 3 && pass.val().length >3){
            logLocalStorage(name,pass);
        }
    });
    name.blur(checkEmpty(name));
    pass.blur(checkEmpty(name));
});

function checkEmpty(element){
    var $this = $(element);
        var nameLength = $this.val().length;
        if (nameLength == 0) {     
         $this.css('background-color', '#FFFAAA');
        }
}
function checkLength(element) {
      var $this = $(element);
      var elementLength = $this.val().length;
      if (elementLength >= 13) {
         $this.css('background-color', '#FFFAAA');
      } else {
         $this.css('background-color', '#FFFFFF');
      }
    }

function logLocalStorage(name,pass){
        if (localStorage[name.val()] == pass.val()){
            showModal("Welcome "+localStorage[name.val()]);
            localStorage["current"] = name.val();
            setTimeout(function(){window.location.href = "index.html"},1500);           
        }else{
            showModal("Username or password incorrect");
        }
    }

function showModal(textToShow){
        $('#modal-message').text(textToShow);
        $('#modal').modal('show');
    }
