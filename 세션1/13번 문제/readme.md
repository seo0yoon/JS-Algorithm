대소문자 변환
대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로
변환하여 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
▣ 출력설명
첫 줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력합니다.
▣ 입력예제 1
StuDY
▣ 출력예제 1
sTUdy

풀이 방법

1. 입력받은 문자열을 for문으로 순회한다.
2. 조건문으로 기존의 문자열과 대문자가 있는 문자열을 비교해준다.
3. 참이면 answer에 소문자로 바꿔서 저장, 아니면 대문자로 바꿔서 저장해준다.
