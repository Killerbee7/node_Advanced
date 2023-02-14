'use strict';

console.log(process.argv);
console.log('number of args:',process.argv.length);
console.log(process.argv[2]);

const [,,...others] = process.argv;
console.log(others);

let sum=0;
for(const num of others){
    sum+= +num; //or Number(num)
}
console.log('sum=',sum);