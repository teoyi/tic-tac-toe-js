// Construction of play area 
const gameBoard = (() => {
    // Creating a board with an array of 9 spaces 
    let _board = new Array(9); 
    const _keys = document.getElementsByClassName('btn');
    
    // Connecting elements of the array to the grid button value
    // for (let i=0; i<_board.length; i++) {
    //     _board[i] = _keys[i].innerHTML 
    // };

    // Getting the values of the squares of interest 
    const getKey = (index) => {
        return _board[index];
    };

    // Get the index of the square of interest 
    // Might not be needed 
    const getIndex = () => {
        for (let i=0; i<_board.length; i++){
            _keys[i].addEventListener("click", function(e){
                return this.id;
            });
        };
    };

    // Setting values for the squares of interest 
    const setKey = (index, player) => { 
        if (_board[index]) {
            alert('This position is already taken. Try again!');
        } else {
            // Update array for square of interest 
            // _board[index] = player //For now, player will be manually palced for a role
            _board[index] = player.getRole(); // .getRole() will be added to determine player's decision on 'x' or 'o'
            _keys[index].innerHTML = _board[index]; //Replacing button's html with the correct 'x' or 'o'
        };
    };

    // Get the board array 
    const getBoard = () => _board;

    const clear = () => {
        for (let i=0; i<_board.length; i++){
            _board[i] = '';
            _keys[i].innerHTML = '';
        }
    }
    
    return{ 
        getKey,
        setKey,
        getIndex,
        getBoard,
        clear
    };

})();


// Player creation factory 
const Player = (role) => {
    let _role = role; 
    let docRole = document.getElementById(_role);

    const getRole = () => _role; 

    const setRole = () => {
        if (!docRole.classList.contains('active')){
            docRole.classList.add('active');
        };
    };

    const rmvRole = () => {
        if (docRole.classList.contains('active')){
            docRole.classList.remove('active');
        };
    };

    return {
        getRole,
        setRole,
        rmvRole
    };
};

// Game logic 
const gameController = (() => {
    const _player1 = Player('x');
    const _player2 = Player('o');
    const _roleX = document.getElementById('x'); 
    const _roleO = document.getElementById('o');
    const _keys = document.getElementsByClassName('btn');

    const winCondition = [
                        [0,1,2], [3,4,5,],[6,7,8],
                        [0,3,6],[1,4,7],[2,5,8],
                        [0,4,8],[2,4,6]
                    ]
    
    const _checkRow = (board) => { 
        const row1 = [board.getKey(0),board.getKey(1),board.getKey(2)]
        const row2 = [board.getKey(3),board.getKey(4),board.getKey(5)]
        const row3 = [board.getKey(6),board.getKey(7),board.getKey(8)]
        if (row1.every(elem => elem == 'x') || row1.every(elem => elem == 'o')) {
            console.log(row1)
            return true;
        } else if (row2.every(elem => elem == 'x') || row2.every(elem => elem == 'o')){
            console.log(row2)
            return true;
        } else if (row3.every(elem => elem == 'x') || row3.every(elem => elem == 'o')){
            console.log(row3)
            return true;
        } else {
            return false;
        };
    };

    const _checkCol = (board) => { 
        const col1 = [board.getKey(0),board.getKey(3),board.getKey(6)]
        const col2 = [board.getKey(1),board.getKey(4),board.getKey(7)]
        const col3 = [board.getKey(2),board.getKey(5),board.getKey(8)]
        if (col1.every(elem => elem == 'x') || col1.every(elem => elem == 'o')) {
            return true;
        } else if (col2.every(elem => elem == 'x') || col2.every(elem => elem == 'o')){
            return true;
        } else if (col3.every(elem => elem == 'x') || col3.every(elem => elem == 'o')){
            return true;
        } else {
            return false;
        };
    };

    const _checkDia = (board) => { 
        const dia1 = [board.getKey(2),board.getKey(4),board.getKey(6)]
        const dia2 = [board.getKey(3),board.getKey(4),board.getKey(8)]
        if (dia1.every(elem => elem == 'x') || dia1.every(elem => elem == 'o')) {
            return true;
        } else if (dia2.every(elem => elem == 'x') || dia2.every(elem => elem == 'o')){
            return true;
        } else {
            return false;
        };
    };

    const checkWin = (board) => {
        console.log('I am working')
        if (_checkRow(board) || _checkCol(board) || _checkDia(board)) {
            if (_roleX.classList.contains('active')){
                return alert('Player 2 Won!'); // Problem with this is that the role changes immediately after clicking on button, needs a fix
            } else if (_roleO.classList.contains('active')){
                return alert('Player 1 Won!');
            };
        } else {
            return false
        };
    };

    const _init = (() => {
        _player1.setRole();
        for (let i=0; i<9; i++){
            _keys[i].addEventListener("click", function(){
                if (_roleX.classList.contains('active')){
                    gameBoard.setKey(i, _player1);
                    _player1.rmvRole();
                    _player2.setRole();
                    checkWin(gameBoard);
                } else if(_roleO.classList.contains('active')){
                    gameBoard.setKey(i, _player2);
                    _player1.setRole();
                    _player2.rmvRole();
                    checkWin(gameBoard);
                };
            });
        };
    })();

    return {
        checkWin
    }
})();

// // Display logic 
// const displayController = (() => {
//     const _player1 = Player('x');
//     const _player2 = Player('o');
//     const _roleX = document.getElementById('x'); 
//     const _roleO = document.getElementById('o'); 
//     const _keys = document.getElementsByClassName('btn');



//     return {
//     };
// });

// Luke = Player('x');
// Ai = Player('o');
// Luke.setRole();
// Luke.rmvRole();

// gameBoard.setKey(0, Luke)
// gameBoard.setKey(2, Ai)
// gameBoard.setKey(4, Luke)
// gameBoard.setKey(5, Ai)
// gameBoard.setKey(7, Ai)
// gameBoard.setKey(8, Luke)
//displayController()
