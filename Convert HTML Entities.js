function convertHTML(str) {
  // &colon;&rpar;
  var arr=str.split(" ");
  for(var i=0;i<arr.length;i++){
    switch(arr[i]){
      case "&": arr[i]="&amp;";
                break;
      case ">": arr[i]="&gt;";
                break;
      case "<": arr[i]="&lt;";
                break;
      case "<>":arr[i]="&lt;&gt;";
                break;
      default: var arr1=arr[i].split('');
            for(var j=0;j<arr1.length;j++){
                    if(arr1[j]=='"'){
                    arr1[j]="&quot;";
                        
                        arr[i]=arr1.join('');
                  }else if((arr1[j]=="'")){
                    arr1[j]="&apos;";
                      arr[i]=arr1.join('');
                  }
               }
               break;
                           
       }
  }
    
  var s=arr.join(" ");
  return s;
}
convertHTML("Dolce & Gabbana");