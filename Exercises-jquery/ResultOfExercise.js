//1 Select all of the div elements that have a class of "module".
$('div.module');

//2 Come up with three selectors that you could use to get the third item in 
//the #myList unordered list
$('#myList li:eq(2)');
$('#myListItem');
$('#myList li')[2];

//3. Select the label for the search input using an attribute selector
$('[for="q"]');

//4.Count hidden elements on the page
$(":hidden").length;

//5.Count the image elements that have an alt attribute
$('img[alt]').length;

//6 Select all of the odd table rows in the table body
$( "tbody tr:odd" );

//7 Select all of the image elements on the page
var imgs = $('img');
for (var i =0; i< imgs.length; i++)
{
    console.log($(imgs[i]).attr('alt'));
}

//8. Select the search input text box, then traverse up to the form and add a class to the form.
$('input[name="q"]').parent().addClass('esta');

//9. Select the list item inside #myList that has a class of "current"
//Remove that class from it
//Add a class of "current" to the next list item

$('#myList.current').removeClass('current').next().addClass('current');

//10. Select the select element inside #specials
//Traverse your way to the submit button.
$('#specials select').parent().next().children('input[type="submit"]');

//Select the first list item in the #slideshow element
// 11. Add the class "current" to it, and then add a class
//of "disabled" to its sibling elements

$('#slideshow>li:eq(0)').addClass('current').nextAll().addClass('disabled');

//12. Add five new list items to the end of the unordered list #myList
var list = $('#myList');
for (var i = 0; i< 5; i++)
{
    list.append('<li>NEW Item '+i+8+'</li>');
}
//13. Remove the odd list items
$('#myList li:odd').remove();

//14. Add another h2 and another paragraph to the last div.module
$('div.module').append('<h2>New H2</h2>','<p>this is a new paragraph</p>');

//15. Add another option to the select element. Give the option the value "Wednesday"
$('select').first().append($('<option>', {value: "Wednesday", text: 'NEW'}));

//16. Add a new div.module to the page after the last one 
//Put a copy of one of the existing images inside of it
$('<div></div>').addClass('module').append($('img').first()).insertAfter($('div').last());
