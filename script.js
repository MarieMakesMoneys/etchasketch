const canvas = document.querySelector(".canvas");

const gridSide = 16;

function numOfGridItems(gridSide) {
    let numberOfGridItems = gridSide * gridSide;
    return numberOfGridItems; 
};

function createGridItem(gridSide) {
    for (let i = 1; i <= numOfGridItems(gridSide); i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        canvas.appendChild(gridItem);
    }
}
createGridItem(gridSide);

const cells = document.querySelectorAll(".grid-item");

cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
        console.log("hey")
        e.target.style.background = "red";
    });
});