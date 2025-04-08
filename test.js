let N = 4;

let Arr = [120, 110, 140, 150].sort();

let M = 485;

let start = 1;

let end = Arr[Arr.length - 1];

let value = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let total = 0;

  for (let x of Arr) {
    total += Math.min(mid, x);
  }

  if (total <= M) {
    value = mid;
    start = mid + 1;
  } else {
    mid = end - 1;
  }
}

console.log(value);
