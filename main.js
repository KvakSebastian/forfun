var content = document.getElementById('content');

function out(start, stop){
    for (var i = start; i < stop; i++){
        if (i % 3 === 0  && i % 5 === 0)
            content.innerHTML += "Thirty fivev<br>";
        else if (i % 3 === 0 )
            content.innerHTML += "Three<br>";
        else if (i % 5 === 0 )
            content.innerHTML += "Five<br>";
        else 
            content.innerHTML += i + "<br>";
    }
}

function getParam(){
    var first = document.getElementById('firstNumber').value;
    var second = document.getElementById('secondNumber').value;

    out(first,second);

    return false;
}
