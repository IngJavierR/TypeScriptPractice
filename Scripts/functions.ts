module demo_02_07{
  var squareSimple = function(h: number, w: number){
    return h * w;
  }

  var squareSimplest = (h: number, w: number) => h * w;

  var helloWorld: (name?: string) => void;
  helloWorld = (name?: string) => {
    console.log('Hello ' + (name || ' unknown person'));
  }

  helloWorld();
  helloWorld('Javier');

  var squareIt: (rect: {h: number, w?: number}) => number;
  squareIt = (rect: {h: number, w?:number}) => {
    if(rect.w === undefined){
      return rect.h * rect.h;
    }
    return rect.h * rect.w;
  }

  var rectA = {h: 7};
  var rectB = {h: 7, w:10};

  console.log(squareIt(rectA));
  console.log(squareIt(rectB));
}
