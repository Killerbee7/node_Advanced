'use strict';

const sql=require('./sqlStatements.json');

const getAllSql=sql.getAll.join(' ');
const getOneSql=sql.getOne.join(' ');
const insertSql=sql.insert.join(' ');
const updateSql=sql.update.join(' ');
const removeSql=sql.remove.join(' ');
const PRIMARY_KEY=sql.primaryKey;

console.log(getAllSql);
console.log(getOneSql);
console.log(insertSql);
console.log(updateSql);
console.log(removeSql);
console.log('Primary key is', PRIMARY_KEY);