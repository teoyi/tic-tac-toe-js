const gameBoard = (() => {
    // Creating a board with an array of 9 spaces 
    let _board = new Array(9); 
    const _keys = document.getElementsByClassName('btn');
  

    // Connecting elements of the array to the grid button value
    for (let i=0; i<9; i++) {
        _board[i] = _keys[i].innerHTML 
    };

    // Getting the values of the squares of interest 
    const getKey = (index) => {
        _board[index];
        console.log(_board[index]);
    };
    // Setting values for the squares of interest 
    const setKey = (index, player) => { 
        if (_board[index]) {
            alert('This position is already taken. Try again!');
        } else {
            // Update array for square of interest 
        _board[index] = player //For now, player will be manually palced for a role
        //_board[index] = player.getRole(); // .getRole() will be added to determine player's decision on 'x' or 'o'
        _keys[index].innerHTML = _board[index] //Replacing button's html with the correct 'x' or 'o'
        } 
    }

    const bind = () => {
        let player = 'x';
        for (let i=0; i<9; i++) {
            _keys[i].addEventListener('click', function(){
                
            })
        }
    }

    const clear = () => {
        for (let i=0; i<_board.length; i++){
            _board[i] = '';
            _keys[i].innerHTML = '';
        }
    }
    
    return{ 
        getKey,
        setKey,
        clear
    };

})();


// gameBoard.setKey(8, 'x')


// keys = document.getElementsByClassName('btn');
// arr = new Array(9)
// console.log(arr)
// for (let i=0; i <9; i++) {
//     arr[i] = keys[i].innerHTML 
// }
// console.log(arr)

// keys[0].innerHTML = 'o';
// arr[0] = keys[0].innerHTML;
// console.log(arr)

// keys[1].innerHTML = 'x';
// arr[1] = keys[1].innerHTML;
// console.log(arr)

// let roleX = document.getElementById('x');
// roleX.classList.add("active");
// Player factory need some work 
const Player = (role) => {
    let _role = role; 
    let docRole = document.getElementById(_role);

    const initRole = (role) => {
        _role = role;
        if (_role == 'x') {
            roleO.classList.remove("active");
            roleX.classList.add("active");
        } else {
            roleX.classList.remove("active");
            roleO.classList.add("active");
        }
    }
    const getRole = () => _role; 
    const setRole = () => {
        if (!docRole.classList.contains('active')){
            docRole.classList.add('active');
        };
    };

    return {
        getRole,
        setRole,
        initRole
    };
};

Luke = Player('x');
Luke.setRole();

gameBoard.setKey(0, 'x')
gameBoard.setKey(2, 'o')
gameBoard.setKey(4, 'x')
gameBoard.setKey(5, 'x')
gameBoard.setKey(7, 'x')
gameBoard.setKey(8, 'o')
