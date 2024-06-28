
let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let turnVariable = false;
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if (turnVariable === false) {
            turnVariable = true;
            box.innerHTML = "X";
        } else {
            turnVariable = false;
            box.innerHTML = "0";
        }
        box.disabled = true;

        checkWinner();  //This function check whether any pattern matches or not

        if (count === 9) {  //This function check whether game is drawn or not
            drawCondition();
        }
    });
})

resetBtn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerHTML = "";
        box.classList.remove("opacity-75");
    })
    document.getElementById("result").innerText = "NEW GAME";
    resetBtn.innerHTML = "Reset";
    count = 0;
})

const disabledBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
        box.classList.add("opacity-75");
        resetBtn.innerHTML = "Start New Game";
    })
}

const drawCondition = () => {
    boxes.forEach((box) => {
        box.disabled = true;
        box.classList.add("opacity-75");
        resetBtn.innerHTML = "Start New Game";
        document.getElementById("result").innerHTML = "Game is Draw 😕";
    })
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != '' && pos2Val != '' && pos3Val != '') {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                let winText = "Winner is : " + pos1Val;
                document.getElementById("result").innerHTML = winText;
                disabledBoxes();
            }
        }
    }
}
