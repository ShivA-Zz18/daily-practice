const { faker } = require('@faker-js/faker');
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'DELTA',
  password:'SHIVA'
});

let  getRandomUser =()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), 
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

try{
    connection.query("SHOW TABLES",(ERR,RES)=>{
    if (ERR) throw ERR;
    console.log(RES);
    
})

}catch(ERR){
    console.log(ERR);
    

}


// console.log(getRandomUser());
