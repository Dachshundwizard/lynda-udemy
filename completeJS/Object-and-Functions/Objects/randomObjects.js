// Primitives vs Object

// Primitives

// variables containing primitives actually hold the value itself, whereas variables associated with objects do not contain the object. They contain a reference to where the object is stored.
// A variable assigned to an object just points to an object

var a = 23;
var b = a;

a = 46;

console.log(a);
console.log(b);


 // Objects
 var obj1 = {
   name: 'Quinten',
   age: 30
 };
 var obj2 = obj1;
 obj1.age = 26;
 console.log(obj1.age);
 console.log(obj2.age);

                              // These vars are just pointing to the exact same object in memory.

// Functions

var age - 27;
var obj3 = {
  name: 'Quinten',
  city: 'Seattle'
};

function change(a, b) {
  a = 26;
  b.city = 'Bellevue'
};

change(age, obj3);
