const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const winnerbutton = document.querySelector('#winner');

let p1score = 0, p2score = 0;
let winningScore = 5;

p1button.addEventListener('click', function (){
    p1score++; 
    document.querySelector("#p1display").innerHTML = p1score;
    if(p1score === winningScore){
        p1button.disabled = true;
        p2button.disabled = true;
        winnerbutton.innerHTML = "Player 1 Wins";
    }
})

p2button.addEventListener('click', function (){
    p2score++;
    document.querySelector("#p2display").innerHTML = p2score;
    if(p2score === winningScore){
        p1button.disabled = true;
        p2button.disabled = true;
        winnerbutton.innerHTML = "Player 2 Wins";
    }
})


reset.addEventListener('click', function (){
    p1button.innerHTML = 0;
    p2button.innerHTML = 0;
    p1button.disabled = false;
    p2button.disabled = false;
    winnerbutton.innerHTML = "";
})


