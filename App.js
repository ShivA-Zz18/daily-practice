// console.log("Hello");



// function Arry(){
//     let Array=["Sman","rajath","Vikyath","Varun"];
//     console.log(Array);
    
// }

// Arry();



// function poem(){
// console.log("jony jony YEss papap");
// console.log("Eating shugar no papap");
// console.log("Up above the hands of high");
// console.log("like dimend in the sky");


// }

// poem();




// function diseprint() {

//     let dise=Math.floor(Math.random()*6)+1

//     console.log(`Dise number is : ${dise}`);
    
    
// }

// diseprint();


// function stdInfo(name,age,gender){
//     console.log(`student name is:${name} & age is ${age} gennder is ${gender}`);
    
// }

// stdInfo("rajath",18,"Male");


// function printavg(a,b,c){
//      avg =a+b+c/3;
//      console.log(avg);
     
// }

// printavg(10,20,30);


// function table(n){
   
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
    
// }

// }

// table(10);




// let dise=Math.floor(Math.random()*6)+1;

// console.log(`dise value is:  ${dise}`);



// let car={
// model:"jemini",
// name:"ambasider",
// color:"black"
// };


// console.log(car);



// let Person={
// name:"Amith",
// age:23,
// city:"rajasthan"
// };

// console.log(Person);





// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;
// //elements larger than a number num
// function getElements(arr, num) {
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] > num) {
// console.log(arr[i]);
// }
// }
// }
// getElements(arr, num);





// let str = "abcdabcdefgggh";

// // Function to get String with all unique elements
// function getUnique(str) {
//   function removeDuplicates(str) {
//     let ans = ""; 
//     for (let i = 0; i < str.length; i++) {
//       let currChar = str[i];
//       if (ans.indexOf(currChar) === -1) { 
//         ans += currChar; 
//       }
//     }
//     return ans; 
//   }

//   // Call the removeDuplicates function and return the result
//   return removeDuplicates(str); 
// }

// // Call the getUnique function and print the result
// let uniqueStr = getUnique(str); 
// console.log(uniqueStr); // Output: "abcdcfg"



// let country = ["Australia", "Germany", "United States of America"];
//     function longestName(country) {
//     let ansIdx = 0;
//     for (let i = 0; i < country.length; i++) {
//     let ansLen = country[ansIdx].length;
//     let currLen = country[i].length;
//     if (currLen > ansLen) {
//     ansIdx = i;
//     }
//     }
//     return country[ansIdx];
//     }
//     longestName(country);

//     let longestCountry = longestName(country); 
//     console.log(longestCountry); 



// let str = "apnacollege";
// function countVowels(str) {
// let count = 0;
// for (let i = 0; i < str.length; i++) {
// if (
// str.charAt(i) == "a" ||
// str.charAt(i) == "e" ||
// str.charAt(i) == "i" ||
// str.charAt(i) == "o" ||
// str.charAt(i) == "u"
// ) {
// count++;
// }
// }
// return count;
// }

// let vowelCount = countVowels(str); 
// console.log(vowelCount); 



// console.log("hello");

// const  sum=(a,b) =>{
//     console.log(a+b);
    
// }



// console.log("Hello there!");
// setTimeout(()=>{
//     console.log("Apna college");4
    
// },3000);


// console.log("Welocome to ");


// let arr=["raju",23,"moodabidre"];

// let print=function(ele){
//     console.log(ele);
    
// };

// arr.forEach(print);


// let arr=["shiva","karkal"];

// arr.forEach((nam)=>{
//     console.log(nam);
    
// });
 

// let arr=[{
//     name:"bavandar",
//     marks:93
// },

// {name:"ramulu",
//     marks:99},

// {name:"gintu",
//  marks:92}];


//  let gpa=arr.map((el) =>{
// return el.marks/10;
//  });



// arr.forEach(function(st){
//     console.log(st.marks );
    
// });


// let num=[1,2,3,4,5,6,7,8,9,10];

// let ans=num.filter((el)=>{
//     return el<5;

// });



// let Arry=[1,2,3,4,10];

// let max=Arry.reduce((max,el)=>{
//     if (max < el) {
//         return el;
        
//     }else{
//         return max;
//     }
// });


// console.log(max);



// let arr=[10,20,30,40];

// let ans= arr.every((el)=> el % 10==0);

// console.log(ans);


// let arr=[10,3,2,5,1];

// let min=arr.reduce((min,el)=>{
//     if (min>el) {
//         return el;
        
//     }
//     else{
//         return min;
//     }
// })

// console.log(min);


// let arr =[1,2,3,4,5,6,7,9,];

// ans=Math.max(...arr);

// console.log(ans);


// console.log(...arr);


 
// // Define the list of fruits with their point values
// let fruits = [
//     { name: "Apple", points: 10 },
//     { name: "Banana", points: 20 },
//     { name: "Cherry", points: 30 },
//     { name: "Date", points: 40 },
//     { name: "Elderberry", points: 50 }
//   ];
  
//   // Initialize the player's score and time limit
//   let score = 0;
//   let timeLimit = 60; // seconds
  
//   // Function to collect a fruit
//   function collectFruit(fruit) {
//     score += fruit.points;
//     console.log(`Collected ${fruit.name}! Score: ${score}`);
//   }
  
//   // Function to start the game
//   function startGame() {
//     console.log("Game started! Collect as many fruits as possible within 60 seconds.");
//     fruits.forEach(fruit => {
//       // Simulate the player collecting a fruit
//       setTimeout(() => {
//         collectFruit(fruit);
//       }, Math.random() * timeLimit * 1000); // random delay between 0 and timeLimit seconds
//     });
//     setTimeout(() => {
//       console.log("Time's up! Final score: " + score);
//     }, timeLimit * 1000); // end the game after timeLimit seconds
//   }


// startGame();


// let nums=[1,2,3,4,5];

// const square = nums.map((num)=> num * num);

// console.log(square);

// let sum = square.reduce((acc, cur )=> acc + cur ,0);

// let avg = sum / nums .length;

// console.log(avg);



// let numbers=[2,3,4,6,8,-2,-4];

// console.log(numbers.map((Number)=> Number+5));



// let strings =["adam","bob","catlyn","donald","eve"];

// console.log(strings.map((strings)=> strings.toUpperCase()));



// const doubleAndReturnArgs= (arr, ...args)=>[...arr,...args.map((v)=> v * 2),];

// doubleAndReturnArgs([1,2,3,],4,4);
// doubleAndReturnArgs([2],10,4);





// const mergeObj=(obj1, obj2)=>({...obj1,...obj2});

// mergeObj ({a: 1,  b:2},{c:3,d:4});























 



 

