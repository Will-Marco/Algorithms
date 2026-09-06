function bubbleSort(arr: number[]): number[] {
  let swaps = 0;
  let comparisons = 0;

  for (let pass = 0; pass < arr.length; pass++) {
    let swappedThisPass = false;

    for (let i = 0; i < arr.length - pass - 1; i++) {
      comparisons++;

      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swaps++;
        swappedThisPass = true;
      }
    }

    if (!swappedThisPass) break;
  }

  console.log({ comparisons, swaps });

  return arr;
}

console.log(bubbleSort([1, 2, 3, 4, 5]));
