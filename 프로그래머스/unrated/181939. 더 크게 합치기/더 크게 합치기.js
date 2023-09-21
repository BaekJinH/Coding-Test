function solution(a, b) {
    
}function solution(a, b) {
    var answer = 0;
    const ab = parseInt(String(a) + String(b));
    const ba = parseInt(String(b) + String(a));

    if (ab >= ba) {
        return ab;
    }
    return ba;
    return answer;
}
