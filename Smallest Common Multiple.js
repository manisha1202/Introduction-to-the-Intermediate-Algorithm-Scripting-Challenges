	function smallestCommons(arr) {
if(arr[0]>arr[1]){
  arr.reverse();
}
function range(min, max) {
        var ar = [];
        for (var i = min; i <= max; i++) {
            ar.push(i);
        }
        return ar;
    }
​
    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }
​
    function lcm(a, b) {
        return (a * b) / gcd(a, b);   
    }
​
    var multiple = arr[0];
    range(arr[0], arr[1]).forEach(function(n) {
        multiple = lcm(multiple, n);
    });
​
    return multiple;
}
smallestCommons([1,5]);