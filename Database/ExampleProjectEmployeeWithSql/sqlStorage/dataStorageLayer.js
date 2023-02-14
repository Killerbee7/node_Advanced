'use strict';

const Database = require('./database');
const options = require('./databaseOptions.json');

const sql = require('./sqlStatements.json');

const getAllSql = sql.getAll.join(' ');
const getOneSql = sql.getOne.join(' ');
const insertSql = sql.insert.join(' ');
const updateSql = sql.update.join(' ');
const removeSql = sql.remove.join(' ');

const PRIMARY_KEY = sql.primaryKey;

const {CODES,MESSAGES} = require('./statusCodes');

const { insertParameters, updateParameters } = require('./parameterFunctions');

//Datastorage class

module.exports = class Datastorage{

    constructor(){
        this.db=new Database(options);
    }

    get CODES(){
        return CODES;
    }

    getAll(){
        return new Promise(async (resolve,reject)=>{
            try{
                const result = await this.db.doQuery(getAllSql);
                resolve(result.queryResult);
            }
            catch(err){
                reject(MESSAGES.PROGRAM_ERROR());
            }
        });  
    } //end getAll

    getOne(id){
        return new Promise(async (resolve,reject)=>{
            try{
                if (!id) {
                    reject(MESSAGES.NOT_FOUND('---empty---'));
                }
                else {
                    const result = await this.db.doQuery(getOneSql,[id]);
                    if (result.queryResult.length>0) {
                        resolve(result.queryResult[0]);
                    }
                    else {
                        reject(MESSAGES.NOT_FOUND(id))
                    }
                }
            }
            catch(err){
                console.log(err)
                reject(MESSAGES.PROGRAM_ERROR());
            }
            
        });
    } //end of getOne

    insert(employee){
        return new Promise(async (resolve,reject)=>{
            try{
                if (employee) {
                    if (!employee.id) {
                        reject(MESSAGES.NOT_INSERTED());
                    }
                    else {
                        const result=await this.db.doQuery(getOneSql,[employee.id]);
                        if (result.queryResult.length>0) {
                            reject(MESSAGES.ALREADY_IN_USE(employee.id));
                        }
                        else{
                            await this.db.doQuery(insertSql,insertParameters(employee));
                            resolve(MESSAGES.INSERT_OK(employee.id));
                        }
                    }
                  
                }
                else {
                    reject(MESSAGES.NOT_INSERTED());
                }
            }
            catch(error){
                // console.log(error);
                reject(MESSAGES.NOT_INSERTED())
            }
            
        });
    } //end of insert

    update(employee){
        return new Promise(async (resolve,reject)=>{
            try{
                if (employee) {
                    const status = await this.db.doQuery(updateSql,updateParameters(employee));
                    if (status.queryResult.rowsChanged>0) {
                        resolve(MESSAGES.UPDATE_OK(employee.id));
                    }
                    else {
                        reject(MESSAGES.NOT_UPDATED());
                    }
                }
                else {
                    reject(MESSAGES.NOT_UPDATED());
                }
            }
            catch(error){
                console.log(error);
                reject(MESSAGES.NOT_UPDATED());
            }
            
        });
    } //end update

    remove(id){
        return new Promise(async (resolve,reject)=>{
            try{
                if (!id) {
                    reject(MESSAGES.NOT_FOUND('---empty---'));
                }
                else {
                    const status=await this.db.doQuery(removeSql,[id]);
                    if(status.queryResult.rowsChanged>0){
                        resolve(MESSAGES.REMOVE_OK(id));
                    }
                    else{
                        reject(MESSAGES.NOT_REMOVED(id));
                    }
                } 
            }
            catch(error){
                reject(MESSAGES.PROGRAM_ERROR());
            }       
        });
    } //end of remove
}