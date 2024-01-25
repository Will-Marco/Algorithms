const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumEvenIdx() {
  let sum = 0;
  for (i = 0; i < arr.length; i += 2) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumEvenIdx());
