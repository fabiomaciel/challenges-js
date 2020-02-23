/**
 * get the minimun bets 
 * always start with 1 chip
 * N is the total chips in the end of day
 * K is the maximum times of all in
 * 
 */

// if the amount of chips is even and have all ins availables cut the half
// if the amount of chips is odd or have no all ins availables subtract 1
// return the times of iteration
function solution(N, K) {
    let bets = 0;
    while(N > 1){
        bets++;
        if(N % 2 == 0 && K > 0){
            K--;
            N = N/2;
            continue;
        }
        N--;
    }
    return bets;
}