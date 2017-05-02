var demo_02_07;
(function (demo_02_07) {
    var squareSimple = function (h, w) {
        return h * w;
    };
    var squareSimplest = function (h, w) { return h * w; };
    var helloWorld;
    helloWorld = function (name) {
        console.log('Hello ' + (name || ' unknown person'));
    };
    helloWorld();
    helloWorld('Javier');
    var squareIt;
    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 10 };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
})(demo_02_07 || (demo_02_07 = {}));
