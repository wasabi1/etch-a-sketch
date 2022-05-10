
window.onload = function mkGrid(size) {
    size = prompt('enter size')
    for (let i = 0; i < size; i++) {
        const board = document.getElementById("board")
        const div = document.createElement("div")
        div.className = "squares"
        board.appendChild(div)
    }
}


