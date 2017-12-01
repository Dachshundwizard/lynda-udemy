// 1. Create an array with some years where persons were born
// 2. Create an empty array
// 3. Use a loop to fill the array with the ages of the persons
// 4. use an other loop to log into the console whether eah person is of full age as well as their age.
// 5. Finally, create a function called "printFullAge" that receives an array of years as an argument.




function printFullAge(years) {
  var ages = [];
  var fullAges = [];
  for (var i = 0; i < years.length; i++) {
    ages[i] = 2017 - years[i];
  }

  for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
      fullAges.push(true);
    } else {
      console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is not of full age.');
      fullAges.push(false);
    }
  }
  return fullAges;
}

var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1991]);

console.log(full_1);
console.log(full_2);
