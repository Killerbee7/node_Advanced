'use strict';

function insertParameters(employee) {
    return [
        employee.id, employee.firstname, employee.lastname,
        employee.department, employee.salary
    ];
}

function updateParameters(employee) {
    return [
        employee.firstname, employee.lastname,
        employee.department, employee.salary, employee.id
    ];
}

module.exports={insertParameters,updateParameters}