// Task 1 Solution

const colors = ["red", "blue", "green", "yellow", "orange"];
const reverseArr = [];

for (let i = 0; i < colors.length; i++) {
  reverseArr.unshift(colors[i]);
}
console.log(reverseArr);
