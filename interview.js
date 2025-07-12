// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor)
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const student = {
    name : "sanket",
    roll :"2103",
    email:"@gmail"
}

console.log( Object.getOwnPropertyDescriptor(student,"name"));

Object.defineProperty(student," ")

//0`````````````````````0```````````````````````````0``````````````````````````````0```````````````````````````0````````````

// Creating empty objects for different cases
const writableExample = {};
const enumerableExample = {};
const configurableExample = {};

// ========== WRITABLE PROPERTY ==========
Object.defineProperty(writableExample, 'name', {
  value: 'Sanket',
  writable: false, // try changing this to true
  enumerable: true,
  configurable: true
});

writableExample.name = 'Varun';
console.log("Writable (false) - Should remain Sanket:", writableExample.name); // Sanket

Object.defineProperty(writableExample, 'nickname', {
  value: 'Sam',
  writable: true,  // this one can be changed
  enumerable: true,
  configurable: true
});

writableExample.nickname = 'Vicky';
console.log("Writable (true) - Changed to Vicky:", writableExample.nickname); // Vicky


// ========== ENUMERABLE PROPERTY ==========
Object.defineProperty(enumerableExample, 'visible', {
  value: 'I show up in loops',
  enumerable: true, // try false
  writable: true,
  configurable: true
});

Object.defineProperty(enumerableExample, 'hidden', {
  value: 'I am hidden in loops',
  enumerable: false,
  writable: true,
  configurable: true
});

console.log("Enumerable Keys:", Object.keys(enumerableExample)); 
// Shows only 'visible'


// ========== CONFIGURABLE PROPERTY ==========
Object.defineProperty(configurableExample, 'locked', {
  value: 'Permanent',
  configurable: false, // cannot delete or redefine
  writable: true,
  enumerable: true
});

Object.defineProperty(configurableExample, 'flexible', {
  value: 'Temporary',
  configurable: true,
  writable: true,
  enumerable: true
});

// Trying to delete properties
delete configurableExample.locked; // ❌ won't delete
delete configurableExample.flexible; // ✅ will delete

console.log("Configurable (false) - locked:", configurableExample.locked); // Still exists
console.log("Configurable (true) - flexible:", configurableExample.flexible); // undefined

// Trying to redefine a non-configurable property (will throw error)
// Object.defineProperty(configurableExample, 'locked', {
//   value: 'Changed'
// }); // ❌ Uncommenting this will throw a TypeError
