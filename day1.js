// console.log("hello");


// let rect= document.querySelector("#center");

// rect.addEventListener("mousemove",function(details){
//   let rectLocn= rect.getBoundingClientRect();
//  let insiderect= details.clientX-rectLocn.left;
    

//  if (insiderect<rectLocn.width/2) {
//     console.log("left");

//     let redcolor = gsap.utils.mapRange(0,rectLocn.width/2,255,0,insiderect);
// gsap.to(rect,{
//     backgrounColor:`rgb${redcolor},0,0`
    
// });
//  }
//     else{
// console.log("right");

//     }
    
    
 

// })


// dom learn what matters

// let h1 =document.querySelector("h1");

// h1.innerHTML="red";

// h1.style.background="red"

// h1.addEventListener("click",function () {
    
//     // h1.innerHTML="me hu h1"
//     h1.style.color="red";
//     h1.style.backgroundColor="yellow";
    
// });



// let bulb=document.querySelector("#bulb");

// let btn = document.querySelector("button");

// let flag=0;



// btn.addEventListener("click",function(){

//     if(flag==0){

//     bulb.style.backgroundColor="yellow";
//     flag=1;
// }
// else{
//     bulb.style.backgroundColor="transparent";
//     flag=0;
// }
// });


let h5=document.querySelector("h5");

let add= document.querySelector("#add");

// let remove=document.querySelector("#remove");

let check=0;




add.addEventListener("click",function(){
    
    if(check==0){
        console.log("huuuuuu");
         h5.innerHTML="Friends"
    h5.style.color="green"
        check=1;
         add.innerHTML="remove Friend"
    }
    else{
        add.innerHTML="add Friend"

        console.log("heeeee");
         h5.innerHTML="Unfriend"
    h5.style.color="red"
        check=0;
    }
   
});

// remove.addEventListener("click",function(){
// h5.innerHTML="Unfriend";
// h5.style.color="red"
// })













