module demo_02_06{
  var square = function(rect:{h: number, w?:number}){
    if(rect.w === undefined){
      return rect.h * rect.h;
    }
    return rect.h * rect.w;
  }

  var sq1: number = square({h: 10});
  console.log('h * h: ' + sq1);
  var sq2: number = square({h: 10, w:5});
  console.log('h * w: ' + sq2);
}
