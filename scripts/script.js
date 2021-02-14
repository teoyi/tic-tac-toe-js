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
        // Update array for square of interest 
        _board[index] = player //For now, player will be manually palced for a role
        //_board[index] = player.getRole(); // .getRole() will be added to determine player's decision on 'x' or 'o'
        _keys[index].innerHTML = _board[index] //Replacing button's html with the correct 'x' or 'o'
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

gameBoard.setKey(0, 'x')
gameBoard.setKey(2, 'o')
gameBoard.setKey(4, 'x')
gameBoard.setKey(5, 'x')
gameBoard.setKey(7, 'x')
gameBoard.setKey(8, '0')


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


// Player factory need some work 
const Player = (role) => {
    let _role = role; 
    const getRole = () => _role; 
    const setRole = () => (role, active) => {
        _role = role; 
        roleX = document.getElementById('x');
        roleO = document.getElementById('o');
        roleX.addEventListener("click", function() {
            if (this.classList.contains("active")) {
                this.classList.remove("active");
                console.log('removed!')
            } else {
                this.classList.add("active");
                roleO.classList.remove("active");
                console.log('added!')
            };
        });
        // roleO.addEventListener("click", function() {
        //     if (this.classList.contains("active")) {
        //         this.classList.remove("active");
        //     } else {
        //         this.classList.add("active");
        //         roleX.classList.remove("active");
        //     };
        // });
    };
    return {
        getRole,
        setRole
    };
};