function SelectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx != i) {
      let temp = array[i];
      array[i] = array[minIdx];
      array[minIdx] = temp;
    }
  }
  return array;
}

const unsortedArray = [0, 3, 5, 6, 8, 4, 7, 9, 1, 2];
console.log("Unsorted Array:", unsortedArray);
let sortedArray = SelectionSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
