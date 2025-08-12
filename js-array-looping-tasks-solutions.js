// Task 1 Solution

const colors = ["red", "blue", "green", "yellow", "orange"];
const reverseArr = [];

for (let i = 0; i < colors.length; i++) {
  reverseArr.unshift(colors[i]);
}
console.log(reverseArr);

// Task 2 Solution

const numbers = [12, 98, 5, 41, 23, 78, 46];

const evenNumbers = [];

for (let num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}
console.log(evenNumbers);


// Task 3 Solution

const names = ['Tom', 'Tim', 'Tin', 'Tik'];

let output = "";
for (let name of names ) {
   output = output + name;
}

console.log(output)