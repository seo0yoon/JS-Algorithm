function solution(arr) {
  let answer = []; //최종결과값을 넣어주는 아이
  let odd = []; //홀수를 구하는거
  let sum = 0; //홀수 더한거
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      //배열의 i번째를 2로 나눴을때 나머지가 0이 아닌거 === 홀수
      odd.push(arr[i]); //배열의 i번째가 홀수면 odd 배열에 push 해줘
    }
  }
  let min = odd[0]; //홀수 배열 중에 최소값 구하기
  for (let i = 0; i < odd.length; i++) {
    sum = sum + odd[i];
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
