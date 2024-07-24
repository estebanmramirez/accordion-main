/* primer párafo*/

const info = document.getElementById("info");
const expand = document.getElementById("expand");
const button = document.getElementById("btn");
const logos = document.getElementsByClassName("container__info--img");
let logo1 = 'images/icon-plus.svg';
let logo2 = 'images/icon-minus.svg';

function toggleLogo(logo) {
    if (logo.src.includes(logo1)) {
        logo.src = logo2;
    } else {
        logo.src = logo1;
    }
};

for (let logo of logos) {
    logo.addEventListener("click", function() {
        toggleLogo(logo);
    });
};


button.addEventListener("click", function (){
   if (expand.style.display === "block") {
    expand.style.display = "none";
   } else {
    expand.style.display = "block";
   }
});


info.addEventListener("click", function() {
    if (expand.style.display === "block") {
        expand.style.display = "none";
    } else {
    expand.style.display = "block"; 
    }
});


/* segundo párafo*/

const info1 = document.getElementById("info1");
const expand1 = document.getElementById("expand1");
const button1 = document.getElementById("btn1");

info1.addEventListener("click", function() {
    if (expand1.style.display === "block") {
        expand1.style.display = "none";
    } else {
     expand1.style.display = "block";
    }
});

button1.addEventListener("click", function (){
   if( expand1.style.display === "block") {
    expand1.style.display = "none";
    } else {
     expand1.style.display = "block";
   }
});

/* tercer párafo*/

const info2 = document.getElementById("info2");
const expand2 = document.getElementById("expand2");
const button2 = document.getElementById("btn2");

info2.addEventListener("click", function() {
    if (expand2.style.display === "block") {
        expand2.style.display = "none";
    } else {
     expand2.style.display = "block";
    }
});

button2.addEventListener("click", function (){
    if(expand2.style.display === "block") {
        expand2.style.display = "none";
    } else {
     expand2.style.display = "block";
    }
});

/*cuarto párafo*/

const info3 = document.getElementById("info3"); /* capturando el elemento en un constante*/
const expand3 = document.getElementById("expand3");
const button3 = document.getElementById("btn3");

info3.addEventListener("click", function() {  /* funcion que despliega el texto cada vez que se hace click*/
    if (expand3.style.display === "block") {
        expand3.style.display = "none";
    } else {
        expand3.style.display = "block";
    }
});

button3.addEventListener("click", function (){
    if(expand3.style.display === "block") {
        expand3.style.display = "none";
    } else {
        expand3.style.display = "block";
    }
});







