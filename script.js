gridContainer = document.querySelector("#gridContainer");

let gridSizeSelector = document.querySelector("#gridSizeSelector");



gridSizeSelector.oninput = function() {
     gridSize = parseFloat(gridSizeSelector.value);
     createGrid (gridSize);
}


let colorToAdd = "black"
let root = document.querySelector(":root");





function setSquareNumber(number) {
    root.style.setProperty("--squareNumber", number);
}

function removeSquares () {
    let allSquares = document.querySelectorAll(".gridSquareStyle")
    allSquares.forEach(square => square.remove());
}


function createGrid (gridSize) {
    let gridTotalArea = gridSize * gridSize;
    removeSquares();
    setSquareNumber(gridSize);
    for (let i = 0; i < gridTotalArea; i++) {
    gridSquare = document.createElement('div');
    gridSquare.className = "gridSquareStyle";
    gridSquare.addEventListener('mouseover', addColorInClass);
    gridContainer.append(gridSquare);

}
}

createGrid(16);

// random color generator

const hexValuesList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
function randomHexGen () {
    randomHex = "#"
    for (let i = 0; i < 6; i++) {
        randomHex += hexValuesList[(Math.floor((Math.random())*16))]
    }
    return randomHex
}




function addColorInClass(e) {
    e.target.style.backgroundColor = colorToAdd ;
}


// Reset Button


resetButton = document.querySelector("#reset");

resetButton.addEventListener('click', colorReset)


function colorReset() {
    let allSquares = document.querySelectorAll(".gridSquareStyle")
    allSquares.forEach(square => square.style.backgroundColor = "#ffffff");

}

// Grid Size Selector

