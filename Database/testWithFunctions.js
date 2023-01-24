'use strict';

const Database=require('./database');

const options={

    host:'127.0.0.1', //the host of db

    port:3306, //the port of db

    user:'zeke',

    password:'1234',

    database:'employeeDb',

    allowPublicKeyRetrieval:'true'

};

const db = new Database(options);

run();

//functions
function printWorkers(employee){
    for(const person of employee){
        console.log(`${person.id}: ${person.firstname} ${person.lastname} `+
        `Dept: ${person.department}, ${person.salary}`
        );
    }
}

async function getAll(){
    try{
        const result= await db.doQuery('select * from employee');
        if(result.resultSet){
            printWorkers(result.queryResult);
        }
    }
    catch(error){
        console.log(error);
    }
}

async function run(){
    await getAll();
}