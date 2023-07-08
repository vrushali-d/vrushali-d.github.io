const activeColor = "green";
const passiveColor = "white";

function changeDirection(direction) {
    let containerEl = document.querySelector("#container");
    let buttonEls = document.querySelectorAll(".direction");
    for (let i = 0; i < buttonEls.length; ++i) {
        buttonEls[i].style.backgroundColor = passiveColor;
    }
    let options = ["row", "column", "row-reverse", "column-reverse"];
    containerEl.style.flexDirection = options[direction - 1];
    buttonEls[direction - 1].style.backgroundColor = activeColor;
}
function changePosition(position) {
    let containerEl = document.querySelector("#container");
    let buttonEls = document.querySelectorAll(".hPosition");
    for (let i = 0; i < buttonEls.length; ++i) {
        buttonEls[i].style.backgroundColor = passiveColor;
    }
    let options = ["flex-start", "center", "flex-end", "space-around", "space-between", "space-evenly"];
    containerEl.style.justifyContent = options[position - 1];
    buttonEls[position - 1].style.backgroundColor = activeColor;
}

function chnageVerticalPosition(position) {
    let containerEl = document.querySelector("#container");
    let buttonEls = document.querySelectorAll(".vPosition");
    for (let i = 0; i < buttonEls.length; ++i) {
        buttonEls[i].style.backgroundColor = passiveColor;
    }
    let options = ["flex-start", "center", "flex-end"];
    containerEl.style.alignItems = options[position - 1];
    buttonEls[position - 1].style.backgroundColor = activeColor;
}

changeDirection(1);
changePosition(1);
chnageVerticalPosition(1);