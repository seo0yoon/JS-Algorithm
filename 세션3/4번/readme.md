가장 짧은 문자거리
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
▣ 입력예제 1
teachermode e
▣ 출력예제 1
1 0 1 2 1 0 1 2 2 1 0

풀이 방법

1. 문자열을 하나씩 순회해야하니 for문 사용, 조건문으로 s와 t비교한다.
2. 조건이 맞으면 카운터를 0으로 초기화하고, 조건이 틀리면 카운터를
   +1 올려준다. 그리고 answer 카운터를 push해준다.
   [1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 0] 라는 값이 저장되고,
   이값은 왼=>오른쪽으로 반복문을 돌았을때 나오는 값이다.
3. 반대로 문자열의 오른쪽=>왼쪽으로 반복문을 돌려준다.
   => i는 s의 문자길이만큼 (-1은 문자열이기때문에) i는 0보다 크거나 작다라는
   기준을 넣어준다. (i가 --로 증감하기때문에)
4. 조건문으로 s와 t를 또 다시 비교해주고, 같으면 0을 출력 틀리면 카운터를 +1 을 올려준다.
5. 결과값에 (answer[i]) 최소 값 구하는 메소드를 사용하여
   양쪽 숫자 중 최소값을 구해서 배열에 넣어준다.
   => answer 에는 왼=>오른쪽의 거리를 구한 값이 들어있다.
   배열에 접근해야하니 대괄호로 접근하고 Math.min 메소드를 활용하여
   현재의 count 값과 위에서 구해준 answer[i] 값을 비교해서 더 작은 숫자를
   answer[i]로 넣어준다.
