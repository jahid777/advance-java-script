// const numbers = [3, 4, 5, 6, 7, 8];
// const output =[];
// for(let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);   
// }

// const numbers = [3, 4, 5, 6, 7, 8];
// function squire(element){
//     return element * element;
// }
// const output = squire(5);
// console.log(output);

//this is squire with arrow 
// const squire = element => element * element;
// const result = squire(5);
// console.log(result);
// const squire = x => x * x;
// const result = squire(5);
// console.log(result);


// const numbers = [3, 4, 5, 6, 7, 8];
// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })

// const numbers = [3, 4, 5, 6, 7, 8];
//  const result = numbers.map(function(element){
//     return element * element ;
// })
// console.log(result);


//this is map and arrow for squire
// const numbers = [3, 4, 5, 6, 7, 8];
// const result = numbers.map(x => x*x);
// console.log(result);

//this is filter with large number
// const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const bigNumber = numbers.filter(x => x > 5);
// console.log(bigNumber);

//this is find with large number
const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const bigNumber = numbers.find(x => x > 5);
console.log(bigNumber);