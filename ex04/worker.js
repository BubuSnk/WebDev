let colors = ["red","green","blue","pink","yellow","purple","orange"]
let tcolors = ["aliceblue","antiquewhite","aqua","azure","aquamarine","chocolate","coral"]
let time;
let count = 0;

self.addEventListener('message', function(event) {
    if (event.data === 'start') {

        self.postMessage(Date()+","+colors[count]);
        time = setInterval(function() {
            count += 1;
            if(count > 6){
                count = 0
            }
            self.postMessage(Date()+","+colors[count]+","+tcolors[count]);
        }, 1000);
    }
    if (event.data === 'stop') {
        clearInterval(time)
        self.postMessage(Date()+","+colors[count]+","+tcolors[count]);
    }
});
  


