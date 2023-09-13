function gcd(a, b) {  // 최대공약수 구하기
    while(b !== 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function lcm(a, b) {  // 최소공배수 구하기
    return a * b / gcd(a, b);
}

function solution(numer1, denom1, numer2, denom2) {
    let commonDenom = lcm(denom1, denom2);  // 통분하기 위한 분모의 최소공배수 구하기

    // 두 분수를 같은 분모를 가지도록 만들고 분자들을 더하기
    let commonNumer = numer1 * (commonDenom / denom1) + numer2 * (commonDenom / denom2);

    // 결과 분수를 기약 분수로 만들기 위해 분자와 분모의 최대공약수로 나누기
    let commonGcd = gcd(commonNumer, commonDenom);
    return [commonNumer / commonGcd, commonDenom / commonGcd];
}
