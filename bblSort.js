const numbers = [4, 6, 1, 33, 5, 10];
const sortedNum = [1, 2, 3, 4, 5, 6]

function bblSort(arr) {
  const data = arr.slice();
  for (let i = 0; i < data.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < data.length - i - 1; j++) {
      console.log(data[j], data[j + 1]);
      if (data[j] > data[j + 1]) {
        const temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }

    if(!swapped) {
        break;
    }
  }

  return data;
}

console.log(bblSort(sortedNum));
