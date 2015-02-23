//1. Create an HTML pagecontaining a table. Write ascript to color the table 
//rows in alternating colors.

function alternateTableColor(tableId){ 
    var table = document.getElementById(tableId);   
    var rows = table.getElementsByTagName("tr");
    rows[0].style.backgroundColor = "#FAA";
    for(var i = 1; i < rows.length; i++){           
      if(i % 2 == 0){ 
        rows[i].style.backgroundColor = "#888";
      }else{ 
        rows[i].style.backgroundColor = "#333"; 
      }       
    }
} 


alternateTableColor("firstTable");