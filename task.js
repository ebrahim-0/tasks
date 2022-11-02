function sum(num1, num2) {
  let result = 0;
  for (i = num1; i <= num2; i++) {
    result += i;
  }
  return result;
}

console.log(sum(2, 5));

// ------------

let obj = {};

function count(string) {
  string.split("").forEach((ele) => {
    obj[ele] = obj[ele] ? obj[ele] + 1 : 1;
  });
  return obj;
}

console.log(count("hello"));
