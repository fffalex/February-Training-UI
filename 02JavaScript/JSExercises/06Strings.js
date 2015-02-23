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
    var flag = false;
    substring = substring.toLowerCase();
    var n = -1;
    while (flag == false)
    {
        n = text.indexOf(substring);
        if (n != -1)
        {
            count += 1;
            text = text.substring( n+substring.length ,text.length);
        }
        else{
            flag= true;
        }
    }
    return count;
}

//4. Write a function that changes the text in all regions. 
//<upcase>text</upcase> to uppercase. <lowcase>text</lowcase> to lowercase
//<mixcase>text</mixcase> to mix casing(random)
function changeTextRegion(text){
    var flag = false;
    var n = -1;
    var m = -1;
    var innerText;
    var tagText;
    var random;
    while (flag == false)
    {
        n = text.indexOf("<upcase>");
        //TODO: Puede ser refactorizado a una function o switch con arguments
        if (n != -1)
        {
            m = text.indexOf("</upcase>");
            innerText = text.substring( n+8,m);
            tagText = text.substring(n , m+9);
            innerText = innerText.toUpperCase();
            text = text.replace(tagText,innerText);
        }
        else
        {
            n = text.indexOf("<lowcase>");
            if (n != -1)
            {
                m = text.indexOf("</lowcase>");
                innerText = text.substring( n+9,m);
                tagText = text.substring(n , m+10);
                innerText = innerText.toLowerCase();
                text = text.replace(tagText,innerText);
            }
            else
            {
                n = text.indexOf("<mixcase>");
                if (n != -1)
                {
                    m = text.indexOf("</mixcase>");
                    innerText = text.substring( n+9,m);
                    tagText = text.substring(n , m+10);
                    //mixcase random
                    for (var i=0; i<innerText.length; i++)
                    {
                        random = Math.floor((Math.random() * 10) + 1);
                        if(random>5){
                            innerText[i] = innerText.charAt(i).toLowerCase();
                        }else
                        {
                            innerText[i] = innerText.charAt(i).toUpperCase();
                        }
                        
                    }
                    
                    text = text.replace(tagText,innerText);
                }
                else{
                    flag = true;
                }
            }
        }
        
    }
    return text;
}

//5. Write a function that replaces non breaking white-spaces in a text with &nbsp;

//6. Write a function that extracts the content of a html page given as text. 
//The function should return anything that is in a tag, without the tags:
function extractContentHtml(htmlText){
    var n = -1;  
    var m = -1;
    var innerText;
    var tagText;
    
    //TODO: se puede refactorizar mas XXD
    htmlText = performReplace("<body>","</body>",htmlText);
    htmlText = performReplace("<html>","</html>",htmlText);
    htmlText = performReplace("<div>","</div>",htmlText);
    htmlText = performReplace("<title>","</title>",htmlText);  
    htmlText = performReplace("<head>","</head>",htmlText);  
    return htmlText;
    
    //Reemplaza todas las etiquetas div iguales de un texto
    function performReplace(tag1,tag2,text)
    {
        var iFlag = false;
        var replaced = text;
        while (iFlag == false){
            if(thereIsTag(tag1,text))
            {
                text = replaceTag(tag1,tag2,text);
            }else
            {
                iFlag = true;
            }
        }
        return text;
    }
    
    //comprobar q exista la etiqueta
    function thereIsTag(tag,text){
        n = text.indexOf(tag);
        if (n != -1)
        {
            return true;
        }
        return false;
    }
    
    //realiza el reemplazo de una sola etiqueta
    function replaceTag(tag1,tag2,text)
    {
        n = text.indexOf(tag1);
        m = text.indexOf(tag2);
        innerText = text.substring( n+tag1.length,m);
        tagText = text.substring(n , m+tag2.length);
        text = text.replace(tagText,innerText);
        return text;
    }
}

//7. Write a script that parses an URL address given in the format:
function getJsonfromUrl(url){
    var n = -1;  
    var protocol;
    var server;
    var resource;
    var json;

    n = url.indexOf("://");
    if (n != -1)
    {
        protocol = url.substring(0,n);
        url = url.substring(n+3);
        n = url.indexOf("/");
        server = url.substring(0, n);
        url = url.substring(n+1);
        resource = url;
        json = "{protocol: '"+protocol+"',\n server: '"+server+"',\n resource: '"+resource+"' }";
        return json;
    }
}

//8. Write a JavaScript function that replaces in a HTML document given as string all the tags 
//<a href="…">…</a> with corresponding tags         
//[URL=…]…/URL]. Sample HTML fragment:
function replaceAByUrl(html){
    var flag = false;
    var href;
    var innerText;
    var tagText;
    var newText;
    var oldText;
    var n = -1;
    var m = -1;
    var o = -1;
    
    while (flag == false){
        n = html.indexOf("<a href=");
        if (n != -1)
        {
            //para encontrar el ">" correspondiendte a ese href. Chaining a full
            m = html.substring(n,html.length).indexOf(">");
            o = html.indexOf("</a>");
            //le sumo a m lo que le saqué por el substring 
            href = html.substring(n+8,m+n);
            innerText = html.substring( m+n+1,o);
            oldText = html.substring(n,o+4);
            newText = "[URL="+href+"]"+innerText+"[/URL]";
            html = html.replace(oldText,newText); 
        }else{flag = true;}
    }
    return html;
}

//9. Write a function for extracting all email addresses from given text. 
//All substrings that match the format <identifier>@<host>…<domain> should be recognized as emails. 
//Return the emails as array of strings.

function extractEmails(text){
    var textArray = text.split(" ");
    var emails = [];
    var n = -1;
    for (var i = 0; i<textArray.length; i++)
    {
        n = textArray[i].indexOf("@");
        if (n != -1)
        {
            if (textArray[i].indexOf(".") != -1)
            {
                 emails.push(textArray[i]);
            }
        }
    }
    return emails;
}

//10. Write a program that extracts from a given text all palindromes, 
//e.g. "ABBA", "lamal", "exe".

function extractPalindromes(text){
    var textArray = text.split(" ");
    var palindromes = [];
    var n = -1;
    for (var i = 0; i<textArray.length; i++)
    {
       if (textArray[i] == reverseString(textArray[i]))
       {
           palindromes.push(textArray[i]);
       }
    }
    return palindromes;
    
    function reverseString(string){
        var reverse = "";
        for (var i = string.length-1; i >= 0 ;i--)
        {
            reverse += string[i]; 
        }
        return reverse;
    }
}

//11. Write a function that formats a string using placeholders
function stringFormat(){
    var format = arguments[0];
    var place;
    
    for (var i= 1; i<arguments.length; i++)
    {
        place = "{"+(i-1)+"}";
        var flag = false;
        while(flag == false){
            if(format.indexOf(place) != -1){
                format = format.replace(place,arguments[i]);
            }
            else{
                flag=true;
            }
        } 
    }
    return format;
}

//12. 











