let colorGrid = document.querySelectorAll(".color-grid-block");
let resetBtn = document.querySelector("#reset-btn")

function generateRandomRGBvalue(){
    const max = 256;
    //Gets random float between 0-256
    let rand = Math.random() *max;
    //removed decimal
    return Math.floor(rand);
}

function resetColors (){
    for(let i = 0;i<colorGrid.length;i++){
        colorGrid[i].style.backgroundColor = `rgb(${generateRandomRGBvalue()},${generateRandomRGBvalue()},${generateRandomRGBvalue()})`;

    }
}

resetBtn.addEventListener("click", function(e){
    resetColors();
});

resetColors();