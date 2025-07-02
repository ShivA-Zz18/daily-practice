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


// console.log("To Do APP");





// let todo=[];

// let req=prompt("plesse enter your request");

// while (true) {
    
//  if (req=="quit") {
//         console.log("exiting");
//         break; 
//     }   

//     if(req=="list"){
//         console.log("===========");
//         for (let i = 0; i< todo.length; i++) {
//             console.log(i,todo[i]);  
//         }
//         console.log("===========");
        
//     }

//     else if(req=="add"){
//         let task=prompt("Enter the task you want to add");
//         todo.push(task);
// console.log("task added suscessfully !");

//     }
//     else if(req=="delete"){
// let idx=prompt("Enter the task index");
// todo.splice(idx,1);
// console.log("task deleted");

//     }

//     else{
//         console.log("invalid choice");
        
//     }

//     req=prompt("plese enter your request");
//     }


    
// let todo = [];

// while (true) {
//   let req = prompt("Please enter your request");

//   switch (req) {
//     case "quit":
//       console.log("Exiting");
//       break;

//     case "list":
//       console.log("===========");
//       for (let i = 0; i < todo.length; i++) {
//         console.log(`${i}: ${todo[i]}`);
//       }
//       console.log("===========");
//       break;

//     case "add":
//       let task = prompt("Enter the task you want to add");
//       todo.push(task);
//       console.log("Task added successfully!");
//       break;

//     case "delete":
//       let idx = prompt("Enter the task index");
//       todo.splice(idx, 1);
//       console.log("Task deleted");
//       break;

//     default:
//       console.log("Invalid choice");
//   }
// }





// let array=[1,2,3,4,5,6,2,3];

// let num=3;

// for (let i = 0; i < array.length; i++) {
//     if ( array[i]==num) {

//         array.splice(i,1);
//     }
    

    
// }
// console.log(array);



// let number=256789;

// let count=0;

// let copy=number;

// while (copy>0) {
//     count++;

//     copy=Math.floor(copy/10);
    
// }

// console.log(count);


// let num=123456;

// let sum=0;

// let copy=Num;

// while (copy>0) {
//     digit=copy%10;
//     sum+=digit;
//     copy=Math.floor(copy/10);
    
// }

// console.log(sum);


// let n=10;
// let fact=1;

// for(let i=1;i<=n;i++){
//     fact *=i;

// }
// console.log(`factorial of ${n} is ${fact}`);



// let arr=[2,4,6,8,10,3,4,5];

// let largest=0;

// for(let i=0;i<=arr.length;i++){
//     if(largest<arr[i]){
//         largest=arr[i];
//     }
// }

// console.log(largest);







// console.log( Math.floor(Math.random()*100)+1);

// console.log( Math.floor(Math.random()*5)+1);



// let max = prompt("Enter a max number");

// let random = Math.floor(Math.random()*max)+1;
// console.log(random);

 
// let guess=prompt("Enter a random number");


// while (true) {
   
//     if (guess == random) {
//       console.log("You have guessed the random number number was:",random);
//         break;
//     }

//      if (guess=="quit") {
//         console.log("Quitting the game......!");
//         break;
//      }

//      else if(guess<random){
//        guess= prompt("Hint: your guess was too samll plese try again! "); 
//      }
//      else{
//         guess=prompt(" Hint: your guess was too large! plese try again")
//      }
  
// }


// let max =prompt("Enter a max number");

// let random=Math.floor(Math.random()*max)+1;

// // console.log(random);

// while (true) {

//   let guess=prompt(`Enter a random number`);

//   switch (true) {
//     case guess==random:console.log(`you have guessed the random number congrats! random number is: ${random}`);
//       break;

//       case guess=="quit":console.log("Quitting the gane");
//       break;

//       case guess<random:console.log("Hint:your guess is too samll plese try again!");
//       break;

//       case guess>random:console.log("Hint:your guess is too large plese try again!");
//       break;

  
//     default:console.log("invalid input Enter a number or a quit to exit");
    
//   }

//   if (guess=="quit"|| guess==random) {
//     break;
    
//   }
  
// }


// let max=prompt("Enter a maximum number");

// let random=Math.floor(Math.random()*max)+1;

// console.log(random);


// while (true) {
//  let guess=prompt("Guess the random number");

//   switch (true) {
//     case guess=="quit":console.log("Quitting the game");
//       break;

//       case guess==random:console.log(`you have guessed the random number congrats!  random number is:   ${random} `);
//       break;

   
//   }

//   if (guess=="quit"|| guess==random) {
//         break;
        
//       }
  
// }




// let secret =Math.floor(Math.random()*100)+1;
// // console.log(secret);


// let guess;
// let attempt=0;


// while (guess!==secret) {
//    guess =parseInt(prompt("Enter a number between 1-100: "));

//   attempt++;

//   if (guess<secret) {
//     alert("too small");
    
//   }

//   else if(guess > secret){
//     alert("too large");
//   }
   
//   else if(guess=="quit"){
// console.log("quitting");
// break;

//   }
  
// }



// alert(`Congratulations! You guessed the number in ${attempt} attempts.`);


// let user;
// let computer;
// let random;

// user=prompt(" enter your choice");

// computer=Math.floor((Math.random()*10))+1;

// alert(`Computer chose: ${computer}`);

// if (computer<3) {
//     computer=("rock"); 
// }

// else if (computer<6){
// computer=("paper");
// }

// else{
//     computer=("siser");
// }


// if (computer==user) {
//     alert("tie");
    
// }

// else if(computer=="rock"&& user=="paper"||
// computer=="paper"&& user=="siser"||
// computer=="siser"&& user=="rock")
// {
//     alert="User wins !";
// }
// else{
//     alert="computer wins"
// }
 

// let userChoice;
// let computerChoice;

// userChoice = prompt("Enter rock, paper, or scissors:");

// computerChoice = Math.random() < 0.33 ? "rock" : Math.random() < 0.66 ? "paper" : "scissors";

// 

// if (userChoice === computerChoice) {
//   alert("Tie!");
// } else if ((userChoice === "rock" && computerChoice === "scissors") ||
//              (userChoice === "paper" && computerChoice === "rock") ||
//              (userChoice === "scissors" && computerChoice === "paper")) {
//   alert("You win!");
// } else {
//   alert("Computer wins!");
// }


// let user;
// let computer;

// user = prompt("Enter your choice (rock, paper, or scissors)");

// computer = Math.floor((Math.random() * 3)) + 1;

// if (computer == 1) {
//   computer = "rock";
// } else if (computer == 2) {
//   computer = "paper";
// } else {
//   computer = "scissors";
// }

// alert(`Computer chose: ${computer}`);

// if (computer == user) {
//   alert("Tie");
// } else if (
//   (computer == "rock" && user == "paper") ||
//   (computer == "paper" && user == "scissors") ||
//   (computer == "scissors" && user == "rock")
// ) 
// {
//   alert("User wins !");
// } 

// else {
//   alert("Computer wins");
// }    



// let word = "secret";
// let guesses = 6;
// let guessedWord = Array(word.length).fill("_");
// let lettersGuessed = [];

// while (guesses > 0 && guessedWord.includes("_")) {
//   alert(guessedWord.join(" "));

//   let guess = prompt("Guess a letter:").toLowerCase();

//   if (lettersGuessed.includes(guess)) {
//     alert("You already guessed that letter!");
//   } else {
//     lettersGuessed.push(guess);

//     if (word.includes(guess)) {
//       for (let i = 0; i < word.length; i++) {
//         if (word[i] === guess) {
//           guessedWord[i] = guess;
//         }
//       }
//     } else {
//       guesses--;
//       alert(`Incorrect! ${guesses} guesses remaining.`);
//     }
//   }
// }

// if (guessedWord.includes("_")) {
//   alert(`Game over! The word was ${word}.`);
// } else {
//   alert("Congratulations! You guessed the word.");
// }




// let numberToGuess = Math.floor(Math.random() * 100) + 1;
// let attempts = 10;

// while (attempts > 0) {
//   let userGuess = parseInt(prompt("Guess the number between 1 and 100:"));

//   if (userGuess === numberToGuess) {
//     alert("Congratulations! You guessed the number.");
//     break;
//   } else if (userGuess > numberToGuess) {
//     alert("Too high!");
//   } else {
//     alert("Too low!");
//   }

//   attempts--;
//   alert(`You have ${attempts} attempts remaining.`);
// }

// if (attempts === 0) {
//   alert(`Game over! The number was ${numberToGuess}.`);
// }






// let choices = ["rock", "paper", "scissors"];
// let userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
// let computerChoice = choices[Math.floor(Math.random() * 3)];

// alert(`Computer chose: ${computerChoice}`);

// if (userChoice === computerChoice) {
//   alert("It's a tie!");
// } else if (
//   (userChoice === "rock" && computerChoice === "scissors") ||
//   (userChoice === "paper" && computerChoice === "rock") ||
//   (userChoice === "scissors" && computerChoice === "paper")
// ) {
//   alert("You win!");
// } else {
//   alert("You lose!");
// }



// // DELTA/NEW START/quiz_game.js

// let questions = [
//   { question: "What is the capital of France?", answer: "paris" },
//   { question: "What is 2 + 2?", answer: "4" },
//   { question: "What is the color of the sky?", answer: "blue" }
// ];

// let score = 0;

// for (let i = 0; i < questions.length; i++) {
//   let userAnswer = prompt(questions[i].question).toLowerCase();
//   if (userAnswer === questions[i].answer) {
//     score++;
//     alert("Correct!");
//   } else {
//     alert(`Wrong! The correct answer is ${questions[i].answer}.`);
//   }
// }

// alert(`You scored ${score} out of ${questions.length}.`);
  
  
// console.log("hello");


// let h1 = document.querySelector("h1")

// console.log(h1);


// /changing html/


// let h1= document.querySelector("h1")

// h1.innerHTML="hey haaaa";



// changing css

// let h1= document.querySelector("h1");

// h1.style.color="red";

// h1.style.backgroundColor="blue";

// h1.addEventListener("click",function(){
//     console.log("hello");
    
// })


// let h1 = document.querySelector("h1");

// h1.addEventListener("click",function(){
//    h1.innerHTML="badal gaya hu me";
//    h1.style.color="red";
//    h1.style.backgroundColor="black";
    
// })



// let bulbe = document.querySelector("#bulb");

// bulbe.addEventListener("click",function(){
//     bulbe.innerHTML="color changed";

//     bulbe.style.backgroundColor="red";
// })



// let light=document.querySelector("#bulb");

// let btn=document.querySelector("button");

// let flag=0

// if(flag==0){
    
// }


// btn.addEventListener("click",function(){
//     light.style.backgroundColor="red";

// });

// console.log("hello World");


  
//  saveTodb ("My college")
//   .then(() => {
// console.log("Promis was resolved");

//   })

//   .catch(()=>{
//     console.log("promis was rejected");
    
//   })



h1 = document.querySelector("h1");

    function changeColor(color,delay,nextColorChange) {
        setTimeout(()=>{
            h1.style.color=color;
            if(nextColorChange)nextColorChange();
        },delay)
    }

    changeColor("red",1000,()=>{
 changeColor("green",1000,()=>{
     changeColor("yellow",1000,()=>{
         changeColor("pink",1000,()=>{
    });
      });
        });
          });







 


