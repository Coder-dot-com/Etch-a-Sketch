gridContainer = document.querySelector("#gridContainer");

//Grid Size Selector

let gridSizeSelector = document.querySelector("#gridSizeSelector");



gridSizeSelector.oninput = function() {
     gridSize = parseFloat(gridSizeSelector.value);
     gridSizeDisplay.textContent = parseFloat(gridSizeSelector.value) + " x " + parseFloat(gridSizeSelector.value)
     createGrid (gridSize);
}


let root = document.querySelector(":root");


//Grid

function setSquareNumber(number) {
    root.style.setProperty("--squareNumber", number);
}

function removeSquares () { 
    let allSquares = document.querySelectorAll(".gridSquareStyle")
    allSquares.forEach(square => square.remove());
}

//Grid creator

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

createGrid(10);


//User color selector

let colorInput = document.querySelector("#selectColor")

colorInput.addEventListener('change', changeColor)



// Rainbow/random color generator

const hexValuesList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
function randomHexGen () {
    randomHex = "#"
    for (let i = 0; i < 6; i++) {
        randomHex += hexValuesList[(Math.floor((Math.random())*16))]
    }
    return randomHex
}

rainbowButton = document.querySelector("#toggleRainbow");
rainbowButton.addEventListener('click', rainbow);

function rainbow () {
    rainbowButton.classList.toggle("rainbowOn")

}


// Adds color to square

let colorToAdd = "black" // default color

function changeColor () {
    colorToAdd = String(colorInput.value);
}


function addColorInClass(e) {
    if (rainbowButton.classList.contains("rainbowOn")) { //checks if rainbow toggled on//
        e.target.style.backgroundColor = randomHexGen()

    } else {e.target.style.backgroundColor = colorToAdd ;
}}


// Reset Button


resetButton = document.querySelector("#reset");

resetButton.addEventListener('click', colorReset)


function colorReset() {
    let allSquares = document.querySelectorAll(".gridSquareStyle")
    allSquares.forEach(square => square.style.backgroundColor = "#ffffff");
    createGrid(16);

}

// Grid Size Selector

gridSizeDisplay = document.querySelector("#gridSizeDisplay")

console.log(gridSizeDisplay)
