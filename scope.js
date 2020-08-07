bonus = 20;
function sum(first , second){
    let result = first + second + bonus;
    // console.log(bonus);
    if(result > 9){
        const mood ="happy";
        console.log(mood);
    }
    return result;
    
}
const output = sum(5, 7);
// console.log(bonus);
// console.log(output);