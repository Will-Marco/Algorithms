function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  
  const middlePivotIndex = Math.floor(arr.length / 2);

  let left: number[] = [];
  let right: number[] = [];
  let middle: number[] = [];

  let i = arr.length - 1;
  while (i >= 0) {
    if (arr[i] == arr[middlePivotIndex]) {
      middle.push(arr[i]);
    } else if (arr[i] < arr[middlePivotIndex]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }

    i--;
  }

  const sortedLeft: number[] = quickSort(left);
  const sortedRight: number[] = quickSort(right);

  // while (i >= 0) {
  //   if (i !== middlePivotIndex) {
  //     if (arr[i] < arr[middlePivotIndex]) left.push(arr[i]);
  //     else right.push(arr[i]);
  //   }
  //   i--;
  // }

  // return [...sortedLeft, arr[middlePivotIndex], ...sortedRight];

  return [...sortedLeft, ...middle, ...sortedRight];
}

console.log(quickSort([7, 2, 9, 4, 3, 8, 5]));
console.log(quickSort([]));
console.log(quickSort([1]));
console.log(quickSort([5, 4, 3, 2, 1]));
console.log(quickSort([3, 1, 3, 2, 3]));

// const sorted = Array.from({ length: 50_000 }, (_, k) => k);
// console.log(quickSort(sorted).length); // 50000, crash'siz
// console.log(quickSort([...sorted].reverse()).length);
