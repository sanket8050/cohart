let person = [
    {nav : "sanket" , age :21, locality : "indian"},
    {nav : "sah" , age :22, locality : "france"},
    {nav : "sushant" , age :20, locality : "italy"},
    {nav : "sammm" , age :10, locality : "japan"}
        
];
// Destructuring works on individual objects, not arrays.

let {nav,locality} = person[0];
console.log(nav,locality)

// forEach loop

    // To destructure from an array, access elements using indexing or iterate using forEach or map.



person.forEach(({nav,locality}) => {
    console.log(nav,locality)
})

// loop + destructive

for (let {nav ,locality} of person){
    console.log(`${nav} having locality ${locality}`)     //nice
    
}