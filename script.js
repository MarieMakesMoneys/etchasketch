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


const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    cell.addEventListener("dragover", (e) => {
        e.target.style.background = "red";
    });
});