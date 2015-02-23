//4 3Create a Web page that shows 20 <div> elements with random location, size and color.
//Working on 04CrazyDivs.html
function crazyDivs()
{
    for (var i=0; i< 20; i++)
    {
        var div = document.createElement('div');
        div.style.position = "absolute";
        div.style.width = randomSize();
        div.style.height = randomSize();
        div.style.right = randomSize()*25;
        div.style.left = randomSize()*25;
        div.style.top = randomSize()*25;
        div.style.bottom = randomSize()*25;
        div.style.background = randomColor();
        document.body.appendChild(div);
    }
    
    function randomSize(){
        var size = Math.floor((Math.random() * 10) + 1);
        var mult = Math.floor((Math.random() * 10) + 1);
        return (size*mult)+"%";
    }
    
    function randomColor(){
        var hexas = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += hexas[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
crazyDivs();