function solution(arr) {
  let answer = [];
  let sum = 0;
  let odd = [];
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum = sum + arr[i];
      odd.push(arr[i]);
    }
  }
  for (let i = 0; i < odd.length; i++) {
    if (min > odd[i]) {
      min = odd[i];
    }
  }
  answer.push(sum, min);
  return answer;
}
arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
