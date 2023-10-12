const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

//-----------------------------------------------------------------------
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

function changing(x) {
    if (x==start) {
        if (!this.change) {
            this.change = setInterval(() => {
                document.body.style.backgroundColor = randomColor()
            }, 1000);
        }
    } if (x == stop) {
        clearInterval(this.change)
        this.change = null;
    }
}
startBtn.addEventListener('click' , ()=>{
    changing(start);
})

stopBtn.addEventListener('click' , ()=>{
    changing(stop);
})