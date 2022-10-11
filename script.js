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

let color = "#ff9a56";

function colorHoveredCells(color) {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("dragover", (e) => {
            e.target.style.background = color;
        });
    });
};
colorHoveredCells(color);



eraserBtn.addEventListener("click", () => {
    color = "white";
    colorHoveredCells(color);
});

const colorOptions = ["#d52d00", "#ff9a56", "#a30262", "#d362a4", "#ffddf0"];

multiBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("dragover", (e) => {
            e.target.style.background = colorOptions[Math.floor(Math.random() * 5)];;
        });
    });
});

colorBtn.addEventListener("click", () => {
    color = "#ff9a56";
    colorHoveredCells(color);
});

clearBtn.addEventListener ("click", () => {
    window.location.reload(true);
});