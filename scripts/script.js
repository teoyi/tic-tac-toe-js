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
        _board[index];
        console.log(_board[index]);
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
    
    const checkRow = (board) => { 
        let row1 = [board.getKey(0),board.getKey(1),board.getKey(2)]
        let row2 = [board.getKey(3),board.getKey(4),board.getKey(5)]
        let row3 = [board.getKey(6),board.getKey(7),board.getKey(8)]
        if (row1.every(elem => elem == 'x') || row1.every(elem => elem == 'o')) {
            return true;
        } else if (row2.every(elem => elem == 'x') || row2.every(elem => elem == 'o')){
            return true;
        } else if (row3.every(elem => elem == 'x') || row3.every(elem => elem == 'o')){
            return true;
        } else {
            return false;
        };
    };

    const checkWin = (board) => {
        if (checkRow(board)) {
            alert('yes');
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
        checkRow,
        checkWin,
    }
})();

// Display logic 
// const displayController = (() => {
//     const _roleX = document.getElementById('x'); 
//     const _roleO = document.getElementById('o'); 
//     const _keys = document.getEleme#ntsByClassName('btn');

//     const _init = (() => {
//         for (let i=0; i<9; i++){
//             _keys[i].addEventListener("click", function(){
//                 if (_roleX.classList.contains('active')){
//                     gameBoard.setKey(i, _player1);
//                 } else if(_roleO.classList.contains('active')){
//                     gameBoard.setKey(i, _player2);
//                 };
//             });
//         };
//     })();
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
