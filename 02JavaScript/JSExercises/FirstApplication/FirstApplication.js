//1. Create an HTML pagecontaining a table. Write ascript to color the table 
//rows in alternating colors.

function alternateTableColor(table_id){ 
    var table = document.getElementById(table_id);   
    var rows = table.getElementsByTagName('tr');
    rows[0].style.backgroundColor = "#FAA";
    for(var i = 1; i < rows.length; i++){           
      if(i % 2 == 0){ 
        rows[i].style.backgroundColor = "#888";
      }else{ 
        rows[i].style.backgroundColor = "#CCC"; 
      }       
    }
} 
alternateTableColor('firstTable');

//2. Create an HTML page that has two text fields (first name and last name) and a button. 
//When the user clicks the button, a message should show the text in the text fields 
//followed by the current time. 
function showNameHour(name_id,last_id){
    var name = document.getElementById(name_id).value;
    var last = document.getElementById(last_id).value;
    
    //get Date time
    var currentdate = new Date(); 
    var datetime = "Current time: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    alert(name+" "+last+" "+datetime);
}

//3. Create a Web page that asks the user about his name and says "Goodbye" 
//to him when leaving the page.
var wname = "NoName";
window.onload = function(){
    wname = prompt('Welcome user! what is your name?');
    document.getElementById('txt-name').value=wname;
}
function leavePage() {
          alert ('GoodBye '+wname);
          window.close();
      }

//4 3Create a Web page that shows 20 <div> elements with random location, size and color.
//Working on 04CrazyDivs.html
function crazyDivs()
{
    for (var i=0; i< 20; i++)
    {
        var div = document.createElement("div");
        div.style.width = randomSize();
        div.style.height = randomSize();
        div.style.background = randomColor();
        document.body.appendChild(div);
    }
    
    function randomSize(){
        var size = Math.floor((Math.random() * 10) + 1);
        var mult = Math.floor((Math.random() * 10) + 1);
        return size*mult;
    }
    
    function randomColor(){
        var hexas = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += hexas[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

//5. Create a Web page displaying alist of products. For each product,when the mouse 
//is hold over itshow a tooltip with additional info.
function showTooltip(id){
    var menu = document.getElementById(id);
    var lElement = menu.getElementsByTagName('li');
   for (var i = 0 ; i< lElement.length; i++)
   {
    lElement[i].onmouseover = function (){
        var div = this.getElementsByTagName('div');
        div[0].style.display = "inline-block";
        
    }
    lElement[i].onmouseout = function (){
        var div = this.getElementsByTagName('div');
        div[0].style.display = "none";
    }  
   }
}

showTooltip('product-list')

showDropdown('menu');

//6. Implement a text-scrolling script that scrolls a long text message inside 
//a <div>. You could use two divs one inside the other and move the left position 
//of the inner div at interval of 200 milliseconds.
var pad = 1;
var dir = true;


function scroll(){
    var element = document.getElementById('scroll');
    if (pad > 20){
        dir = false;
    }
    if (pad<2){
        dir = true;
    }
    if (dir==true){
        element.style.left = pad+"%";
        pad +=1;
    }else{
        element.style.left = pad+"%";
        pad -=1;
    }
    
  
}
setInterval(scroll,200);

function showDropdown(id){
    var menu = document.getElementById(id);
    var lElement = menu.getElementsByTagName('li');
   
   
   for (var i = 0 ; i< lElement.length; i++)
   {
    lElement[i].onmouseover = function (){
        var div = this.getElementsByTagName('div');
        div[0].style.display = "inline-block";
        
    }
    lElement[i].onmouseout = function (){
        var div = this.getElementsByTagName('div');
        div[0].style.display = "none";
    }
       
   }
   
    
}
showDropdown('menu');






