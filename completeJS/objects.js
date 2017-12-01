var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1991,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    this.age = 2017 - this.yearOfBirth;
  }
};

john.calculateAge();
console.log(john.age);



// console.log(john.job);
// console.log(john['lastName']);
//
// var xyz = 'lastName';
//
// console.log(john[xyz]);

// Function Declaration -- A function declaration is 'hoisted'
// function doSomething() {
//   console.log("Declare Something");
// }
//
// // Function Expression -- This is not hoisted, but the variable is
// var something = function() { // usually an anonymous function but could also be named
//   console.log("Express Something");
// }
