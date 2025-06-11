let person = [
    {nav : "sanket" , age :21, locality : "indian"},
    {nav : "sah" , age :22, locality : "france"},
    {nav : "sushant" , age :20, locality : "italy"},
    {nav : "sammm" , age :10, locality : "japan"}
        
];

console.log(person[0]);

for(let ages of person){
    console.log(ages.age)
}