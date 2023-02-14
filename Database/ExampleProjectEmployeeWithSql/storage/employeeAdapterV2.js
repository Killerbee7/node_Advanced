'use strict';

function adapt(item){
    console.log('adapterV2')
    return Object.assign(item, {
        id:+item.id,
        salary:+item.salary
    });
}

module.exports = {adapt}