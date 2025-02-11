console.log("HEllo");

// let para1=document.createElement('P');
// undefined
// para1.innerText="hey i am red";

// document.querySelector("body").append(para1);

// para1.classList.add("red");

 
// let h3=document.createElement('h3');
// undefined
// h3.innerText="hey i am blue";

// document.querySelector("body").append(h3);

// h3.classList.add("blue");


// let div= document.createElement("div");

// let h1= document.createElement("h1");

// let para2 = document.createElement("p");

// h1.innerText ="i am a div!!";

// para2.innerText="Mee Too!";

// div.append(h1);
// div.append(para2);

// div.classList.add("box");


// document.querySelector("body").append(div);


// let button = document.createElement("button");

// button.innerText=("click me")

// document.querySelector("body").append(button);


// let button = document.querySelector("button");

// button.setAttribute("button","btn");



// let btn =  document.querySelector("button");

// btn.addEventListener("click",function(){
//     let h3= document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText= randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor= randomColor;

//     console.log("Color Updated");
    
// });


//     function getRandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);


//     let Color = `rgb(${red},${green},${blue})`;
//     return Color;
// }

// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("paragraf was cliked");
    
// })



// let div = document.querySelector(".box");

// div.addEventListener("mouseenter",function(){
//     console.log("Mouse entered");
    
// })



  
// let btn = document.querySelector("button");

// btn.addEventListener("keydown",function(){
//     console.log("button was clicked");
    
// })


let inp= document.querySelector("input");


inp.addEventListener("keyup",function(event){
    console.log(event);
    // console.log(`key: ${event.key}`);
    console.log(`code: ${event.code}`);
    
    // console.log("key was pressed");


    if (event.code=="Arrowup") {
        console.log("Charecter mooving forward");
        
    }else if (event.code=="ArrowDown") {
        console.log("Charecter mooving backwaed");
        
    }else if (event.code=="ArrowLeft") {
        console.log("Charecter mooving left");
        
    }else if (event.code=="ArrowRight") {
        console.log("Charecter mooving right");
        
    }
    
});



 









