function translatePigLatin(str) {
  var vowel=["a","e","i","o","u"];
  var count=0;
    var index;
    var s="";
         var flag=false;
        var temp=str;
         for(var i=0;i<vowel.length;i++){
             if(temp.charAt(0)==vowel[i]){
                flag=true;
            }
          }
         if(flag){
            s=str+"way";
        }else{
                var ind=0;
            var bool=false;
            
            for(var j=0;j<str.length;j++){
                 for(var i=0;i<vowel.length;i++){
                    if(str.charAt(j)==vowel[i]){
                       ind=j; 
                       bool=true;
                        break;
                    }
                    
                }
                if(bool){
                  break;
                }else{
                  continue;
                }
                    
                }
              
            
            var s2=str.substring(ind,str.length);
            //print(ind);
            var s1=str.substring(0,ind);
            var temp=+"ay";
            s=s2+s1+"ay";
        }
    
  return s;
}
translatePigLatin("consonant");