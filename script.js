const display=document.querySelector(".calc-screen")
const btn=document.getElementsByClassName('calc-btn')
const num1=document.querySelector("#one")
const num2=document.querySelector("#two")
const num3=document.querySelector("#three")
const num4=document.querySelector("#four")
const num5=document.querySelector("#five")
const num6=document.querySelector("#six")
const num7=document.querySelector("#seven")
const num8=document.querySelector("#eight")
const num9=document.querySelector("#nine")
const num0=document.querySelector("#zero")
const plus=document.querySelector("#plus")
const minus=document.querySelector("#minus")
const division=document.querySelector("#div")
const multi=document.querySelector("#multi")
const equal=document.querySelector("#equal")
const del=document.querySelector("#del")
const reset=document.querySelector("#reset")
const decimal=document.querySelector("#dot")


const updateCalculation = (num) => {
    if (display.textContent === "0") {
      display.textContent = num;
    } else {
      display.textContent += num;
    }
  };
  const deleteValueFromCalculation = () => {
    if (display.textContent.length === 1) {
      display.textContent = "0";
    } else {
      display.textContent = display.textContent.slice(0, -1);
    }
  };
  num0.addEventListener("click", () => updateCalculation(0));
  num1.addEventListener("click", () => updateCalculation(1));
  num2.addEventListener("click", () => updateCalculation(2));
  num3.addEventListener("click", () => updateCalculation(3));
  num4.addEventListener("click", () => updateCalculation(4));
  num5.addEventListener("click", () => updateCalculation(5));
  num6.addEventListener("click", () => updateCalculation(6));
  num7.addEventListener("click", () => updateCalculation(7));
  num8.addEventListener("click", () => updateCalculation(8));
  num9.addEventListener("click", () => updateCalculation(9));
  plus.addEventListener("click", () => updateCalculation("+"));
  minus.addEventListener("click", () => updateCalculation("-"));
  multi.addEventListener("click", () => updateCalculation("*"));
  division.addEventListener("click", () => updateCalculation("/"));
  decimal.addEventListener("click", () => updateCalculation("."));
  del.addEventListener("click", deleteValueFromCalculation);
  reset.addEventListener("click", () => {
    display.textContent = 0;
  });
  equal.addEventListener("click", () => {
    display.textContent = eval(display.textContent);
  });

//   toggle


const toggle=document.querySelector("#toggle")
const toggleBg=document.querySelector(".toggle-bg")
const circle=document.querySelector("#circle")
const pad=document.querySelector(".pad")
const title=document.querySelector(".title")
var clickCounter=0;
toggle.addEventListener("click",()=>{

  if(clickCounter===0){
    circle.classList.add("circle-theme2")
    circle.classList.remove("circle-theme1")
    var calcBtns = document.querySelectorAll('.calc-btn');
    for (var i = 0; i < calcBtns.length; i++) {
      calcBtns[i].classList.remove('calc-btn-theme1')
        calcBtns[i].classList.add('calc-btn-theme2');}
    
    reset.classList.remove("spcl-btn-theme1")
    reset.classList.add("spcl-btn-theme2")
    equal.classList.remove("equal-theme1")
    equal.classList.add("equal-theme2")
    del.classList.remove("spcl-btn-theme1")
    del.classList.add("spcl-btn-theme2")

    pad.classList.add("pad-theme2")
    pad.classList.remove("pad-theme1")
    display.classList.add("calc-screen-theme2")
    display.classList.remove("calc-screen-theme1")
    title.classList.add("title-theme2")
    title.classList.remove("title-theme1")
    toggleBg.classList.add("toggle-bg-theme2")
    document.body.style.backgroundColor="#ededed"

    clickCounter++;
  } else 

  if(clickCounter===1){
    circle.classList.add("circle-theme3")
    circle.classList.remove("circle-theme2")
    var calcBtns = document.querySelectorAll('.calc-btn');
    for (var i = 0; i < calcBtns.length; i++) {
      calcBtns[i].classList.remove('calc-btn-theme2')
        calcBtns[i].classList.add('calc-btn-theme3');}
    
    reset.classList.remove("spcl-btn-theme2")
    reset.classList.add("spcl-btn-theme3")
    equal.classList.remove("equal-theme2")
    equal.classList.add("equal-theme3")
    del.classList.remove("spcl-btn-theme2s")
    del.classList.add("spcl-btn-theme3")

    pad.classList.add("pad-theme3")
    pad.classList.remove("pad-theme2")
    display.classList.add("calc-screen-theme3")
    display.classList.remove("calc-screen-theme2")
    title.classList.add("title-theme3")
    title.classList.remove("title-theme2")
    toggleBg.classList.remove("toggle-bg-theme2")
    toggleBg.classList.add("toggle-bg-theme3")
    document.body.style.backgroundColor="#160628"

    clickCounter++;
  } else

  if(clickCounter===2){
    circle.classList.add("circle-theme2")
    circle.classList.remove("circle-theme3")
    var calcBtns = document.querySelectorAll('.calc-btn');
    for (var i = 0; i < calcBtns.length; i++) {
      calcBtns[i].classList.remove('calc-btn-theme3')
        calcBtns[i].classList.add('calc-btn-theme2');}
    
    reset.classList.remove("spcl-btn-theme3")
    reset.classList.add("spcl-btn-theme2")
    equal.classList.remove("equal-theme3")
    equal.classList.add("equal-theme2")
    del.classList.remove("spcl-btn-theme3")
    del.classList.add("spcl-btn-theme2")

    pad.classList.add("pad-theme2")
    pad.classList.remove("pad-theme3")
    display.classList.add("calc-screen-theme2")
    display.classList.remove("calc-screen-theme3")
    title.classList.add("title-theme2")
    title.classList.remove("title-theme3")
    toggleBg.classList.add("toggle-bg-theme2")
    toggleBg.classList.remove("toggle-bg-theme3")
    document.body.style.backgroundColor="#ededed"

    clickCounter++;
  } else

  if(clickCounter===3){
    circle.classList.add("circle-theme1")
    circle.classList.remove("circle-theme2")
    var calcBtns = document.querySelectorAll('.calc-btn');
    for (var i = 0; i < calcBtns.length; i++) {
      calcBtns[i].classList.remove('calc-btn-theme2')
        calcBtns[i].classList.add('calc-btn-theme1');}
    
    reset.classList.remove("spcl-btn-theme2")
    reset.classList.add("spcl-btn-theme1")
    equal.classList.remove("equal-theme2")
    equal.classList.add("equal-theme1")
    del.classList.remove("spcl-btn-theme2")
    del.classList.add("spcl-btn-theme1")

    pad.classList.add("pad-theme1")
    pad.classList.remove("pad-theme2")
    display.classList.add("calc-screen-theme1")
    display.classList.remove("calc-screen-theme2")
    title.classList.add("title-theme1")
    title.classList.remove("title-theme2")
    toggleBg.classList.add("toggle-bg-theme1")
    toggleBg.classList.remove("toggle-bg-theme2")
    document.body.style.backgroundColor="#3a4764"

    clickCounter=0;
  }
   
   

})
