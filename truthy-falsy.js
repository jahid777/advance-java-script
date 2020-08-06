// falsy:
// 0
// ""
// undefined
// null
// NaN
// false

// truthy:
// "0"
// " "(here inside space)
// []
// {}
// "false"

const name = 12;
if(name || name == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}