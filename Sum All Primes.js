	function isPrime(n){
  var count=0;
  for(var i=1;i<=n;i++){
    if(n%i==0){
      count++;
    }
  }
  if(count==2){
    return true;
  }
  else{
    return false;
  }
}
function sumPrimes(num) {
  var sum=0;
  for(var i=2;i<=num;i++){
      if(isPrime(i)){
          sum+=i;
      }
      
      
  }
  return sum;
}
sumPrimes(10);