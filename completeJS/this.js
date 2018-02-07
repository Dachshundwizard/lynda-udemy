// the "This" keyword refers to the window object by default

// "This" keyword refers to the object that called the method

var quinten = {
  name: 'Quinten',
  yearOfBirth: 1991,
  calculateAge: function() {
    console.log(this);
    console.log(2017 - this.yearOfBirth);
    function innerFunction() {
      console.log(this);
    }
    innerFunction();  // Although it is written inside of the method, it is still a regular function
  }
}

quinten.calculateAge();


var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge; // Method borrowing
