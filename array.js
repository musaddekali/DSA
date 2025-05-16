const numbers = [4, 6, 1, 33, 5, 10];

// find the max numbers
function findMax(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMax(numbers));

// find min
function findMin(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}

console.log(findMin(numbers));

// find target
function findItem(arr, t) {
  let found = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == t) {
      found = arr[i];
    }
  }

  if (found === null) {
    return `Not found ${t}`;
  }

  return `We found ${found}`;
}

console.log(findItem(numbers, 2));

// find max with recursion

//TODO need deep understanding with recursion

const num = [1, 2, 3, 4];

function getMax(arr) {
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1];
  const subMax = getMax(arr.slice(1));
  return arr[0] > subMax ? arr[0] : subMax;
}

console.log(getMax(num));
