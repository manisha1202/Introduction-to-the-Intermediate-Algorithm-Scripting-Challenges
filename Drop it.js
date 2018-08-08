function dropElements(arr, func) {
  // Drop them elements.
  var res=[];
    var index=0;
    var count=0;
  for(var i=0;i<arr.length;i++){
      print(!func(arr[i]));
    if(func(arr[i])){
      index=i;
        count++;
        break;
    }
  }
    if(count>0){
        res=arr.splice(index,arr.length-index);
    }
    
  return res;
}
​
dropElements([1, 2, 3], function(n) {return n < 3; });