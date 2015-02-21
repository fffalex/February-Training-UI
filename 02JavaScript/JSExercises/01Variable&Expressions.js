///1 Write an expression that checks if given integer is odd or even.
function evenOrOdd (number)
{
    //OLD MODE
    //if ( typeof(number) == "number" && !isNaN(number) && isFloat(number))
    
    if(parseInt(number) == number)
    {
        number = parseInt(number);
        if (number%2 == 0)
        {
            console.log("Even");
        }else if(number%2 !=0 ){
            console.log("Odd")
        }
    }
    else
    {
       console.log("You have entered any verdure");
    }
}

//2 Write a boolean expression that checks for given integer 
//if it can be divided (without remainder) by 7 and 5 in the same time.
function isDividedBySevenAndFive(number)
{
    if (parseInt(number) == number)
    {
        number = parseInt(number);
        if (number%5 == 0 && number%5 == 0){
            return true;
        }
        else
        {
            return false;
        }
    }
    else{
        return false;
    }
}

//3 Write an expression that calculates rectangle’s area by given width and height
function calculateRectangleArea(width, height)
{
    if( parseFloat(width) == width && parseFloat(height) == height)
    {
        width = parseFloat(width);
        height = parseFloat(height);
        console.log ("area is :"+(width*height));
    }
    else
    {
        console.log("Some parameters are incorrect");
    }
}

//4 Write an expression that checks for given integer if its third digit 
//(right-to-left) is 7. E. g. 1732  true.
function isThirdDigitSeven(number)
{
    if (parseInt(number) == number)
    {
        var a = number.toString();
        if (a.length>2  && a[a.length-3] == 7)
        {
            return true;
        }
        else {return false;}
    }
    else{return false;}
}

//5 Write an expression that checks if given positive integer number n (n ≤ 100)
// is prime. E.g. 37 is prime.
function isPrime(number)
{
    if (parseInt(number) == number)
    {
        var flag = 0;
        number = parseInt(number);
        for (i=2; i < 100; i++ )
        {
            if (number%i == 0)
            {
                flag = flag+1;
            }
        }
        if(flag==1)
        {
            return true;
        }else{ return false;}
    }
}

