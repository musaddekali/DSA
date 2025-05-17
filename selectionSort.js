const numbers = [4, 6, 1, 33, 5, 10];

function selectionSort(arr) {
  const data = arr.slice();
  const n = data.length;
  for( let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
        console.log({minIndex, j})
        if(data[j] < data[minIndex]) {
            minIndex = j;
        }
    }
    
    [data[i], data[minIndex]] = [data[minIndex], data[i]]
    
    console.log(`====== Main ${i} loop end ======`)

  }
  return data;
}

console.log(selectionSort(numbers));
