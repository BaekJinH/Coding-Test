function solution(rank, attendance) {
    const canAttend = attendance.map((can, idx) => can ? idx : -1).filter(idx => idx !== -1);
    
    canAttend.sort((a, b) => rank[a] - rank[b]);
    
    const top3 = canAttend.slice(0, 3);
    
    return top3[0] * 10000 + top3[1] * 100 + top3[2];
}