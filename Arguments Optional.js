function addTogether() {
var len=arguments.length;
    switch(len){
        case 0: return undefined;
                break;
        case 1: if(typeof arguments[0]=="number"){
                    var x=arguments[0];
                    return function sumtwo(y){
                        if(typeof y=="number"){
                            return x+y;
                        }else{
                            return undefined;
                        }
                        
                    }
                }
                break;
        case 2:
                if(typeof arguments[0]=="number" && typeof arguments[1]=="number"){
                    return arguments[0]+arguments[1];
                }else{
                    return undefined;
                }
                break;
    }
  
}
​
addTogether(2,3);