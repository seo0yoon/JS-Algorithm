두 배열 합치기
오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램
을 작성하세요.
▣ 입력설명
첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다.
네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.
▣ 출력설명
오름차순으로 정렬된 배열을 출력합니다.
▣ 입력예제 1
3
1 3 5
5
2 3 6 7 9
▣ 출력예제 1
1 2 3 3 5 6 7 9

1. 두배열을 합쳐야하니 초기값을 빈배열로 둔다.
2. concat()을 사용하여 두배열을 합친다. concat은 원본의 배열 데이터를 손상시키지 않는 것.
3. 합쳐진 두배열을 오른차순으로 정렬한다. sort((a,b)=> a-b)
