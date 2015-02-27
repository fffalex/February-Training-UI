/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Item = Backbone.Model.extend({
    idAttribute: "studentId", 
    urlRoot: "/Items"
});

var Items = Backbone.Collection.extend({ 
    model: Item, 
    url: "/Items" // not in lecture scope
});

var items = new Items(); 
items.add({name: "Pencil"});
items.add({name: "Pencil 2"});

var item = new Item(); 
item.on("change:name", function() {
    alert("Name is: " + this.get("name"));
});

var item = new Item();
    item.on("change:name", function() {
    alert("Name is: " + this.get("name"));
});
item.set( { name: "Moshe" } );



