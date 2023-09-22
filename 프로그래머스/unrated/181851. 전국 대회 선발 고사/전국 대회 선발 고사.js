// function solution(rank, attendance) {
//     const canAttend = attendance.map((can, idx) => can ? idx : -1).filter(idx => idx !== -1);
    
//     canAttend.sort((a, b) => rank[a] - rank[b]);
    
//     const top3 = canAttend.slice(0, 3);
    
//     return top3[0] * 10000 + top3[1] * 100 + top3[2];
// }
// 1st Code use to Method Channing
function solution ( rank , attendance ) {
    const top3 = attendance
            .map((can , idx) => can ? idx : -1)
            .filter( idx => idx !== -1 )
            .sort((a,b) => rank[a] - rank[b])
            .slice(0 , 3)
    
    return top3[0] * 10000 + top3[1] * 100 + top3[2];
    
}


// function solution(rank, attendance) {
//   const [a, b, c] = rank
//     .map((r, i) => [r, i])
//     .filter(([_, i]) => attendance[i])
//     .sort(([a], [b]) => a - b);
//   return 10000 * a[1] + 100 * b[1] + c[1];
// }