const canvas = document.querySelector(".canvas");

const gridSide = Number(prompt("How many cells in a row ?", "16"));

function createCell(gridSide) {
    if (gridSide > 100) {
        gridSide = 100;
        for (let i = 1; i <= gridSide; i++) {
            const column = document.createElement('div');
            column.classList.add('column');
            for (let i = 1; i <= gridSide; i++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                column.appendChild(cell);
            }
            canvas.appendChild(column);
        }
    } else {
        for (let i = 1; i <= gridSide; i++) {
            const column = document.createElement('div');
            column.classList.add('column');
            for (let i = 1; i <= gridSide; i++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                column.appendChild(cell);
            }
            canvas.appendChild(column);
        }
    }
}
createCell(gridSide);

const opacityBtn = document.querySelector("button.opacity");
const eraserBtn = document.querySelector("button.eraser");
const multiBtn = document.querySelector("button.multi");
const colorBtn = document.querySelector("button.color");
const clearBtn = document.querySelector("button.clear");


const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("dragover", (e) => {
        e.target.style.background = "#ff9a56";
    });
});

clearBtn.addEventListener ("click", () => {
    window.location.reload(true);
});