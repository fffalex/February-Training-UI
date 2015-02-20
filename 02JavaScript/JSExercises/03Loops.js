//1.Write a script that prints all the numbers from 1 to N
function printAll(number)
{
     if (parseInt(number) == number)
     {
         number = parseInt(number);
         for (var i = 1 ; i <= number; i++)
         {
             console.log(i);
         }
    }
}

//2.Write a script that prints all the numbers from 1 to N, that are not 
//divisible by 3 and 7 at the same time

function printAllUndivisible37(number)
{
     if (parseInt(number) == number)
     {
         number = parseInt(number);
         for (var i = 1 ; i <= number; i++)
         {
             if (!(i%3 == 0 && i%7 == 0))
             console.log(i);
         }
    }
}
//3 Write a script that finds the max and min number from a sequence of numbers
function findMaxAndMin(arrayOfNumber)
{
    if (typeof(arrayOfNumber) == "Array")
    {
        var max = -32000;
        var min = 32000;
        for(var i = 0; i <= arrayOfNumber.length ; i++)
        {
            for(var j= 0; j<= arrayOfNumber.length; j++)
                if (i>j);
        }
    }
    
}