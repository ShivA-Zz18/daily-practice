const mongoose = require('mongoose');



main().then((res)=>{
    console.log("Database connected",res);
    
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

 
}

const userSchema = new mongoose.Schema({
  name: String,
  eamil:String,
  age: Number
});

const User = mongoose.model('User', userSchema);
const employe = mongoose.model('employe', userSchema);   //collections



User.insertMany([
  { name: 'Alice', email: 'rajshiva@123', age: 25 },
  { name: 'Bob', email: 'shiva@123', age: 30 },
  { name: 'bro', email: 'shiva@123', age: 55 }
]).then((res)=>{
    console.log(res)
    });

// User.updateOne({name:"bro"},{age:70}).then((res)=>{console.log(res)});

// User.findByIdAndDelete('68b24ffeb621bb0232a27cda').then((res)=>{console.log(res)});

    
    // User.find({age:{$gte:50}}).then((data) => {
    //     console.log(data);
        
    // });


    




// Example usage:
// const newUser = new User({ name: 'John Doe', email: '

//

// const newUser = new User({ name: 'John Doe',
//      email: 'shiva@123',
//      age: 30 });  
     

//      const newUser2 = new User({ name: 'John Doe',
//      email: 'shiva@123',
//      age: 30 }); 

//      newUser.save().then((res) => console.log('User saved'));
//      newUser2.save().then((res) => console.log('User saved'));


