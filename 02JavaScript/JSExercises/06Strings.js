//1.Write a JavaScript function reverses string and returns itExample: "sample"  "elpmas".

function reverseString(string){
        var reverse = "";
        string = string.toString();
        for (var i = string.length-1; i >= 0 ;i--)
        {
            reverse += string[i]; 
        }
        return reverse;
}

//2. Write a JavaScript function to check if in a given expression the brackets 
//are put correctly
function checkBrackets(expression){
        expression = expression.toString();
        var countOpened = 0;
        var countClosed = 0;
        var flagOpen = true;
        //Actualmente no soporta una expresion (( ) ( )) xD, solo ((( )))
        //Funciona bien para los examples
        for (var i = 0; i < expression.length ;i++)
        {
            if(expression[i] == "(")
            {
                countOpened +=1;
                if(flagOpen==false){
                    return false;
                }
            }
            if(expression[i]==")"){
                flagOpen= false;
                countClosed +=1;
            }
        }
        if (countOpened == countClosed){
            return true;
        }
        return false;
}

//3. Write a JavaScript function that finds how many times a substring is 
//contained in a given text (perform case insensitive search).
function countNumberOfOcurrences(substring, text) {
    var count = 0;
    text = text.toLowerCase();
    substring = substring.toLowerCase();
    //Usando RegExp, no hecha por mi! Link del autor: 
    //http://stackoverflow.com/questions/18677834/javascript-find-all-occurrences-of-substring-in-text-document
    var myRe = new RegExp("\\b" + substring + "\\b((?!\\W(?=\\w))|(?=\\s))", "gi"),
        myArray, myResult = [];

    while ((myArray = myRe.exec(text)) !== null) {
        myResult.push(myArray.index);

    }
    return myResult.length;
}


