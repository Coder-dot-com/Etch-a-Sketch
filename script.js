gridContainer = document.querySelector("#gridContainer");

let gridSize = 20

let r = document.querySelector(":root");

function setSquareNumber(number) {
    r.style.setProperty("--squareNumber", number);
}



let totalnumberOfSquares = gridSize * gridSize

for (let i = 0; i < totalnumberOfSquares; i++) {
    gridSquare = document.createElement('div');
    gridSquare.className = "gridSquareStyle";
    gridContainer.append(gridSquare);
    setSquareNumber(gridSize);

}