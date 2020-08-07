//this is find name using by for loop
const student =[
    {id:1, name: "shakib"},
    {id:2, name: "shuchorita"},
    {id:3, name: "mahi"},
    {id:4, name: "mostofa"}
];
const output =[];
for(let i=0; i < student.length; i++){
    const element = student[i];
    const result = element.name;
     output.push(result);
} 
console.log(output);

//find the name using the map 
const student =[
    {id:1, name: "shakib"},
    {id:2, name: "shuchorita"},
    {id:3, name: "mahi"},
    {id:4, name: "mostofa"}
];
const name = student.map(s => s.name);
console.log(name);


//find the id from the information
const student =[
    {id:1, name: "shakib"},
    {id:2, name: "shuchorita"},
    {id:3, name: "mahi"},
    {id:4, name: "mostofa"}
];
const ids = student.map(s => s.id);
console.log(ids);


//find the big id from the information by using filter
const students =[
    {id:21, name: "shakib"},
    {id:31, name: "shuchorita"},
    {id:41, name: "mahi"},
    {id:71, name: "mostofa"}
];
const bigNumber = students.filter(s => s.id>40);
console.log(bigNumber);
//find the first large id using by find form same information 
const firstLargeId = students.find(s => s.id > 40);
console.log(firstLargeId);