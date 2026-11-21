function insertionSort(arr: number[]): number[] {
  for (let pass = 1; pass < arr.length; pass++) {
    const key = arr[pass];

    let j = pass - 1;
    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([2, 1, 5, 3, 4]));
