const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const setbtn = document.querySelector('#setBtn');

let p1score = 0, p2score = 0;
let winningScore;

setbtn.addEventListener('click', function(){
    winningScore = parseInt(document.querySelector('#winningScore').value);
    console.log(winningScore);
})

p1button.addEventListener('click', function (){
    p1score++; 
    document.querySelector("#p1display").innerHTML = p1score;
    if(p1score === winningScore){
        document.querySelector("#p1button").disabled = true;
        document.querySelector("#p2button").disabled = true;
        document.querySelector('#winner').innerHTML = "Player 1 Wins";
    }
})

p2button.addEventListener('click', function (){
    p2score++;
    document.querySelector("#p2display").innerHTML = p2score;
    if(p2score === winningScore){
        document.querySelector("#p1button").disabled = true;
        document.querySelector("#p2button").disabled = true;
        document.querySelector('#winner').innerHTML = "Player 2 Wins";
    }
})


reset.addEventListener('click', function (){
    document.querySelector("#p2display").innerHTML = 0;
    document.querySelector("#p1display").innerHTML = 0;
    document.querySelector("#p1button").disabled = false;
    document.querySelector("#p2button").disabled = false;
    document.querySelector('#winner').innerHTML = "";
})


