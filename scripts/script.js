const gameBoard = (() => {
    // Creating a board with an array of 9 spaces 
    let _board = new Array(9); 
    const keys = document.getElementsByClassName('btn');
    // Connecting elements of the array to the grid button of respectively
    for (let i=0; i<9; i++) {
        _board[i] = keys[i] 
    };
    // Getting the values of the squares of interest 
    const getKey = (index) => _board[index];
    // // Setting values for the squares of interest 
    // const setKey = (index, player) => { 
    //     const btn = document.getElementsByClassname('btn');
    //     btn.addEventListener("click", function() {
    //         _board[index].innerHTML = player.getRole();
    //     });
    // }
    

})();

keys = document.getElementsByClassName('btn');
arr = new Array(9)
console.log(arr)

for (let i=0; i <9; i++) {
    arr[i] = keys[i].innerHTML 
}
console.log(arr)
// console.log(typeof(keys[0]));
// console.log(keys);
// console.log(keys[0].innerHTML);

// // Player factory need some work 
// const Player = (role) => {
//     let _role = role; 
//     const getRole = () => _role; 
//     const setRole = () => (role, active) => {
//         _role = role; 
//         roleX = document.getElementById('x');
//         roleO = document.getElementById('o');
//         roleX.addEventListener("click", function() {
//             if (this.classList.contains("active")) {
//                 this.classList.remove("active");
//                 console.log('removed!')
//             } else {
//                 this.classList.add("active");
//                 roleO.classList.remove("active");
//                 console.log('added!')
//             };
//         });
//         // roleO.addEventListener("click", function() {
//         //     if (this.classList.contains("active")) {
//         //         this.classList.remove("active");
//         //     } else {
//         //         this.classList.add("active");
//         //         roleX.classList.remove("active");
//         //     };
//         // });
//     };
//     return {getRole, setRole};
// };