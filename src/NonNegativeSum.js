/**
 * sum the sequence of non negative numbers
 * if a negative number has encountered, break and start again after that
 * return the biggest number of these sums
 */

function solution(A) {
    let max = 0;
    let sum = 0;
    
    function setMax(){
        if(max < sum) max = sum;
            sum = 0;
    }

    A.forEach(n => {
        if(n < 0) {
            setMax()
            return;
        }
        sum += n;
    });
    setMax()
    return max;
}