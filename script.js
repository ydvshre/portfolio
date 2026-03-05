const text = ["Aspiring Software Engineer", "Full Stack Enthusiast", "Problem Solver"];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type(){

currentText = text[i];

if(isDeleting){
j--;
}else{
j++;
}

document.querySelector(".typing").textContent = currentText.substring(0,j);

if(!isDeleting && j === currentText.length){
isDeleting = true;
setTimeout(type,1200);
return;
}

if(isDeleting && j === 0){
isDeleting = false;
i++;
if(i === text.length){
i = 0;
}
}

setTimeout(type,100);

}

type();
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

reveals.forEach((el)=>{

const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}

});

});