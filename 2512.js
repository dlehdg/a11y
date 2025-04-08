// 1. 모든 요청이 배정될 수 있는 경우에는 요청한 금액을 그대로 배정한다
// 2. 모든 요청이 배정될 수 없는 경우에는 특정한 정수 상한액을 계산하여 그 이상인
// 예산요청에는 모두 상한액을 배정한다.
// 상안액 이하의 예산요청에 대해서는 요청한 금액을 그대로 배정한다
// 상안금약을 찾는것이 목표

// function binarySearch(arr, target, start, end) {
//   if (start > end) return -1;

//   let mid = parseInt((start + end) / 2);

//   if (arr[mid] == target) return mid;
//   else if (arr[mid] > target) {
//     return binarySearch(arr, target, start, mid - 1);
//   } else arr[mid] < target;
//   return binarySearch(arr, target, mid + 1, end);
// }

// const city = 4;

let arrs = [120, 110, 140, 150];

let valueArr = arrs.sort();

let maxValue = 485;

let start = 1;
// let end = arrs[arrs.length - 1];
let end = 150;
let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let total = 0;
  for (let x of valueArr) {
    total += Math.min(mid, x);
  }
  console.log(total);
  console.log(end);

  if (total <= 485) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log("결과 값 :", result);
