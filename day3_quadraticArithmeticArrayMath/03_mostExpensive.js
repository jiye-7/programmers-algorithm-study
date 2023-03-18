/**
 * 최빈값 구하기
 *
 * 문제 설명
 * 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
 *
 * 제한사항
 * 0 < array의 길이 < 100
 * 0 ≤ array의 원소 < 1000
 *
 * 입출력 예
 * array	result
 * [1, 2, 3, 3, 3, 4]	3
 * [1, 1, 2, 2]	-1
 * [1]	1
 *
 * 입출력 예 설명
 * 입출력 예 #1
 * [1, 2, 3, 3, 3, 4]에서 1은 1개 2는 1개 3은 3개 4는 1개로 최빈값은 3입니다.
 * 입출력 예 #2
 * [1, 1, 2, 2]에서 1은 2개 2는 2개로 최빈값이 1, 2입니다. 최빈값이 여러 개이므로 -1을 return 합니다.
 * 입출력 예 #3
 * [1]에는 1만 있으므로 최빈값은 1입니다.
 */
const solution = (array) => {
  // array를 순회하며, 배열의 요소 값이 객체의 키로 존재하지 않을 때 해당 요소를 key값으로 value를 1로 할당,
  // 해당 값이 키로 존재한다면 해당 값이 있는 key에 1증가
  // 최빈값이 같은 게 나오는 순간 -1을 리턴
  // 배열의 길이가 1일 때는 해당 0번째 인덱스의 요소 값 리턴
  if (array.length === 1) return array[0];

  let result = {};
  let mode = -1;

  for (let i = 0; i < array.length; i++) {
    let findKey = array[i] in result;

    if (findKey) {
      result[array[i]] = result[array[i]] + 1;
    } else {
      result[array[i]] = 1;
    }
  }

  let max = Math.max(...Object.values(result));
  let modes = Object.keys(result).filter((key) => result[key] === max);

  return modes.length === 1 ? +modes[0] : -1;
};
