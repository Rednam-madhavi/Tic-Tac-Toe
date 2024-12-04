console.log("Welcome to Tic Tac Toe")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "O": "X";
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('text');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
        }
    })
}

//game logic
let blocks = document.getElementsByClassName("block");
Array.from(blocks).forEach(element =>{
    let boxtext = element.querySelector('.text');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

// Add onclick listener to reset button
const reset = document.querySelector('button');
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.text');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X"; 
    isgameover = false;
})