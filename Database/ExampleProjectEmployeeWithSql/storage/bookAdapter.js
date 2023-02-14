'use strict';

function adapt(item){
    console.log('adapterV2')
    return Object.assign(item, {
        number:+item.number
    });
}

module.exports = {adapt}