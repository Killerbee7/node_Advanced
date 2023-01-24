'use strict';
const Database = require('./database');

const options={

    host:'127.0.0.1', //the host of db

    port:3306, //the port of db

    user:'zeke',

    password:'1234',

    database:'employeeDb',

    allowPublicKeyRetrieval:'true'

};

const db=new Database(options);

(async()=>{
    try{
        const  result=await db.doQuery('select * from employee')
        console.log(result);
        if(result.resultSet){
            for(const person of result.queryResult){
            console.log(`${person.firstname} ${person.lastname}`)
            }
        }
        // const insertResult =  await db.doQuery('insert into employee values(?,?,?,?,?)'
        // [12345, 'Verax', 'Riverx', 'ict', 6000])
        // console.log(insertResult);

        // )

        const deleteResult=
        await db.doQuery('delete from employee where firstname=?',['verax'])
        console.log(deleteResult)
    }
    catch(err){
        console.log(err)
    }
})();