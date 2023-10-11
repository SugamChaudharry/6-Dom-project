const buttonEl = document.querySelectorAll('.button');
const bodyEl = document.querySelector("body");

buttonEl.forEach( (button) => {
    console.log(button);
    button.addEventListener('click' , (e)=>{
        console.log(e);
        console.log(e.target);
        switch (e.target.id) {
            case "grey":
                bodyEl.style.backgroundColor = e.target.id;
                break;
            case "white":
                bodyEl.style.backgroundColor = e.target.id;
                break;
            case "blue":
                bodyEl.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                bodyEl.style.backgroundColor = e.target.id;
                break;
            case "purple":
                bodyEl.style.backgroundColor = e.target.id;
                break;
        }
    })
} )