//1.Write a function that returns the last digit of given integer as an 
//English word. Examples: 512  "two", 1024  "four", 12309  "nine"
function speakLastDigit(number){
    if (parseInt(number) == number)
    {
        number = number.toString();
        switch(parseInt(number[number.length-1])){
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
                return "zero";
            }
    }else{
        console.log("It is not a number!");
    }
}

//2. Write a function that reverses the digits of given number. Example: 256  652
function reverseNumber(number){
    if (parseInt(number) == number)
    {
        var reverse = "";
        number = number.toString();
        for (var i = number.length-1; i >= 0 ;i--)
        {
            reverse += number[i]; 
        }
        return reverse;
    }else{
        console.log("It is not a number!");
    }
}

//3. Write a function that finds all the occurrences of word in a text
//The search can case sensitive or case insensitive
//Use function overloading
function findOcurrencesOfWord(word, text, isCaseSensitive) {
    if (!isCaseSensitive) {
        text = text.toLowerCase();
        word = word.toLowerCase();
    }
    //Usando RegExp, no hecha por mi! Link del autor: 
    //http://stackoverflow.com/questions/18677834/javascript-find-all-occurrences-of-word-in-text-document
    var myRe = new RegExp("\\b" + word + "\\b((?!\\W(?=\\w))|(?=\\s))", "gi"),
        myArray, myResult = [];

    while ((myArray = myRe.exec(text)) !== null) {
        myResult.push(myArray.index);
    }
    console.log("La palabra: '"+word+"' matchea en las posiciones: "+myResult+" del texto");
}

//4. Write a function to count the number of divs on the web page
function countDivs(){
    return document.getElementsByTagName('div').length;
}

//5.Write a function that counts how many times given number appears in given 
//array. Write a test function to check if the function is working correctly.
function countAppearsInArray(number, array){
    if (parseInt(number) == number && array instanceof Array)
    {
        var count = 0;
        for(var i = 0; i< array.length; i++)
        {
            if (number == array[i])
            {
                count += 1;
            }
        }
        return count;
    }else {(console.log("Invalid arguments"))}
}

//5. TEST FUNCTION
function testCountAppearsInArray(){
    var testNumber = 5;
    var testArray = [1,5,4,5,8,5];
    console.log("The function will call with these arguments: number = "+testNumber
    +" array = "+testArray);
    return countAppearsInArray(testNumber,testArray);
}

//6. Write a function that checks if the element at given position in 
//given array of integers is bigger than its two neighbors (when such exist).
function checkIfBiggerThanNeighbors(position, array){
    if (parseInt(position) == position && array instanceof Array)
    {
        if (position> array.length-1 || position< 0)
        {
            return false;
        }
        if (position == array.length-1)
        {
            if(array[position-1]<array[position])
            {
                return true;
            }
        } 
        if (position == 0){
             if(array[position+1]< array[position]){
                 return true;
             }
        }
        if (array[position-1]< array[position] && array[position]> array[position+1])
        {
             return true;
        }
        return false;
    }
}

//7. Write a function that returns the index of the first element in array that 
//is bigger than its neighbors, or -1, if there’s no such element.
//Use the function from the previous exercise






