function solution(a, b) {
    const ab = parseInt(String(a) + String(b));
    const mulValue = 2 * a * b;

    if (ab >= mulValue) {
        return ab;
    }
    return mulValue;
}