// O(n²)
function selectionSort(arr: number[]) {
  let comparisons = 0;
  let swaps = 0;

  for (let pass = 0; pass < arr.length; pass++) {
    let minIdx = pass;

    for (let i = pass + 1; i < arr.length; i++) {
      comparisons++;
      if (arr[i] < arr[minIdx]) {
        minIdx = i;
      }
    }

    if (minIdx !== pass) {
      let current = arr[pass];
      arr[pass] = arr[minIdx];
      arr[minIdx] = current;
      swaps++;
    }
  }

  console.log({ comparisons, swaps });

  return arr;
}

console.log(selectionSort([1, 2, 3, 4, 5]));
console.log(selectionSort([1, 2, 3, 5, 4]));
console.log(selectionSort([2, 1, 3, 4, 5]));
console.log(selectionSort([5, 4, 3, 2, 1]));
