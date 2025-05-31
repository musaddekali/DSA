const numbers = [4, 2, 6, 1, 5, 10];

// function insertionSort(arr) {
//   const data = arr.slice();
//   const n = arr.length;
//   for (let i = 1; i < n; i++) {
//     console.log(i);
//     let itemToInserted = data[i];
//     let prevIndex = i - 1;
//     while (prevIndex >= 0 && data[prevIndex] > itemToInserted) {
//       data[prevIndex + 1] = data[prevIndex];
//       prevIndex--;
//     }
//     data[prevIndex + 1] = itemToInserted;
//   }
//   return data;
// }

// function insertionSort(arr) {
//   const data = arr.slice();
//   const n = data.length;
//   for (let i = 1; i < n; i++) {
//     const itemToInserted = data[i];
//     let j = i - 1;
//     while (j >= 0 && data[j] > itemToInserted) {
//       data[j + 1] = data[j];
//       j--;
//     }
//     data[j + 1] = itemToInserted;
//   }
//   return data;
// }

// function insertionSort(arr) {
//   const data = arr.slice();
//   const n = data.length;
//   for (let i = 1; i < n; i++) {
//     const itemToInserted = data[i];
//     let j = i - 1;
//     while (j >= 0 && data[j] > itemToInserted) {
//       data[j + 1] = data[j];
//       console.log({'white unsorted: j + 1': j + 1})
//       j--;
//     }
//     console.log({ itemToInserted, i, j, "j + 1": j + 1 });
//     data[j + 1] = itemToInserted;
//   }
//   return `[${arr}] to [${data}]`;
// }

// function insertionSort(arr) {
//   const data = arr.slice();
//   const n = data.length;
//   for(let i = 1; i < n; i++) {
//     const itemToInserted = data[i];
//     let prev = i - 1;
//     while(prev >= 0 && data[prev] > itemToInserted) {
//       data[prev + 1] = data[prev];
//       prev--;
//     }
//     data[prev + 1] = itemToInserted;
//   }
//   return data;
// }


// function insertionSort(arr) {
//   const data = arr.slice();
//   const n = data.length;
//   for(let i = 1; i < n; i++) {
//     const key = data[i];
//     let j = i - 1;
//     while(j >= 0 && data[j] > key) {
//       data[j + 1] = data[j]
//       j--;
//     }
//     data[j + 1] = key;
//   }
//   return data;
// }

// function insertionSort(arr) {
//   const data = arr.slice();
//   const n = data.length;
//   for(let i = 1; i < n; i++){
//     const key = data[i];
//     let j = i - 1;
//     while(j >= 0 && data[j] > key) {
//       data[j + 1] = data[j];
//       j--;
//     }
//     data[j + 1] = key;
//   }
//   return data;
// }

// function insertionSort(arr) {
//   const data = arr.slice();
//   const n = data.length;
//   for(let i = 1; i < n; i++) {
//     const key = data[i];
//     let j = i - 1;
//     while(j >= 0 && data[j] > key) {
//       data[j + 1] = data[j];
//       j--;
//     }
//     data[j + 1] = key;
//   }
//   return data;
// }

// function insertionSort(arr) {
//   const data = arr.slice();
//   const n = data.length;
//   for(let i = 1; i < n; i++) {
//     const itemToInserted = data[i];
//     let j = i - 1;
//     while(j >= 0 && data[j] > itemToInserted) {
//       data[j + 1] = data[j];
//       j--;
//     }
//     data[j + 1] = itemToInserted;
//   }

//   return data;
// }

// function insertionSort(arr) {
//   const data = arr.slice();
//   const n = data.length;
//   for(let i = 1; i < n; i++) {
//     const key = data[i];
//     let j = i - 1; 
//     while(j >= 0 && data[j] > key) {
//       data[j + 1] = data[j];
//       j--;
//     }
//     data[j + 1] = key;
//   }
//   return data;
// }


function insertionSort(arr) {
  const data = arr.slice();
  const n = arr.length;
  for(let i = 1; i < n; i++) {
    const itemToInsert = data[i];
    let j = i - 1;
    while(j >= 0 && data[j] > itemToInsert) {
      data[j + 1] = data[j];
      j--;
    }
    data[j + 1] = itemToInsert;
  }
  return data;
}

console.log(insertionSort(numbers));
