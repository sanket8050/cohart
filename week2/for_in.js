let person = {
    name : "Sanaket",
    AGE : 21,
    hobby : "coding"
}

for(let key in person){
    console.log(key + " : " + person[key])
}
console.log(person["AGE"])//  also righgbt way to access the value of a key in an object
console.log(person.name) // also right way to access the value of a key in an object