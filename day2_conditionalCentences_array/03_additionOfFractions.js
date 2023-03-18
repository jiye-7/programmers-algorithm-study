// 1. denom1과 denom2의 GCD(최대공약수)먼저 구하고, LCM(최소공배수)구하기 -> 분모
// 2. 각 분자에 최소공배수/분모 한 수를 곱한다.
// 3. 기약분수로 만들기 위해 분자, 분모의 최대 공약수를 구한다.
// 4. 각 분자, 분모를 최대 공약수로 나눈 결과를 [분자, 분모]로 리턴한다.

// 최대공약수 구하는 함수
// 2, 4
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

// 기약분수: 더 이상 약분되지 않으므로 최종적인 형태
// 1, 2, 3, 4
function solution(numer1, denom1, numer2, denom2) {
  let gcdNum = gcd(denom1, denom2); // 2, 4
  let lcmNum = (denom1 * denom2) / gcdNum;

  numer1 = numer1 * (lcmNum / denom1);
  numer2 = numer2 * (lcmNum / denom2);

  let newNumer = numer1 + numer2;
  let newDenom = lcmNum;
  let newGcd = gcd(newNumer, newDenom);

  // 애초에 기약분수일 때 -> 최대공약수가 1일 때
  // 어떤 수 / 1을 하면 결국 어떤 수니까 아래 조건이 필요 없음
  // if(newGcd === 1) {
  // return [newNumer, newDenom];
  // }

  var answer = [newNumer / newGcd, newDenom / newGcd];
  return answer;
}
