//updated version that works
const colorGrid = document.querySelectorAll(".color-grid-block");
const resetBtn = document.querySelector("#reset-btn");
const rgbTextValue = document.querySelector('#rgb-value')

function generateRandomRGBvalue(){
    const max = 256;
    //Gets random float between 0-256
    let rand = Math.random() *max;
    //removed decimal
    return Math.floor(rand);
}
/*generates a number between 0-8 in order to choose
which box is the right color*/
function generateCorrectColorIndex(){
    return Math.floor(Math.random()*colorGrid.length)

}

function resetColors (){
    for(let i = 0;i<colorGrid.length;i++){
        colorGrid[i].style.backgroundColor = `rgb(${generateRandomRGBvalue()},${generateRandomRGBvalue()},${generateRandomRGBvalue()})`;
        
        
        //rgbTextValue.innerHTML = `rgb${colorGrid[generateRandomRGBvalue]}`
    }
    const correntColorIndex = generateCorrectColorIndex();
    const correntRGBvalue = colorGrid[correntColorIndex].style.backgroundColor;
    console.log(correntColorIndex+1);
    rgbTextValue.innerHTML = correntRGBvalue;
}

resetBtn.addEventListener("click", event => {
    resetColors();
});

colorGrid.forEach(block =>{
    block.addEventListener('click', event =>{
        console.log(colorGrid.length);
        // if(colorGrid.indexOf(block) = correntColorIndex ){
        //     console.log('thats the right block!')
        // }
    })
})

resetColors();