const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const timeDiv = document.querySelector(".time-container");
let currentTheme = "dark";
let isRGB = "off";
let isRed = "off";

setClock();
document.documentElement.setAttribute("rgb", "off");
setInterval(setClock, 1000);

function setClock(){
    const date = new Date();
    let secondAngle = date.getSeconds();
    let minuteAngle = date.getMinutes();
    let hourAngle = date.getHours();
    secondHand.setAttribute("style",`transform:rotate(${secondAngle*6}deg);`);
    minuteHand.setAttribute("style",`transform:rotate(${minuteAngle*6 + secondAngle/10}deg);`);
    hourHand.setAttribute("style",`transform:rotate(${hourAngle*30 + minuteAngle/10}deg);`);
    document.title = `${hourAngle.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })} : ${minuteAngle.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })} : ${(secondAngle).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })}`;
}

document.querySelector('.theme-toggle').addEventListener('click', ()=>{
    if(currentTheme!="light"){
        document.documentElement.setAttribute("color-theme", "light");
        currentTheme = "light";
        document.querySelector('.theme-toggle').classList.add('off');
    }
    else{
        document.documentElement.setAttribute("color-theme", null);
        document.querySelector('.theme-toggle').classList.remove('off');
        currentTheme = "dark";
    }
})
document.querySelector('.theme-toggle.rgb').addEventListener('click', ()=>{
    if(isRGB=="off"){
        document.documentElement.setAttribute("rgb", "all-color");
        isRGB = "on";
        document.querySelector('.theme-toggle.rgb').classList.add("off");
        document.querySelector(".menu-wrapper:nth-child(3)").setAttribute("style", "display:block;");
    }
    else{
        document.documentElement.setAttribute("rgb", "off");
        document.querySelector('.theme-toggle.rgb').classList.remove('off');
        isRGB = "off";
        document.querySelector(".menu-wrapper:nth-child(3)").setAttribute("style", "display:none;");
    }
})
document.querySelector('.theme-toggle.red').addEventListener('click', ()=>{
    if(isRed=="off"){
        document.documentElement.setAttribute("red", "on");
        isRed = "on";
        document.querySelector('.theme-toggle.red').classList.add("off");
    }
    else{
        document.documentElement.setAttribute("red", "off");
        document.querySelector('.theme-toggle.red').classList.remove('off');
        isRed = "off";
    }
})

const colorOptions = ["all-color", "green-color", "purple-color", "pink-color"];
for(i=0; i<4; i++){
    let currentColor = colorOptions[i];
    document.querySelector(`.color-box.${currentColor}`).addEventListener("click", ()=>{
        document.documentElement.setAttribute("rgb", currentColor);
        document.querySelectorAll(".color-box").forEach((colorBox)=>{
            console.log(colorBox.classList.contains(currentColor));
            if(colorBox.classList.contains(currentColor)){
                colorBox.classList.add("active");
                console.log(colorBox);
            }else{
                colorBox.classList.remove("active");
            }
        })
    })
}