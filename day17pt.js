// console.log("hello");
  
// let i=prompt("Enter a valuve")

//  for(let i=1;i<=100;i++){
//     console.log(i);

//  }


// for(let i=10;i>=1;i--){
//     console.log(i); 
// }


//  for(i=1;i<=30;i=i+2){
//     console.log(i);
//  }

// console.log("backwards");

// for(i=15;i>=1;i=i-2){
//     console.log(i)
// }

//   for(i=2;i<=10;i=i+2){
//     console.log(i);
//   }

//   console.log("backewards");

//   for(let i=20;i>=1;i=i-2)
// {
//     console.log(i)
// } 

// console.log("helo");

// for(let i=5;i<=50;i=i+5){
//   console.log(i);
// }

// let n=prompt("Enter a number");
// n=parseInt(n);
// for(i=n;i<=n*10;i=i+n){
//   console.log(i);
// }

// for(i=1;i<=3;i++){
//   console.log(`outer loop${i}`);
//   for(j=1;j<=3;j++){
//     console.log(j);
//   }

// } 

// let i=1;
// while(i<=50){
//   console.log(i);
//   i++;
// } 

// console.log("backward");
// let i=50;
// while(i>=1){
//   console.log(i);
//   i--;
// }
 
//  const favmovie="avathar";
  
//  let guess=prompt("Enter the movie name");

//  while((guess!=favmovie)){
// if(guess=="quit"){
//    console.log("you quit the game ");
//    break;
// }

//     guess=prompt("plese try again");  
//  }

//  if(guess==favmovie){
//    console.log("congrats you entered a write answer");
//  }

 
// let fruits=["appale","banaana","litchi","mango","pinaple","kiwi"];

// for(i=0;i<fruits.length;i++){
//    console.log(i,fruits[i]);
// }
  
 
// let fruits=["appale","banaana","litchi","mango","pinaple","kiwi"];
// for(i=fruits.length-1;i>=0;i--){
//    console.log(i,fruits[i]);
// }


// let heroes=[["iron man","super man","spider man","thor"],
// ["wonder women","splash","jakichan"]];

//  for(i=0;i<heroes.length;i++){
//    console.log(i,heroes[i],heroes[i].length);

//    for(let j=0;j<heroes[i].length;j++){
//       console.log(`j=${j},${heroes[i],[j]}`) ;
//    }  
//  } 


//  let student=[["shiva",65],["sevanth", 90],["samyagdha", 80]];
//  for(let i=0;i<student.length;i++){
// console.log(`info of student${i+1}`);
//   for(let j=0;j<student[i].length;j++){
//     console.log(student[i][j]);
//   }
//  }


//  let fruits=["mango","apple","banana","pinaple","pappaya"];
//  for(purts of fruits){
//   console.log(purts);
//  }
  
// for ( spel of "apnacollege"){
//   console.log(spel);
// }


// let marvels=[["superman","spiderman","thor"],["jangly","sparks","jilebiking"]];
// for(list of marvels){
//   for(names of list ){
//     console.log(names);
//   }
   
// }   


// let names=[
//   ["sevantha","sanjaya","sumantha"],
//   ["manya","adithi","janani"]
// ];

// for(boys of names){
//   for(all of boys){
//     console.log(all);
//   }
// }


 let todo=[];
 req=prompt("Enter your choice");

 while(true){
  if(req=="quit"){
    console.log("Quiting the app");
    break;
    
  }
  if(req=="list"){
    console.log("------------------");
    for(let i=0;i<todo.length;i++){
      console.log(i,todo[i]);
      
    }
    console.log("------------------");
  }

  else if(req=="add"){
    let task=prompt("Enter the sujjestion");
   todo.push(task);
    console.log("task added");
  }



  else if(req=="delete"){
    let idx=prompt("plese enter the index to delete");
    todo.splice(idx,1);
    console.log("task deleted");
  }

  else{
    console.log("invalid input");
    
  }
  req=prompt("Enter your choice");
 }

 


