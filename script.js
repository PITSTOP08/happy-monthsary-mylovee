document.addEventListener("DOMContentLoaded",()=>{

// TYPING

const text=
"Happy 1st Monthsary mylovee!❤️";

const typing=
document.getElementById("typing");

const letters=[...text];

let i=0;

function typeText(){

if(i<letters.length){

typing.textContent+=letters[i];

i++;

setTimeout(typeText,100);

}

}

typeText();




// BUTTON

document
.getElementById("btn")

.addEventListener(
"click",

()=>{

document
.querySelector(".memories")

.scrollIntoView({

behavior:"smooth"

});

});




// FALLING HEARTS

function createHeart(){

const heart=
document
.createElement("div");

heart.className=
"heart";

heart.innerHTML=
"❤️";

heart.style.left=
Math.random()*100
+"vw";


heart.style.fontSize=
(Math.random()*20+10)
+"px";


heart.style.animationDuration=
(Math.random()*3+2)
+"s";


document.body
.appendChild(heart);


setTimeout(()=>{

heart.remove();

},5000);

}

setInterval(
createHeart,
300
);




// MUSIC

const music=
document.getElementById(
"bgMusic"
);


music.play().catch(()=>{

document
.addEventListener(
"click",

()=>{

music.play();

},

{once:true}

);

});

});


// FINAL BUTTON ACTION

const loveBtn =
document.querySelector(".love-btn");

loveBtn.addEventListener(
"click",

()=>{

alert(
"I love you more every day ❤️"
);

// after OK is clicked
window.location.href = "sunflower.html";

});