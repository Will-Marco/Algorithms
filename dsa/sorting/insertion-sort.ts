function insertionSort(arr: number[]): number[] {
  for (let pass = 0; pass < arr.length; pass++) {
    let current = arr[pass];

    let i = pass - 1;
    while (i >= 0 && arr[i] > current) {
      arr[i + 1] = arr[i];
      i--;
    }

    arr[i + 1] = current;
  }

  return arr;
}

console.log(insertionSort([2, 1, 5, 3, 4]));
