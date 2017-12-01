function calculateAge(yearOfBirth) {
  var age = 2017 - yearOfBirth;
  return age;
}

function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if(retirement >= 0) {
    return name + ' retires in ' + retirement + ' years.';
  } else {
    return name + ' has already retired.';
  }
}

console.log(yearsUntilRetirement('Quinten', 1991));
console.log(yearsUntilRetirement('Issa', 1988));
console.log(yearsUntilRetirement('John', 1951));
