//trying imitate Override POO
function AverageTwo ()
{
    if (arguments.length == 1)
    {
        alert (arguments[0]);
    }
    if (arguments.length == 2)
    {
        num1 = parseInt(arguments[0]);
        num2 = parseInt(arguments[1]);
        
        if (typeof(num1) === "number" && typeof(num2) === "number")
        {
            alert (((num1 + num2)/ 2));
        }
    }
    if (arguments.length === 3)
    {
         num1 = parseInt(arguments[0]);
        num2 = parseInt(arguments[1]);
        var num3 = parseInt(arguments[2]);
        
        if (typeof(num1)=== "number" && typeof(num2) === "number" && typeof(num3) === "number")
        {
           alert (((num1 + num2 +num3)/ 2));
        }
    }
     if (arguments.length === 0)
    {
        alert ("Llamaste la función sin paramentros y hace NADA");
    }
}




