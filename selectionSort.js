const numbers = [4, 6, 1, 33, 5, 10];

function selectionSort(arr) {
  const data = arr.slice();
  const n = data.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (data[j] < data[minIndex]) {
        minIndex = j;
      }
    }

    // normal way
    // const minValue = data.splice(minIndex, 1)[0];
    // data.splice(i, 0, minValue);

    // efficient way 
    if (minIndex !== i) {
      [data[i], data[minIndex]] = [data[minIndex], data[i]];
    }
  }
  return data;
}

console.log(selectionSort(numbers));
