'use strict';

const Database = require('./database');

const options = {
    host: 'localhost', //the host of db
    port: 3306, //the port of db
    user: 'zeke',
    password: '1234',
    database: 'employeeDb',
    allowPublicKeyRetrieval: true //mysql
};

const db = new Database(options);


run();

//functions

function printWorkers(employees){
    for(const person of employees){
        console.log(
            `${person.id}: ${person.firstname} ${person.lastname}`+
            ` Dept: ${person.department}, ${person.salary}`
        );
    }
}

async function getAll(){
    try{
        const result = await db.doQuery('select * from employee');
        if(result.resultSet){
            printWorkers(result.queryResult);
        }
    }
    catch(error){
        console.log(error);
    }
}

async function getOne(id){
    try{
        const result = await db.doQuery('select * from employee where id=?',[id]);
        if (result.queryResult.length>0){
            printWorkers(result.queryResult);
        }
        else{
            console.log(`No employee found with id=${id}`);
        }
    }
    catch(err){
        console.log(err);
    }
}

async function add(employee){
    try{
        const parameters =[
            employee.id,
            employee.firstname,
            employee.lastname,
            employee.department,
            employee.salary
        ];
        const  sql='insert into employee values(?,?,?,?,?)';

        const status = await db.doQuery(sql,parameters);
        console.log(status);
    }
    catch(err){
        console.log(err);
    }
}

async function remove(id){
    try{
        const status= await db.doQuery('delete from employee where id=?',[id]);
        console.log(status);
    }
    catch(err){
        console.log(err);
    }
}

async function update(modifiedEmployee){
    try{
        const sql='update employee set firstname=?, lastname=?,'+
        'department=?, salary=? where id=?';

        const parameters=[
            modifiedEmployee.firstname,
            modifiedEmployee.lastname,
            modifiedEmployee.department,
            modifiedEmployee.salary,
            modifiedEmployee.id
        ];
        const status=await db.doQuery(sql,parameters);
        console.log(status);
    }
    catch(err){
        console.log(err);
    }

}

//main function
async function run(){
    await getAll();
    console.log("################# getOne ###############")
    await getOne(12);
    console.log('########### remove #########');
    await remove(201);
    await getAll();
    console.log('############## add ###############');
    await add({
        id:201,
        firstname:'Mike',
        lastname:'Jones',
        department:'maintenance',
        salary:4000
    });
    console.log("############### getAll ###############");
    await getAll();
    console.log('########## update ######');
    await update({
        id: 201,
        firstname: 'Mikex',
        lastname: 'Jonesx',
        department: 'maintenancex',
        salary: 4999
    });
    console.log("############### getAll ###############");
    await getAll();
}