//1. Write an if statement that examines two integer variables and exchanges their 
//values if the first one is greater than the second one.
function exchangeValuesIfFirstGreater(int1, int2)
{
     if(parseInt(int1) == int1 && parseInt(int2) == int2)
    {
        int1 = parseInt(int1);
        int2 = parseInt(int2);
        if(int1 > int2)
        {
            var aux = int1;
            int1=int2;
            int2=aux;
            console.log("Se han intercambiado");
            return [int1,int2];
        }
    }
    else{console.log("parametros inválidos!"); }
}

//2. Write a script that shows the sign (+ or -) of the product of three real 
//numbers without calculating it. Use a sequence of if statements.
function showSignWithoutCalculate(num1,num2,num3)
{
    if(parseFloat(num1) == num1 && parseFloat(num2) == num2 && parseFloat(num3) == num3)
    {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        num3 = parseFloat(num3);
        
        // 0?
        if (num1 ==0 || num2 == 0 || num3 == 0)
        {
            console.log("Some numbers are zero. Product: +");
            return "+";
        }
        //Case + + + 
        if(num1 >0 && num2 > 0 && num3 >0)
        {
            console.log("Product: + ");
            return "+";
        }
         //Case - - -  
        if(num1 <0 && num2 < 0 && num3 <0)
        {
            console.log("Product: -");
            return "-";
        }
        //Cases - + +    + - +   + + -
        if( (num1 < 0 && num2 > 0 && num3 >0) 
                || (num1 > 0 && num2 < 0 && num3 >0)
                    || (num1 > 0 && num2 < 0 && num3 >0))
        {
            console.log("Product: - ");
            return "-";
        }
        
        //Cases  - - +    - + -     + - -
        if ((num1 < 0 && num2 < 0 && num3 >0)
                || (num1 < 0 && num2 > 0 && num3 <0)
                || (num1 > 0 && num2 < 0 && num3 <0))
        {
            console.log("Product: +");
            return "+";
        }
    }
    else{console.log("parametros inválidos!"); }
}

//3. Write a script that finds the biggest of three integers using nested if statements.
function findBigger(int1,int2,int3)
{
    if(parseInt(int1) == int1 && parseInt(int2) == int2 && parseInt(int2) == int2)
    {
        int1 = parseInt(int1);
        int2 = parseInt(int2);
        int3 = parseInt(int3);
            if (int1>int2)
            {
                if(int1>int3)
                    return int1;
            }else if(int1>int3){
                return int2;
            }else {
                return int3;
            }
    }
    else{console.log("parametros inválidos!"); }
}

//4. Sort 3 real values in descending order using nested if statements.
function orderDescending(int1,int2,int3)
{
    if(parseInt(int1) == int1 && parseInt(int2) == int2 && parseInt(int2) == int2)
    {
        int1 = parseInt(int1);
        int2 = parseInt(int2);
        int3 = parseInt(int3);
        var first;
        var second;
        var third;
        if (int1>int2)
            {
                if(int1>int3)
                {
                    first = int1;
                    // 9 8 7 
                    if (int2>int3){
                        second = int2;
                        third= int3;
                    //9 7 8
                    }else{
                        second = int3;
                        third =int2;
                    }
                //8 7 9    
                }else{
                    first = int3;
                    second = int1;
                    third = int2;
                }
            
            //8 9 7       
            }else if(int1>int3){
                first = int2;
                second = int1;
                third = int3;
            //7 9 8
            }else if(int2>int3){
                first = int2;
                second = int3;
                third = int1;
            //7 8 9    
            }else{
                first = int3;
                second = int2;
                third = int1;
            }
        return [first, second, third];
            
    }
    else{console.log("parametros inválidos!"); }
}

//4. Write script that asks for a digit and depending on the input shows the 
//name of that digit using a switch statement.

function inputNumber()
{
    var number = prompt("Ingresa un numero de un digito: ");
    if(parseInt(number) == number)
    {
        number = parseInt(number);
        {
            switch(number) {
            case 0:
                alert("Uno");
                break;
            case 1:
                alert("Uno");
                break;
            case 2:
                alert("Dos");
                break;
            case 3:
                alert("Tres");
                break;
            case 4:
                alert("Cuatro");
                break;
            case 5:
                alert("Cinco");
                break;
            case 6:
                alert("Seis");
                break;
            case 7:
                alert("Siete");
                break;
            case 8:
                alert("Ocho");
                break;
            case 9:
                alert("Nueve");
                break;
            default:
                alert("No ingresaste un numero de 1 solo digito");
                break;
            }
        }
    }
    else{console.log("parametros inválidos!"); }
}

//6 Write a script that finds the greatest of given 5 variables
function whoIsTheGreater(num1,num2,num3,num4,num5){
    if (parseFloat(num1) == num1 && parseFloat(num2) == num2 &&
            parseFloat(num3) == num3 && parseFloat(num4) == num4 &&
            parseFloat(num5) == num5)
    {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        num3 = parseFloat(num3);
        num4 = parseFloat(num4);
        num5 = parseFloat(num5);
        
        if(num1 > num2 && num1 > num3 && num1> num4 && num1 > num5)
        {
            return num1;
        }
        else if(num2 > num1 && num2 > num3 && num2> num4 && num2 > num5)
        {
            return num2;
        }
        else if(num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5)
        {
            return num3;
        }
        else if(num4 > num1 && num4 > num3 && num4> num2 && num4 > num5)
        {
            return num4;
        }
        else if(num5 > num1 && num5 > num3 && num5> num2 && num5 > num4)
        {
            return num5;
        }
    }  
}

//7. Write a script that converts a number in the range [0...999] to a text 
//corresponding to its English pronunciation.
function speakNumber(number)
{
     if (parseInt(number) == number)
     {
         number = number.toString();
         var word1 = "";
         var word2 = "";
         var word3 = "";
         
         //If the number has one digit
         if (number.length == 1){
             if (number == 0)
             {
                 console.log("Zero");
             }else{
                 console.log(speakOneNumber(number));
             }
         }
         else if (number.length > 1 && number.length < 4)
         {
            var twoDigits = number;
            if (number.length == 3)
            {
                word1 = speakOneNumber(number[0])+" hundred "+
                        (number%100 == 0  ? "" : " and ");
                twoDigits = number[1]+number[2];
            }
            if (IsTenFamily(twoDigits)){
                word2 = speakTenNumbers (twoDigits);
            }
            else{
                 word2 = speakOneNumber2(twoDigits[0]);
                 word3 = speakOneNumber(twoDigits[1]);
            }
            console.log(word1+""+word2+" "+word3);
         }
         else 
         {
           console.log("Ingresaste cualquier cosa macho")  
         }
     }
     
     function speakOneNumber(oneNumber){
        switch(parseInt(oneNumber)){
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        case 0:
            return "";
        }
    }
     
     function speakOneNumber2 (oneNumber){
        switch(parseInt(oneNumber)){
        
        case 2:
            return "twenty";
        case 3:
            return "thirty";
        case 4:
            return "forty";
        case 5:
            return "fifty";
        case 6:
            return "sixty";
        case 7:
            return "seventy";
        case 8:
            return "eighty";
        case 9:
            return "ninety";
        case 0:
            return "";
        }
     }
     
     function speakTenNumbers (oneNumber){
        switch(parseInt(oneNumber)){
        
        case 10:
            return "ten";
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 14:
            return "fourteen";
        case 15:
            return "fifteen";
        case 16:
            return "sixteen";
        case 17:
            return "seventeen";
        case 18:
            return "eigthteen";
        case 19:
            return "nineteen";  
        }
     }
     
     function IsTenFamily(oneNumber){
        if(oneNumber>9 && oneNumber<20){
            return true;
        }
        return false;
    }
}


     

