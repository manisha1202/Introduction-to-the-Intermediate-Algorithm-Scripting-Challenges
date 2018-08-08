function sumFibs(num) {
  var sum=2;
  var a=1;
  var b=1;
  var c=0;
  while(c<=num){
    c=a+b;
    a=b;
    b=c;
    if(c%2!=0){
          sum+=c;
      }
  }
  return sum-c;
}
​
sumFibs(4);