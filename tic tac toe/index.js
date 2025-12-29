let title = document.querySelector('.title');
let turn = 'X';
let squares = [];

let scoreX = 0;
let scoreO = 0;

let gameOver = false;

function finale (num1, num2, num3) {
    gameOver = true;

    document.getElementById('item' + num1).style.background = '#027f88ff';
    document.getElementById('item' + num2).style.background = '#027f88ff';
    document.getElementById('item' + num3).style.background = '#027f88ff';

    document.getElementById('winnerText').innerHTML =
      squares[num1] + " is the Winner ";

    let winner = squares[num1];
    if (winner === 'X') scoreX++;
    else if (winner === 'O') scoreO++;

    updateScore();
    document.getElementById('popup').style.display = 'flex';
}

function Winner () {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }

    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        finale(1, 2, 3);
    }
    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
        finale(4, 5, 6);
    }
    else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '') {
        finale(7, 8, 9);
    }
    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
        finale(1, 4, 7);
    }
    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
        finale(2, 5, 8);
    }
    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
        finale(3, 6, 9);
    }
    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '') {
        finale(1, 5, 9);
    }
    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '') {
        finale(3, 5, 7);
    }
    else {
        let draw = true;
        for (let i = 1; i < 10; i++) {
            if (squares[i] === '') {
                draw = false;
                break;
            }
        }

        if (draw && !gameOver) {
            gameOver = true;
            document.getElementById('winnerText').innerHTML = "It's a Draw !";
            document.getElementById('popup').style.display = 'flex';
        }
    }
}

function game (id) {
    if (gameOver) return;

    let element = document.getElementById(id);
    if (turn === 'X' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'O';
        title.innerHTML = "O's Turn";
    }
    else if (turn === 'O' && element.innerHTML == '') {
        element.innerHTML = 'O';
        turn = 'X';
        title.innerHTML = "X's Turn";
    }
    Winner();
}

function restartGame() {
    for (let i = 1; i <= 9; i++) {
        let element = document.getElementById('item' + i);
        element.innerHTML = '';
        element.style.background = '';
    }

    document.getElementById('popup').style.display = 'none';

    turn = 'X';
    title.innerHTML = "X's Turn";
    squares = [];
    gameOver = false;
}


function updateScore() {
    document.getElementById('scoreX').innerText = `X: ${scoreX}`;
    document.getElementById('scoreO').innerText = `O: ${scoreO}`;
}
