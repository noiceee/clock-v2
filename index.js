const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const timeDiv = document.querySelector(".time-container");

let currentTheme =  window.localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("color-theme", currentTheme);
if(currentTheme == "light"){
    document.querySelector('.theme-toggle').classList.add('off');
}

let isRGB = window.localStorage.getItem("rgb") || "green-color";
document.documentElement.setAttribute("rgb", isRGB);
if(isRGB == "off"){
    document.querySelector('.theme-toggle.rgb').classList.remove("off");
    document.querySelector(".menu-wrapper:nth-child(3)").setAttribute("style", "display:none;");
}else{
    let animationSpeed = window.localStorage.getItem("animation-speed") || 16;
    document.querySelector(".inner-border").setAttribute("style", `animation: rgb-animation ${animationSpeed}s linear infinite`);
}
document.querySelectorAll(".color-box").forEach((colorBox)=>{
    if(colorBox.classList.contains(isRGB)){
        colorBox.classList.add("active");
    }else{
        colorBox.classList.remove("active");
    }
})

let isRed = window.localStorage.getItem("red") || "off";
document.documentElement.setAttribute("red", isRed);
if(isRed == "on"){
    document.querySelector('.theme-toggle.red').classList.add("off");
}

let showLabel = window.localStorage.getItem("showLabel") || "false";
document.documentElement.setAttribute("show-label", showLabel);
if(showLabel == "true"){
    document.querySelector('.theme-toggle.rgb').classList.remove('off');
}

setClock();

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

function setTheme(){
    if(currentTheme!="dark"){
        document.documentElement.setAttribute("color-theme", null);
        document.querySelector('.theme-toggle').classList.remove('off');
        currentTheme = "dark";
        window.localStorage.setItem("theme", "dark");
    }
    else{
        document.documentElement.setAttribute("color-theme", "light");
        currentTheme = "light";
        document.querySelector('.theme-toggle').classList.add('off');
        window.localStorage.setItem("theme", "light");
    }
}
function setRGB(){
    if(isRGB=="off"){
        document.documentElement.setAttribute("rgb", "all-color");
        isRGB = "all-color";
        window.localStorage.setItem("rgb", isRGB);
        document.querySelector('.theme-toggle.rgb').classList.add("off");
        document.querySelector(".menu-wrapper:nth-child(3)").setAttribute("style", "display:block;");
    }
    else{
        document.documentElement.setAttribute("rgb", "off");
        document.querySelector('.theme-toggle.rgb').classList.remove('off');
        isRGB = "off";
        window.localStorage.setItem("rgb", isRGB);
        document.querySelector(".menu-wrapper:nth-child(3)").setAttribute("style", "display:none;");
    }
}
function setRED(){
    if(isRed=="off"){
        document.documentElement.setAttribute("red", "on");
        isRed = "on";
        window.localStorage.setItem("red", isRed);
        document.documentElement.setAttribute("red", isRed);
        document.querySelector('.theme-toggle.red').classList.add("off");
    }
    else{
        document.documentElement.setAttribute("red", "off");
        document.querySelector('.theme-toggle.red').classList.remove('off');
        isRed = "off";
        window.localStorage.setItem("red", isRed);
        document.documentElement.setAttribute("red", isRed);
    }
}
function setLabel(){
    if(showLabel=="false"){
        document.documentElement.setAttribute("show-label", "true");
        showLabel = "true";
        window.localStorage.setItem("showLabel", showLabel);
        document.querySelector('.theme-toggle.label').classList.add("off");
    }
    else{
        document.documentElement.setAttribute("show-label", "false");
        document.querySelector('.theme-toggle.label').classList.remove('off');
        showLabel = "false";
        window.localStorage.setItem("showLabel", showLabel);
    }
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme);
document.querySelector('.theme-toggle.rgb').addEventListener('click', setRGB);
document.querySelector('.theme-toggle.red').addEventListener('click', setRED);
document.querySelector('.theme-toggle.label').addEventListener('click', setLabel);

const colorOptions = ["all-color", "green-color", "purple-color", "pink-color"];
for(i=0; i<4; i++){
    let currentColor = colorOptions[i];
    document.querySelector(`.color-box.${currentColor}`).addEventListener("click", ()=>{
        document.documentElement.setAttribute("rgb", currentColor);
        window.localStorage.setItem("rgb", currentColor);
        document.querySelectorAll(".color-box").forEach((colorBox)=>{
            if(colorBox.classList.contains(currentColor)){
                colorBox.classList.add("active");
            }else{
                colorBox.classList.remove("active");
            }
        })
    })
}

document.querySelector(".speed-slider input").addEventListener('input', (e)=>{
    document.querySelector(".inner-border").setAttribute("style", `animation: rgb-animation ${e.currentTarget.value/20}s linear infinite`);
    window.localStorage.setItem("animation-speed", e.currentTarget.value/20);
})

document.querySelector(".github").addEventListener('click', ()=>{
    window.location.href = "http://github.com/noiceee";
})
document.querySelector(".linkedin").addEventListener('click', ()=>{
    window.location.href = "https://in.linkedin.com/in/kartikey69";
})
document.querySelector(".codechef").addEventListener('click', ()=>{
    window.location.href = "https://www.codechef.com/users/noicee";
})