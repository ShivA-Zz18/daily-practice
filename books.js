
const mongoose = require('mongoose');



main().then((res)=>{
    console.log("Database connected",res);
    
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

 
}


const bookScema = new mongoose.Schema({
  titale: {type:String, required: true }, 
  author: {type:String,}, 
  price: {type:Number },   
  
});

const Book = mongoose.model('Book', bookScema);   //collections

let book1 = new Book({ titale: "Book One", author: "Author One", price: 100 });
let book2 = new Book({ titale: "Book Two", author: "Author Two", price: 200 });
let book3 = new Book({ titale: "Book Three", author: "Author Three", price: 300 });             

book1.save();
book2.save();
book3.save();