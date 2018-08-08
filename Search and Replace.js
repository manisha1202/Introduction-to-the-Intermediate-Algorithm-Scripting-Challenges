function myReplace(str, before, after) {
    var change="";
  if(before.charAt(0)==(before.charAt(0)).toUpperCase()){
     var temp=(after.charAt(0)).toUpperCase();
   change =temp+after.substring(1,after.length);
  }
    else{
        change=after;
    }
    if(str.search(before)>0){
        str=str.replace(before,change);
    }
  return str;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");