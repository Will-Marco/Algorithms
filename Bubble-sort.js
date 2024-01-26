function bubbleSort(array) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  }
  return array;
}

const unsortedArray = [1, 5, 6, 2, 8, 3, 4, 7];
let sortedArray = bubbleSort(unsortedArray);
console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
