// console.log("hello");


// let color="green";
// if (color=="red"){
//     console.log("stop");
// }
//     if (color=="yellow"){
//         console.log("slow down");
//     }
//         if (color=="green"){
//             console.log("move");
            
    
// }


// let size="r";

// if (size=="XL"){
//     console.log("price is 250");
// }

// else if(size =="L"){
//     console.log("price is 200");
// }

// else if (size=="M"){

//     console.log("price is 150");
// }
    
// else{
//     console.log("small price is 100");
    
// }
    


// let day =10;

// switch(day){
//     case 1:
//         console.log("monday");
//         break;

//         case 2:
//             console.log("tuesday");
//             break;
        
//             case 3:
//                 console.log("wednesday");
//                 break;

//                 case 4:
//                     console.log("thursday");
//                     break;
        
                    
//                     case 5:
//                         console.log("friday");
//                         break;
        
                        
//                         case 6:
//                             console.log("saturday");
//                             break;
        
//                             default:
//                                 console.log("sunday");
                               
                                
                
// }



// let num=42;

// if(num%10==0){
//     console.log("good");
    
// }

// else{
//     console.log("bad");
    
// }



// let name1=prompt("Enter a user name");
// let age=prompt("Enter the age of the user")

// alert(`name is:${name1}" "age is:${age}`);


// let months=10;

// switch(months){
//     case 1:
//         console.log("january, february, march");
//         break;

//         case 2:
//             console.log("april, may, june");
//             break;

//             case 3:
//                 console.log("july, aug, sep");
//                 break;

//                 case 4:
//                     console.log("oct, nov, dec");
//                     break;

//                     default:
//                         console.log("invalid");
    

// }




// let str="rapple";

// if(str[0]==="a"||"A" && str.length===5){
//     console.log("golden string");
    
// }

// else{
//     console.log("not a golden string");
    
// }


// let a=10;
// let b=20;
// let c=30;

// let colors=["red","green","yellow","pinlk"]

// console.log(colors.splice(1,1));


// let arry=[7,9,0,-2];
// let n=3;

// // console.log(arry.slice(-1));

// let ans=console.log(arry.slice(0,n));
// console.log(ans);


// let arr=[7,9,0,-2];
// let n1=3;
// let ans1=console.log(arr.slice(arr.length-n1));
// console.log(ans1);


// let string="";

// if(string.length==0){
//     console.log("string is empty");
    
// }

// else{
//     console.log("not empty");
    
// }


// let str="aMaMa";

// inx=2;

// if(str[inx]==str[inx].toLowerCase())
// {

//     console.log("Charecter is lowercase");
    
// }

// else{

//     console.log("charecter is not lowercase");
    
// }


// let str1="  ram   ";

// console.log(`normal string ${str1}`);
// console.log(`trimmed string ${str1.trim()}`);



// let arr=["ram","rajath",34,55,"raman"];

// let val="jaanu";

// if(arr.indexOf(val)!=-1){
//     console.log("item exists");
    
// }

// else{
//     console.log("not existes");
    
// }


// for(let i=2;i<15;i=i+2){
//     console.log(i);
    
// }

// for(let i=10;i>=1;i--){
//     console.log(i);
    
// }


// for(let i=5;i<=50;i=i+5){
//     console.log(i);
// }


// let num=prompt("Enter a number");
// num=parseInt(num);

// for(let i=num;i<=num*10;i=i+num){
//     console.log(i);
    
// }


// let i=1;

// while(i<=10){
//     console.log(i);
//     i++
    
// }



// let favmovie="avathar";

// guess=prompt("Enter a movie name");

// if(guess==""){
//     console.log("wrong enter again");
    
// }

//  if(guess==favmovie){
//     console.log("hurey you have gusssed the movie");
    
// }

//  if(guess!==favmovie){
//     console.log("you have a chance try again !");
    
// }




// const favmovie="Bhahubali";

// guesss=prompt("Enter a  movie name");

// while (guesss!==favmovie && guesss!=="quit") {
   
//     guesss=prompt("Wrong guess! plese try again");
    
// }

// if (guesss==favmovie) {
//     console.log("Hurrey !!  you have guessed the movie name");
    
// }

// else{
//     console.log("you quit the game");
    
// }


console.log("To Do APP");



let todo=[];

let req=prompt("plesse enter your request");

while (true) {
    
 if (req=="quit") {
        console.log("exiting");
        break; 
    }   

    if(req=="list"){
        console.log("===========");
        for (let i = 0; i< todo.length; i++) {
            console.log(i,todo[i]);  
        }
        console.log("===========");
        
    }

    else if(req=="add"){
        let task=prompt("Enter the task you want to add");
        todo.push(task);
console.log("task added suscessfully !");

    }
    else if(req=="delete"){
let idx=prompt("Enter the task index");
todo.splice(idx,1);
console.log("task deleted");

    }

    else{
        console.log("invalid choice");
        
    }

    req=prompt("plese enter your request");
    }
    




