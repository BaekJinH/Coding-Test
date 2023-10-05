function solution(n, control) {
    for ( let i in control ) {
        if ( "w" == control[i] ) {
            n += 1 ;
        }
        if ( "s" == control[i] ) {
            n -= 1 ;    
        }
        if ( "d" == control[i] ) {
            n += 10 ;    
        }
        if ( "a" == control[i] ) {
            n -= 10 ;    
        }
    }
    return n
}