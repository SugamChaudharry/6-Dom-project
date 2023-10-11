const clockEl = document.getElementById('clock');

setInterval(()=>{
    let date = new Date();
    clockEl.innerHTML = date.toLocaleTimeString();
},1000);