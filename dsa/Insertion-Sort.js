function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const currentElement = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > currentElement) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentElement;
  }
  return array;
}

const unsortedArray = [1, 5, 9, 7, 2, 8, 0, 6, 4, 3];
console.log("Unsorted Array:", unsortedArray);
let sortedArray = insertionSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
