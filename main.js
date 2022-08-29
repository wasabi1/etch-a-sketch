
window.onload = function mkGrid(size) {
    size = 256
    for (let i = 0; i < size; i++) {
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