var demo_02_06;
(function (demo_02_06) {
    var square = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    var sq1 = square({ h: 10 });
    console.log('h * h: ' + sq1);
    var sq2 = square({ h: 10, w: 5 });
    console.log('h * w: ' + sq2);
})(demo_02_06 || (demo_02_06 = {}));
