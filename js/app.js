// Looping a Triangle
// Write a loop that makes seven calls to console.log to output a triangle with # signs.
// for (var line = "#"; line.length < 8; line+= "#")

// console.log(line);


//FizzBuzz Challenge
// Write a program that uses console.log to print all numbers from 1 to 100, with some exceptions. 
for (var i=1; i < 100; i++) {
    var output = "";
    if (i % 3 ==0)
      output += "Fizz";
    if (i % 5 ==0)
      output += "Buzz";
    console.log(output || i);
};

