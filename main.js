



window.onload = function mkGrid(num) {

    function size() {
        num = prompt("enter a number less than 100");
        return num
       }
    let szValue = size()
    
    for (let i = 0; i < num; i++) {
        const board = document.getElementById("board")
        let div = document.createElement("div")
        div.className = "squares"
        board.appendChild(div)
    }

    
}

const board = document.getElementById("board")
board.addEventListener("mousemove", function mousemove(event) {
    console.log("color should change")
    event.target.style.backgroundColor = "orange"
   
})

