//1 .Write a script that allocates array of 20 integers and initializes each 
//element by its index multiplied by 5. Print the obtained array on the console.

function initializeArrayByIndex(){
    array = new Array(20);
    console.log(array);
    for (var i = 0; i < array.length; i++)
    {
        array[i] = i*5;
    }
    console.log(array);
}

//2. Write a script that compares two char arrays lexicographically 
//(letter by letter).
function compareCharByChar(array1, array2){
    if (array1 instanceof Array && array2 instanceof Array)
    {
        if (array1.length == array2.length)
        {
            var flag = false;
            for (var i = 0; i < array1.length; i++)
            {
                if (!(array1[i] === array2[i]))
                {
                    flag = true;
                    break;
                }
            }
            if (flag == false)
            {
                console.log("Son lexocicographicalicalmente iguales = P");
            }else{
                console.log("NO son lexocicographicalicalmente iguales = P");
            }
            
            
        }else{console.log("NO tienen ni la misma longitud. Chau");}
       
    }else{console.log("Alguno no es array");}
}

//3.Write a script that finds the maximal sequence of equal elements in an array.
function findMaxEqualSequence(array){
    if (array instanceof Array)
    {
        var eq = array[0];
        var maxSeq = [];
        var maxSeqAux = [];
        for (var i = 1; i < array.length; i++)
        {             
               if (eq == array[i]){
                   if(maxSeq.length == 0){
                       maxSeq.push(eq);
                   }
                   //si es igual al anterior agrego un elemento al array
                   maxSeq.push(eq);
               }else{
                   //sino actualizo el elemento actual para comparar
                   eq = array[i];
                   //si la secuencia actual es mayor a la auxiliar, la copio 
                   //a la auxiliar y reinicio la actual 
                   if (maxSeq.length > maxSeqAux.length)
                   {
                       maxSeqAux = maxSeq;
                       maxSeq = [];
                   }
               }                
        }
        //doble check por si la secuencia mas larga se encuentra al final del array
        if (maxSeqAux.length > maxSeq.length)
        {
            console.log("Max Sequence: "+maxSeqAux);
        }else{
            console.log("Max Sequence: "+maxSeq);
        }         
    }else{console.log("No es array");} 
}

//4. Write a script that finds the maximal increasing sequence in an array. 
function findMaxInreasingSequence(array){
    if (array instanceof Array)
    {
        var eq = array[0];
        var maxSeq = [];
        var maxSeqAux = [];
        for (var i = 1; i < array.length; i++)
        {             
               if (eq == array[i]-1){
                   //si es igual siguiente -1 agrego un elemento al array
                   if(maxSeq.length == 0){
                       maxSeq.push(eq);
                   }
                   maxSeq.push(array[i]);
                   eq +=1;
               }else{
                   //sino actualizo el elemento actual para comparar
                   eq = array[i];
                   //si la secuencia actual es mayor a la auxiliar, la copio 
                   //a la auxiliar y reinicio la actual 
                   if (maxSeq.length > maxSeqAux.length)
                   {
                       maxSeqAux = maxSeq;
                       maxSeq = [];
                   }
               }                
        }
        //doble check por si la secuencia mas larga se encuentra al final del array
        if (maxSeqAux.length > maxSeq.length)
        {
            console.log("Max Sequence: "+maxSeqAux);
        }else{
            console.log("Max Sequence: "+maxSeq);
        }         
    }else{console.log("No es array");} 
}

//5. Sorting an array means to arrange its elements in increasing order. 
function selectionSort(array){
    if (array instanceof Array)
    {
        var min;
        var aux;
        for (var i = 0; i<array.length;i++)
        {
            //elemento pivote 
            min = i;
            for(var j = i+1; j <array.length; j++)
            {
                //actualizo el min
                if (array[j]< array[min])
                {
                    min = j;
                }
            }
            //si cambio el minimo reordeno usando un auxiliar
            if (min != i)
            {
                aux = array[i];
                array[i] = array[min];
                array[min] = aux;
            }
        }
        console.log("Sort: "+array);
    }else{console.log("No es array");} 
}

//6. Write a program that finds the most frequent number in an array. 
function mostFrequentNum(array){
    if (array instanceof Array)
    {
      var count = 0;
      var most;
      var iCount = 0;
      
      for (var i = 0; i<array.length;i++)
        {
            for (var j = 0; j<array.length;j++)
            {
                if (array[i] == array[j])
                {
                   iCount += 1;
                }  
            }
            if (iCount> count)
            {
                count = iCount;
                most = array[i];
            }
            iCount = 0;
        }
        console.log("Most frequent: "+most+ " --> "+count+" times")
    }else{console.log("No es array");} 
}







