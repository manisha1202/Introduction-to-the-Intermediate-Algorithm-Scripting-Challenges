function fearNotLetter(str) {
    var res="";
    var count=0;
    for(var i=0;i<str.length-1;i++){
        if(str.charCodeAt(i+1)!=str.charCodeAt(i)+1){
          count++;
            res=String.fromCharCode((str.charCodeAt(i)+1));
    }
    }
    if(count==0){
      return undefined;
    }
  return res;
}
​
fearNotLetter("abce");