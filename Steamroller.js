function steamrollArray(arr) {
    var res=[];
    function flatten(arr){
      arr.forEach(function(item){
        if(!Array.isArray(item)){
          res.push(item);
        }else{
          flatten(item);
        }
      });
    }
    flatten(arr);
    return res;
}
steamrollArray([1, [2], [3, [[4]]]]);