const canvas = document.querySelector(".canvas");

const gridSide = 16;
const gridItemSize = 600 / gridSide;
console.log(gridItemSize)

function numOfGridItems(gridSide) {
    let numberOfGridItems = gridSide * gridSide;
    return numberOfGridItems; 
};

function createGridItem(gridSide) {
    for (let i = 0; i < numOfGridItems(gridSide); i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.textContent = `${i++}`
        canvas.appendChild(gridItem);
    }
}
createGridItem(gridSide);




