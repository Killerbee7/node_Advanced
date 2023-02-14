drop database if exists employeeDb;
create database employeeDb;

use employeeDb;

create table employee(
    id integer not null primary key,
    firstname varchar(20) not null,
    lastname varchar(30) not null,
    department varchar(15),
    salary decimal(6,2)
);

insert into employee values(1,'Matt','River','ict',5000);

insert into employee (id,firstname,lastname,department,salary)
values(2,'Mary','Jones','admin',7000);

drop user if exists 'zeke'@'localhost';
create user 'zeke'@'localhost' identified by '1234';

grant all privileges on employeeDb.* to 'zeke'@'localhost';


