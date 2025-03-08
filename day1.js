// console.log("hello");


let rect= document.querySelector("#center");

rect.addEventListener("mousemove",function(details){
  let rectLocn= rect.getBoundingClientRect();
 let insiderect= details.clientX-rectLocn.left;
    

 if (insiderect<rectLocn.width/2) {
    console.log("left");

    let redcolor = gsap.utils.mapRange(0,rectLocn.width/2,255,0,insiderect);
    gsap.to(rect,{
        backgroundColor:`rgb(${redcolor},0,0)`,
        ease:power4
    })
 }
    else{
console.log("right");

    }
    
    
 

})
