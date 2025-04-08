let a = 4;
let b = 7;

let arr = [20, 15, 10, 17].sort((a, b) => a - b);

let start = 1;

let end = arr[arr.length - 1];
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let total = 0;

  for (let x of arr) {
    if (x > mid) {
      total += x - mid;
    }
  }

  if (total < b) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
