var
    button1: string,
    button2: string,
    button3: string,

    init: (s: string, p:string, c:string) => void
      = function(start, pause, clear){
      alert(start + pause + clear);
    };

    window.onload = function(){
      init('startButton', 'pauseButton', '111')
    };
