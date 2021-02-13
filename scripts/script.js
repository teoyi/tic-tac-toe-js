const gameBoard = (() => {
    let _board = new Array(9); 
})

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
    return {getRole, setRole};
};