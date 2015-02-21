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
    if (arrayOfNumber instanceof Array)
    {
        var max = -32000;
        var min = 32000;
        for(var i = 0; i <= arrayOfNumber.length ; i++)
        {
            if (arrayOfNumber[i]< min)
                min = arrayOfNumber[i];
            if (arrayOfNumber[i]> max)
                max = arrayOfNumber[i];
        }
        console.log("Max: "+max+"   Min: "+min);
    }
    else{ console.log("NO ingresaste array");}
}

//4. Write a script that finds the lexicographically smallest and largest
// property in document, window and navigator objects




