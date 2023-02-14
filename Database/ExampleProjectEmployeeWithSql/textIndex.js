'use strict';

const Datastorage = require('./storage/dataStorageLayer');

const storage=new Datastorage();

// storage.getAll().then(console.log).catch(console.log);
// storage.getOne().then(console.log).catch(console.log);
// storage.remove(100).then(console.log).catch(console.log);
// (async ()=>{
//     // try{
//     //     const result = await storage.getOne();
//     //     console.log(result);
//     // }
//     // catch(err){
//     //     console.log(err);
//     //     if(err.code===storage.CODES.NOT_FOUND){
//     //         console.log('This is missing')
//     //     }
//     // }
//     try{
//         const status = await storage.update({
//             "id": '100',
//             "firstname": "Leila",
//             "lastname": "Hökki",
//             "department": "ict",
//             "salary": '4009'
//         }
//         );
//         console.log(status);
//     }
//     catch(err){
//         console.log(err);
//     }
    

// })();