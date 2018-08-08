function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
    for(var i in arr){
         var orbital = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3) / GM));
        delete arr[i].avgAlt;
        arr[i].orbitalPeriod=orbital;
    }
  return arr;
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);